/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Process.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />

declare module java {
	export module lang {
		export class Runtime {
			public exec(param0: native.Array<string>): java.lang.Process;
			public exec(param0: native.Array<string>, param1: native.Array<string>): java.lang.Process;
			public exec(param0: native.Array<string>, param1: native.Array<string>, param2: java.io.File): java.lang.Process;
			public exec(param0: string): java.lang.Process;
			public exec(param0: string, param1: native.Array<string>): java.lang.Process;
			public exec(param0: string, param1: native.Array<string>, param2: java.io.File): java.lang.Process;
			public exit(param0: number): void;
			public gc(): void;
			public static getRuntime(): java.lang.Runtime;
			public load(param0: string): void;
			public loadLibrary(param0: string): void;
			public runFinalization(): void;
			public static runFinalizersOnExit(param0: boolean): void;
			public traceInstructions(param0: boolean): void;
			public traceMethodCalls(param0: boolean): void;
			public getLocalizedInputStream(param0: java.io.InputStream): java.io.InputStream;
			public getLocalizedOutputStream(param0: java.io.OutputStream): java.io.OutputStream;
			public addShutdownHook(param0: java.lang.Thread): void;
			public removeShutdownHook(param0: java.lang.Thread): boolean;
			public halt(param0: number): void;
			public availableProcessors(): number;
			public freeMemory(): number;
			public totalMemory(): number;
			public maxMemory(): number;
		}
	}
}
