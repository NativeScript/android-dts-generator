/// <reference path="./_helpers.d.ts" />

declare module java {
	export module nio {
		export module charset {
			export class CodingErrorAction {
				public toString(): string;
				public static IGNORE: java.nio.charset.CodingErrorAction;
				public static REPLACE: java.nio.charset.CodingErrorAction;
				public static REPORT: java.nio.charset.CodingErrorAction;
			}
		}
	}
}
