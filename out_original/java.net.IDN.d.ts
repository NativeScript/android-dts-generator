/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module net {
		export class IDN {
			public static toASCII(param0: string, param1: number): string;
			public static toASCII(param0: string): string;
			public static toUnicode(param0: string, param1: number): string;
			public static toUnicode(param0: string): string;
			public static ALLOW_UNASSIGNED: number;
			public static USE_STD3_ASCII_RULES: number;
		}
	}
}
