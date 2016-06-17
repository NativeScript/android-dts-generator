/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module java {
	export module util {
		export class ServiceLoader {
			public reload(): void;
			public iterator(): java.util.Iterator;
			public static load(param0: java.lang.Class, param1: java.lang.ClassLoader): java.util.ServiceLoader;
			public static load(param0: java.lang.Class): java.util.ServiceLoader;
			public static loadInstalled(param0: java.lang.Class): java.util.ServiceLoader;
			public toString(): string;
		}
	}
}
