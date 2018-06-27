package com.telerik;

import com.telerik.dts.Generator;
import com.telerik.dts.StringBuilder2;

import java.io.File;
import java.security.InvalidParameterException;

public class Main {

	private static final String OUT_DIR = "-output";
	private static final String INPUT_JARS = "-input";

    // provide a file with rows in the following format - com.telerik.android.data.SelectionService:1
    // to know how many generic types uses a given generic
	private static final String INPUT_GENERICS = "-input-generics";

	private static final String GENERATE_MULTIPLE_FILES = "-generate-multiple";

    // whether to generate implements for all interfaces implemented by the generic types
    private static final String GENERATE_GENERIC_IMPLEMENTS = "-generate-generic-implements";

	private static final String USE_CLASS_ALIASES = "-use-class-aliases";
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

				if (commandArg.equals(GENERATE_MULTIPLE_FILES)) {
					inputParameters.setGenerateMultipleFiles(true);
				}

				if (commandArg.equals(GENERATE_GENERIC_IMPLEMENTS)) {
					inputParameters.setGenerateGenericImplements(true);
				}

				if (commandArg.equals(USE_CLASS_ALIASES)) {
					inputParameters.setUseClassAliases(true);
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
		helpMessage.appendln("\t\t[-input]:\t\tThe input jars or class directories from which the d.ts files will be generated");
		helpMessage.appendln("\t\t[-generate-multiple]:\tPass this flag if you want multiple d.ts files to be generated instead of one.");
		helpMessage.appendln("\t\t[-help]:\t\tPrints this help message.");

		System.out.println(helpMessage);
	}

	private static void validateOutputDir(InputParameters inputParameters, String nextParam) {
		if (nextParam.startsWith("-")) {
			throw new IllegalArgumentException("You need to pass output dir to " + OUT_DIR + " flag");
		}

		File outputDir = new File(nextParam);

		if (!outputDir.exists()) {
//			System.out.println(String
//					.format("We didn't find the folder you specified ( %s ), so it's going to be created!",
//							inputParameters.getOutputDir().getAbsolutePath()));
		}

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