/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module dalvik {
	export module system {
		export class PathClassLoader {
			public constructor(param0: string, param1: java.io.File, param2: string, param3: java.lang.ClassLoader);
			public constructor();
			public constructor(param0: java.lang.ClassLoader);
			public constructor(param0: string, param1: java.lang.ClassLoader);
			public constructor(param0: string, param1: string, param2: java.lang.ClassLoader);
		}
	}
}
