/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.regex.Matcher.d.ts" />

declare module java {
	export module util {
		export module regex {
			export class Pattern {
				public matcher(param0: string): java.util.regex.Matcher;
				public split(param0: string, param1: number): native.Array<string>;
				public split(param0: string): native.Array<string>;
				public pattern(): string;
				public toString(): string;
				public flags(): number;
				public static compile(param0: string, param1: number): java.util.regex.Pattern;
				public static compile(param0: string): java.util.regex.Pattern;
				public static matches(param0: string, param1: string): boolean;
				public static quote(param0: string): string;
				public finalize(): void;
				public static CANON_EQ: number;
				public static CASE_INSENSITIVE: number;
				public static COMMENTS: number;
				public static DOTALL: number;
				public static LITERAL: number;
				public static MULTILINE: number;
				public static UNICODE_CASE: number;
				public static UNIX_LINES: number;
			}
		}
	}
}
