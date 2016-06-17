/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />

declare module java {
	export module io {
		export class FileFilter {
			public accept(param0: java.io.File): boolean;
		}
	}
}
