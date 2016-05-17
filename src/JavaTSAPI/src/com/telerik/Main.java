package com.telerik;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.io.File;


public class Main {

	public static void main(String[] args) throws Exception {
		
		String outputDir = null;
		File[] jars = null;
		
		if(args != null) {
			if(args.length < 2) {
				throw new Exception("You need to pass input(jars) and output(dts) foler!");
			}
			if(args.length > 0) {
				outputDir = args[0];
			}
			if(args.length > 1) {
				jars = new File[args.length - 1];
				for(int i = 1; i < args.length; i++) {
					File currentJar = new File(args[i]);
					boolean jarExists = currentJar.exists();
					if(!jarExists) {
						throw new Exception("Input dir: " + currentJar + " doesn't exist!");
					}
					
					jars[i-1] = currentJar;
				}
			}

			boolean outputDirExists = Files.exists(Paths.get(outputDir));
			if(!outputDirExists) {
				throw new Exception("Input dir: " + outputDir + " doesn't exist!");
			}
		}
		new com.telerik.java.api.bcel.Test().go(outputDir, jars);
	}
}