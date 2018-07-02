package com.telerik;

import com.telerik.dts.Generator;
import com.telerik.dts.StringBuilder2;

import java.io.File;
import java.security.InvalidParameterException;

public class Main {

	private static final String OUT_DIR = "-output";
	private static final String INPUT_JARS = "-input";
	private static final String SUPER_JARS = "-super";

    // provide a file with rows in the following format - com.telerik.android.data.SelectionService:1
    // to know how many generic types uses a given generic
	private static final String INPUT_GENERICS = "-input-generics";

	// whether to generate implements for all interfaces implemented by the generic types
    private static final String GENERATE_GENERIC_IMPLEMENTS = "-generate-generic-implements";

	private static final String HELP = "-help";

	public static void main(String[] args) throws Exception {
		InputParameters inputParameters = parseCommand(args);

		long startTime = System.currentTimeMillis();

		new Generator().start(inputParameters);

		long stopTime = System.currentTimeMillis();
		long elapsedTime = stopTime - startTime;
		System.out.println("Generation of definitions took " + elapsedTime + "ms.");
	}

	public static InputParameters parseCommand(String[] args) throws Exception {
		InputParameters inputParameters = new InputParameters();

		if (args != null) {
			for (int i = 0; i < args.length; i++) {
				String commandArg = args[i];

				if (commandArg.equals(HELP)) {
					printHelpMessage();
				}

				if (commandArg.equals(GENERATE_GENERIC_IMPLEMENTS)) {
					inputParameters.setGenerateGenericImplements(true);
				}

				if (commandArg.equals(OUT_DIR)) {
					if (i != (args.length - 1)) {
						String nextParam = args[i + 1];
						validateOutputDir(inputParameters, nextParam);
					}
				}

				if (commandArg.equals(INPUT_GENERICS)) {
					if (i != (args.length - 1)) {
						String nextParam = args[i + 1];
						validateInputGenerics(inputParameters, nextParam);
					}
				}

				if (commandArg.equals(INPUT_JARS)) {
					for (int jarIndex = i + 1; jarIndex < args.length; jarIndex++) {
						String currentArgument = args[jarIndex];
						if (currentArgument.startsWith("-")) {
							break;
						}
						inputParameters.getInputJars().add(new File(currentArgument));
					}
					if (inputParameters.getInputJars().size() <= 0) {
						throw new IllegalArgumentException("You need to pass input jars to: " + OUT_DIR + " flag");
					}
				}

				if (commandArg.equals(SUPER_JARS)) {
					for (int jarIndex = i + 1; jarIndex < args.length; jarIndex++) {
						String currentArgument = args[jarIndex];
						if (currentArgument.startsWith("-")) {
							break;
						}
						inputParameters.getSuperJars().add(new File(currentArgument));
					}
				}
			}

			inputParameters.getOutputDir().mkdir();
		}

		return inputParameters;
	}

	private static void printHelpMessage() {
		StringBuilder2 helpMessage = new StringBuilder2();
		helpMessage.appendln("This is help for dts generator");
		helpMessage.appendln("usage: java -jar dts-generator.jar <flag> [<args>]");
		helpMessage.appendln("flags:\t\t");
		helpMessage.appendln("\t(Optional)");
		helpMessage.appendln("\t\t[-output <path>]:\tThe direcory the d.ts files will be generated in.");
		helpMessage.appendln("\t\t[-input]:\t\tThe input jars or class directories from which the d.ts files will be generated.");
        helpMessage.appendln("\t\t[-super]:\t\tProvide jar files from which to search for super classes.");
		helpMessage.appendln("\t\t[-input-generics]:\tProvide a file with information for number of generic types per given generic class name.");
		helpMessage.appendln("\t\t[-help]:\t\tPrints this help message.");

		System.out.println(helpMessage);
	}

	private static void validateOutputDir(InputParameters inputParameters, String nextParam) {
		if (nextParam.startsWith("-")) {
			throw new IllegalArgumentException("You need to pass output dir to " + OUT_DIR + " flag");
		}

		File outputDir = new File(nextParam);

		inputParameters.setOutputDir(outputDir);
	}

	private static void validateInputGenerics(InputParameters inputParameters, String nextParam) throws Exception {
		if (nextParam.startsWith("-")) {
			throw new IllegalArgumentException("You need to pass output dir to " + INPUT_GENERICS + " flag");
		}

		File inputGenericsFile = new File(nextParam);

		if (!inputGenericsFile.exists()) {
			throw new Exception(String
					.format("Input generics file not found ( %s )!", inputGenericsFile.getAbsolutePath()));
		} else {
			inputParameters.setInputGenerics(inputGenericsFile);
		}
	}
}