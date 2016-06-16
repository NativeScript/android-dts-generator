package com.telerik.java.api.bcel;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

public class JarScope extends Scope {
	
	private final File jar;
	private final File tempDir;
	private final File outputDir;

	public JarScope(File jar, File tempDir) {
		super(null);
		this.jar = jar;
		this.tempDir = tempDir;
		if(!jar.isDirectory()) {
			this.outputDir = new File(this.tempDir, this.jar.getName());
			System.out.println(this.outputDir.getAbsolutePath());
			unzip(this.jar, this.outputDir);
		}
		else {
			System.out.println(jar.getAbsolutePath());
			this.outputDir = jar;
		}
	}

	public Iterator<DirectoryScope> iterator() {
		return new DirectoryScopeIterator(this.outputDir);
	}
	
	public File getOutputDir() {
		return this.outputDir;
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

}
