package com.telerik.java.api.bcel;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.security.InvalidParameterException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

import org.apache.bcel.classfile.ClassParser;
import org.apache.bcel.classfile.Field;
import org.apache.bcel.classfile.JavaClass;
import org.apache.bcel.classfile.Method;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;

public class Generator {
	
	public interface ClassCallback
	{
		void onVisit(org.apache.bcel.classfile.JavaClass javaClass);
	}
	
	public interface MethodCallback
	{
		void onVisit(org.apache.bcel.classfile.Method method);
	}
	
	public interface FieldCallback
	{
		void onVisit(org.apache.bcel.classfile.Field field);
	}


	public Generator(ClassCallback classVisitor, MethodCallback methodVisitor, FieldCallback fieldVisitor)
	{
		if (classVisitor == null)
		{
			throw new InvalidParameterException("classVisitor cannot be null");
		}
		if (methodVisitor == null)
		{
			throw new InvalidParameterException("methodVisitor cannot be null");
		}
		if (fieldVisitor == null)
		{
			throw new InvalidParameterException("fieldVisitor cannot be null");
		}
		this.classVisitor = classVisitor;
		this.methodVisitor = methodVisitor;
		this.fieldVisitor = fieldVisitor;
	}
	
	public void visit(String filepath) throws FileNotFoundException, IOException, InvalidParameterException
	{
		File f = new File(filepath);
		
		if (!f.exists())
		{
			throw new FileNotFoundException(filepath);
		}
		
		if (f.isFile())
		{
			String ext = FilenameUtils.getExtension(filepath);
			
			if ("jar".equals(ext))
			{
				visitJarFile(f);
			}
			else if ("class".equals(ext))
			{
				visitClassFile(f);
			}
			else
			{
				// TODO: add support for *.aar
				throw new InvalidParameterException("Unsupported file extension=" + ext);
			}
		}
		else
		{
			visitDirectory(f);
		}
	}
	
	private void visitDirectory(File dir) throws IOException
	{
		File[] files = dir.listFiles();
		
		for (File f: files)
		{
			if (f.isDirectory())
			{
				visitDirectory(f);
			}
			else
			{
				String ext = FilenameUtils.getExtension(f.getName());
				
				if ("jar".equals(ext))
				{
					visitJarFile(f);
				}
				else if ("class".equals(ext))
				{
					visitClassFile(f);
				}
			}
		}
	}
	
	private void visitJarFile(File jarFile) throws IOException
	{
		//System.out.println(jarFile.getAbsolutePath());
				
		Path tmpPath =  null;
		
		try
		{
			tmpPath = Files.createTempDirectory("temp-");
			
			File tmpDir = tmpPath.toFile();
			
			unzip(jarFile, tmpDir);
			
			visitDirectory(tmpDir);
		}
		finally
		{
			if (Files.exists(tmpPath))
			{
				FileUtils.deleteDirectory(tmpPath.toFile());
			}
		}
	}
	

	private void visitClassFile(File classFile) throws IOException
	{
		ClassParser cp = new ClassParser(classFile.getAbsolutePath());
		
		JavaClass clazz = cp.parse();
		
		if (clazz.isPublic() && !clazz.isSynthetic())
		{
			//System.out.println(clazz.getClassName());
			
			classVisitor.onVisit(clazz);
			
			Method[] methods = clazz.getMethods();
			for (Method m: methods)
			{
				if (m.isPublic() || m.isProtected())
				{
					methodVisitor.onVisit(m);
				}
			}

			Field[] fields = clazz.getFields();
			for (Field f: fields)
			{
				if (f.isPublic() || f.isProtected())
				{
					fieldVisitor.onVisit(f);
				}
			}

		}
	}

	private void unzip(File zipFile, File outputFolder)
    {
        byte[] buffer = new byte[64 * 1024];
    
        try
        {
    
       	if (!outputFolder.exists())
       	{
       		outputFolder.mkdir();
       	}
    
       	ZipInputStream zis = new ZipInputStream(new FileInputStream(zipFile));
       	ZipEntry ze = zis.getNextEntry();
    
       	while (ze != null)
       	{
   			String fileName = ze.getName();
			File newFile = new File(outputFolder, fileName);

			if (ze.isDirectory())
			{
				newFile.getAbsoluteFile().mkdirs();
			}
			else
			{
	   			FileOutputStream fos = null;
	   
				try
				{
					fos = new FileOutputStream(newFile);
					int len;
					while ((len = zis.read(buffer)) > 0)
					{
						fos.write(buffer, 0, len);
					}
				}
				finally
				{
					if (fos != null) fos.close();
				}
			}
			
			ze = zis.getNextEntry();
       	}
    
   		zis.closeEntry();
		zis.close();
    
       }
       catch (IOException ex)
	   {
          ex.printStackTrace(); 
       }
	}    	
	
    private ClassCallback classVisitor;
	private MethodCallback methodVisitor;
	private FieldCallback fieldVisitor;
	
}
