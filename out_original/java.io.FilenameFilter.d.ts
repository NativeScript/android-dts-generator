/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module io {
		export class FilenameFilter {
			public accept(param0: java.io.File, param1: string): boolean;
		}
	}
}
