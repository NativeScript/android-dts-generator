package com.telerik;

import com.telerik.dts.Generator;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.io.File;
import java.security.InvalidParameterException;


public class Main {

	public static void main(String[] args) throws Exception {
		File out = null;
		File[] jars = null;
		boolean generateMultipleFiles = false;

		if(args != null) {
			if (args.length > 0) {
				out = new File(args[0]);
				if (!out.exists()) {
					out.mkdir();
					System.out
							.println(String
									.format("We didn't find the folder you specified ( %s ), so it's going to be created!",
											out.getAbsolutePath()));
				}

			} else {
				throw new InvalidParameterException(
						"You need to pass an output directory!");
			}

			if (args.length > 1) {
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
		}

		if (jars == null) {
			throw new InvalidParameterException(
					"You need to pass a list of jar paths, so metadata can be generated for them!");
		}
		new Generator().start(out, jars, generateMultipleFiles);
	}
}