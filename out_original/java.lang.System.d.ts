/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.Console.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.SecurityManager.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.channels.Channel.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />

declare module java {
	export module lang {
		export class System {
			public static setIn(param0: java.io.InputStream): void;
			public static setOut(param0: java.io.PrintStream): void;
			public static setErr(param0: java.io.PrintStream): void;
			public static arraycopy(param0: java.lang.Object, param1: number, param2: java.lang.Object, param3: number, param4: number): void;
			public static currentTimeMillis(): number;
			public static nanoTime(): number;
			public static exit(param0: number): void;
			public static gc(): void;
			public static getenv(param0: string): string;
			public static getenv(): java.util.Map;
			public static inheritedChannel(): java.nio.channels.Channel;
			public static getProperties(): java.util.Properties;
			public static getProperty(param0: string): string;
			public static getProperty(param0: string, param1: string): string;
			public static setProperty(param0: string, param1: string): string;
			public static clearProperty(param0: string): string;
			public static console(): java.io.Console;
			public static getSecurityManager(): java.lang.SecurityManager;
			public static identityHashCode(param0: java.lang.Object): number;
			public static lineSeparator(): string;
			public static load(param0: string): void;
			public static loadLibrary(param0: string): void;
			public static runFinalization(): void;
			public static runFinalizersOnExit(param0: boolean): void;
			public static setProperties(param0: java.util.Properties): void;
			public static setSecurityManager(param0: java.lang.SecurityManager): void;
			public static mapLibraryName(param0: string): string;
			public static err: java.io.PrintStream;
			public static in: java.io.InputStream;
			public static out: java.io.PrintStream;
		}
	}
}
