/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Package.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />

declare module dalvik {
	export module system {
		export class BaseDexClassLoader {
			public constructor();
			public constructor(param0: java.lang.ClassLoader);
			public constructor(param0: string, param1: java.io.File, param2: string, param3: java.lang.ClassLoader);
			public findClass(param0: string): java.lang.Class;
			public findResource(param0: string): java.net.URL;
			public findResources(param0: string): java.util.Enumeration;
			public findLibrary(param0: string): string;
			public getPackage(param0: string): java.lang.Package;
			public toString(): string;
		}
	}
}
