package com.telerik;

import com.telerik.dts.Generator;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

public class Main {

	private static final String OUT_DIR = "-output";
	private static final String INPUT_JARS = "-input";
	private static final String SUPER_JARS = "-super";
	private static final String CLASS_MODE = "-class-mode";

	// provide a file with rows in the following format - com.telerik.android.data.SelectionService:1
	// to know how many generic types uses a given generic
	private static final String INPUT_GENERICS = "-input-generics";

	// whether to generate implements for all interfaces implemented by the generic types
	private static final String ALL_GENERIC_IMPLEMENTS = "-all-generic-implements";

	// whether to skip the declarations file generation
	private static final String SKIP_DECLARATIONS = "-skip-declarations";

	// whether to ignore obfuscated classes/namespaces/methods
	// the parameter defines the length of obfuscated names to detect
	private static final String IGNORE_OBFUSCATED = "-ignore-obfuscated";

	// whether a class found in several input jars should be generated from all of them at once
	// rather than from the first one only
	private static final String MERGE_CLASS_VERSIONS = "-merge-class-versions";

	private static final String HELP = "-help";

	private static final Set<String> KNOWN_FLAGS = new LinkedHashSet<>(Arrays.asList(
			OUT_DIR, INPUT_JARS, SUPER_JARS, CLASS_MODE, INPUT_GENERICS,
			ALL_GENERIC_IMPLEMENTS, SKIP_DECLARATIONS, IGNORE_OBFUSCATED, MERGE_CLASS_VERSIONS, HELP));

	public static void main(String[] args) {
		if (args == null || args.length == 0 || isHelpRequested(args)) {
			printUsage(System.out);
			return;
		}

		try {
			InputParameters inputParameters = parseCommand(args);

			long startTime = System.currentTimeMillis();

			Package p = Main.class.getPackage();
			System.out.println("Android d.ts Generator Version : " + p.getSpecificationVersion());

			new Generator().start(inputParameters);

			long elapsedTime = System.currentTimeMillis() - startTime;
			System.out.println("Generation of definitions took " + elapsedTime + "ms.");
		} catch (IllegalArgumentException ex) {
			// A malformed command line is the user's mistake, not a crash: say what is wrong and
			// how to look up the right spelling, without burying it under a stack trace.
			System.err.println("dts-generator: " + ex.getMessage());
			System.err.println("Run with " + HELP + " to see the available options.");
			System.exit(2);
		} catch (Throwable ex) {
			System.err.println(String.format("Error executing Typescript Definitions Generator: %s", ex.getMessage()));
			ex.printStackTrace(System.out);
			System.exit(1);
		}
	}

	public static InputParameters parseCommand(String[] args) throws Exception {
		InputParameters inputParameters = new InputParameters();

		if (args == null) {
			return inputParameters;
		}

		for (int i = 0; i < args.length; i++) {
			String token = args[i];
			int separator = token.indexOf('=');
			String flag = canonical(separator > 0 ? token.substring(0, separator) : token);
			String inlineValue = separator > 0 ? token.substring(separator + 1) : null;

			if (!KNOWN_FLAGS.contains(flag)) {
				throw new IllegalArgumentException("unknown option '"
						+ (separator > 0 ? token.substring(0, separator) : token) + "'");
			}

			switch (flag) {
				case HELP:
					break;
				case ALL_GENERIC_IMPLEMENTS:
					inputParameters.setAllGenericImplements(booleanValue(flag, inlineValue));
					break;
				case SKIP_DECLARATIONS:
					inputParameters.setSkipDeclarations(booleanValue(flag, inlineValue));
					break;
				case CLASS_MODE:
					inputParameters.setClassMode(booleanValue(flag, inlineValue));
					break;
				case MERGE_CLASS_VERSIONS:
					inputParameters.setMergeClassVersions(booleanValue(flag, inlineValue));
					break;
				case IGNORE_OBFUSCATED:
					inputParameters.setIgnoreObfuscatedNameLength(parseLength(flag, valueOf(flag, inlineValue, args, i)));
					if (inlineValue == null) i++;
					break;
				case OUT_DIR:
					inputParameters.setOutputDir(new File(valueOf(flag, inlineValue, args, i)));
					if (inlineValue == null) i++;
					break;
				case INPUT_GENERICS:
					inputParameters.setInputGenerics(existingFile(flag, valueOf(flag, inlineValue, args, i)));
					if (inlineValue == null) i++;
					break;
				case INPUT_JARS:
					i = collectPaths(flag, inlineValue, args, i, inputParameters.getInputJars());
					break;
				case SUPER_JARS:
					i = collectPaths(flag, inlineValue, args, i, inputParameters.getSuperJars());
					break;
				default:
					throw new IllegalArgumentException("unhandled option '" + flag + "'");
			}
		}

		if (inputParameters.getInputJars().isEmpty()) {
			throw new IllegalArgumentException("no inputs given; pass at least one jar or class directory to " + INPUT_JARS);
		}

		List<String> missing = new ArrayList<>();
		for (File input : inputParameters.getInputJars()) {
			if (!input.exists()) {
				missing.add(input.getPath());
			}
		}
		if (!missing.isEmpty()) {
			throw new IllegalArgumentException("input not found: " + String.join(", ", missing));
		}

		inputParameters.getOutputDir().mkdirs();

		return inputParameters;
	}

	/** Both -flag and --flag are accepted; the single dash spelling is the canonical one. */
	private static String canonical(String flag) {
		return flag.startsWith("--") ? flag.substring(1) : flag;
	}

	private static boolean isHelpRequested(String[] args) {
		for (String arg : args) {
			int separator = arg.indexOf('=');
			if (HELP.equals(canonical(separator > 0 ? arg.substring(0, separator) : arg))) {
				return true;
			}
		}
		return false;
	}

	/** The value of a flag, given either as -flag=value or as the token following it. */
	private static String valueOf(String flag, String inlineValue, String[] args, int index) {
		if (inlineValue != null) {
			if (inlineValue.isEmpty()) {
				throw new IllegalArgumentException(flag + " requires a value");
			}
			return inlineValue;
		}

		if (index + 1 >= args.length) {
			throw new IllegalArgumentException(flag + " requires a value");
		}

		String value = args[index + 1];
		if (KNOWN_FLAGS.contains(canonical(value))) {
			throw new IllegalArgumentException(flag + " requires a value, but was followed by '" + value + "'");
		}

		return value;
	}

	private static boolean booleanValue(String flag, String inlineValue) {
		if (inlineValue == null || inlineValue.equalsIgnoreCase("true")) {
			return true;
		}
		if (inlineValue.equalsIgnoreCase("false")) {
			return false;
		}
		throw new IllegalArgumentException(flag + " takes no value, or true/false, but got '" + inlineValue + "'");
	}

	/**
	 * Reads every path belonging to the flag at {@code index}, returning the index of the last token
	 * consumed. An inline -flag=path counts as the first path, and any further bare tokens follow it.
	 */
	private static int collectPaths(String flag, String inlineValue, String[] args, int index, List<File> destination) {
		int found = 0;
		if (inlineValue != null && !inlineValue.isEmpty()) {
			destination.add(new File(inlineValue));
			found++;
		}

		int last = index;
		for (int i = index + 1; i < args.length; i++) {
			if (args[i].startsWith("-")) {
				break;
			}
			destination.add(new File(args[i]));
			found++;
			last = i;
		}

		if (found == 0) {
			throw new IllegalArgumentException(flag + " requires at least one path");
		}

		return last;
	}

	private static int parseLength(String flag, String value) {
		try {
			return Integer.parseInt(value);
		} catch (NumberFormatException e) {
			throw new IllegalArgumentException(flag + " expects a number, got '" + value + "'");
		}
	}

	private static File existingFile(String flag, String value) {
		File file = new File(value);
		if (!file.exists()) {
			throw new IllegalArgumentException(flag + " file not found: " + file.getAbsolutePath());
		}
		return file;
	}

	private static void printUsage(java.io.PrintStream out) {
		out.println("Android d.ts Generator");
		out.println();
		out.println("Generates TypeScript definitions from Java jars or class directories.");
		out.println();
		out.println("Usage:");
		out.println("  java -jar dts-generator.jar " + INPUT_JARS + " <path>... [options]");
		out.println();
		out.println("Options take their value either as a separate argument or after an '=', and may");
		out.println("be written with one or two leading dashes, so -output out, -output=out, --output out");
		out.println("and --output=out are all equivalent.");
		out.println();
		out.println("Required:");
		option(out, INPUT_JARS + " <path>...", "Jars or class directories to generate definitions from.");
		out.println();
		out.println("Options:");
		option(out, OUT_DIR + " <dir>", "Directory the d.ts files are written to. Defaults to ./out.");
		option(out, SUPER_JARS + " <path>...", "Extra jars used only to resolve super classes; no definitions are generated for them.");
		option(out, INPUT_GENERICS + " <file>", "File listing how many type parameters a generic class takes, one 'com.example.Foo:1' per line.");
		option(out, ALL_GENERIC_IMPLEMENTS, "Emit implements clauses for every interface a generic type implements. Off by default, because with more than one implementation one of them usually has to become an extends, which has to be decided by hand.");
		option(out, SKIP_DECLARATIONS, "Do not generate android-declarations.d.ts, and do not reference it.");
		option(out, CLASS_MODE, "Treat input directories as class folders.");
		option(out, MERGE_CLASS_VERSIONS, "Generate a class that appears in several input jars from all of them combined rather than from the first one alone. Intended for definitions spanning multiple Android platform jars, where a member a newer platform dropped still has to be described.");
		option(out, IGNORE_OBFUSCATED + " <n>", "Skip classes and members whose name is n characters or shorter, treating them as obfuscated.");
		option(out, HELP, "Print this message.");
	}

	private static final int DESCRIPTION_COLUMN = 26;
	private static final int LINE_WIDTH = 96;

	private static void option(java.io.PrintStream out, String flag, String description) {
		StringBuilder line = new StringBuilder("  ").append(flag);
		if (line.length() >= DESCRIPTION_COLUMN) {
			out.println(line);
			line = new StringBuilder();
		}

		String indent = new String(new char[DESCRIPTION_COLUMN]).replace('\0', ' ');
		while (line.length() < DESCRIPTION_COLUMN) {
			line.append(' ');
		}

		int available = LINE_WIDTH - DESCRIPTION_COLUMN;
		for (String word : description.split(" ")) {
			if (line.length() - (line.length() > DESCRIPTION_COLUMN ? DESCRIPTION_COLUMN : 0) > 0
					&& line.length() + word.length() + 1 > DESCRIPTION_COLUMN + available) {
				out.println(line);
				line = new StringBuilder(indent);
			}
			if (line.length() > DESCRIPTION_COLUMN) {
				line.append(' ');
			}
			line.append(word);
		}

		out.println(line);
	}
}
