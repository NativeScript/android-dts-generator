package com.telerik.java.api.bcel;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.security.InvalidParameterException;
import java.util.Arrays;
import java.util.Comparator;
import java.util.function.Function;
import java.util.function.ToDoubleFunction;
import java.util.function.ToIntFunction;
import java.util.function.ToLongFunction;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

import org.apache.bcel.Repository;
import org.apache.bcel.classfile.ClassParser;
import org.apache.bcel.classfile.Field;
import org.apache.bcel.classfile.JavaClass;
import org.apache.bcel.classfile.Method;
import org.apache.bcel.util.ClassPath;
import org.apache.bcel.util.SyntheticRepository;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;

public class Generator {
	
	public interface VisitorCallback
	{
		void onEnter(String packageName);
		void onLeave(String packageName);
		void onEnter(org.apache.bcel.classfile.JavaClass javaClass);
		void onLeave(org.apache.bcel.classfile.JavaClass javaClass);
		void onVisit(org.apache.bcel.classfile.Method method);
		void onVisit(org.apache.bcel.classfile.Field field);
	}
	
	public Generator(VisitorCallback visitor)
	{
		if (visitor == null)
		{
			throw new InvalidParameterException("visitor cannot be null");
		}
		this.visitor = visitor;
	}
	
	public void visit(String filepath) throws FileNotFoundException, IOException, InvalidParameterException, ClassNotFoundException
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
	
	private static class FullPathComparator implements java.util.Comparator<File>
	{
		@Override
		public int compare(File o1, File o2) {
			String n1 = o1.getName();
			String n2 = o2.getName();
			if (n1.startsWith(n2))
				return -1;
			if (n2.startsWith(n1))
				return 1;
			int result = n1.compareTo(n2);
			return result;
		}
	}
	
	private static final FullPathComparator fullPathComparator = new FullPathComparator();
	
	private void visitDirectory(File dir) throws IOException, ClassNotFoundException
	{
		File[] files = dir.listFiles();
		
		Arrays.sort(files, fullPathComparator);
		
		
		for (File f: files)
		{
			if (f.isDirectory())
			{
				String packageName = f.getName();
				
				if (packageName.contains("-"))
				{
					continue;
				}
				
				visitor.onEnter(packageName);
				
				visitDirectory(f);
				
				visitor.onLeave(packageName);
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
	
	private void visitJarFile(File jarFile) throws IOException, ClassNotFoundException
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
	

	private void visitClassFile(File classFile) throws IOException, ClassNotFoundException
	{
		ClassParser cp = new ClassParser(classFile.getAbsolutePath());
		
		JavaClass clazz = cp.parse();
		
		if ((clazz.isPublic() || clazz.isProtected()) && !clazz.isSynthetic())
		{
			if (clazz.getClassName().contains("-"))
			{
				return;
			}
			//System.out.println(clazz.getClassName());
			
			visitor.onEnter(clazz);
			
			// TODO: call recursively visitClassFile(for each nested subtype)
			
			Method[] methods = clazz.getMethods();
			for (Method m: methods)
			{
				if ((m.isPublic() || m.isProtected()) && !m.isSynthetic())
				{
					visitor.onVisit(m);
				}
			}

			Field[] fields = clazz.getFields();
			for (Field f: fields)
			{
				if (f.isPublic() || f.isProtected())
				{
					visitor.onVisit(f);
				}
			}
			
			visitor.onLeave(clazz);
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
				newFile.getParentFile().getAbsoluteFile().mkdirs();
				
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
	
    private VisitorCallback visitor;
	
}
