/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module lang {
		export class Compiler {
			public static command(param0: java.lang.Object): java.lang.Object;
			public static compileClass(param0: java.lang.Class): boolean;
			public static compileClasses(param0: string): boolean;
			public static disable(): void;
			public static enable(): void;
		}
	}
}
