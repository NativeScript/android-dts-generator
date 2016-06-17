/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />

declare module dalvik {
	export module system {
		export class DexFile {
			public constructor();
			public constructor(param0: java.io.File);
			public constructor(param0: string);
			public static loadDex(param0: string, param1: string, param2: number): dalvik.system.DexFile;
			public getName(): string;
			public toString(): string;
			public close(): void;
			public loadClass(param0: string, param1: java.lang.ClassLoader): java.lang.Class;
			public entries(): java.util.Enumeration;
			public finalize(): void;
			public static isDexOptNeeded(param0: string): boolean;
		}
	}
}
