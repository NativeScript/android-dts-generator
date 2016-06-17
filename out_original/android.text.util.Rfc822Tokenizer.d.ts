/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.util.Rfc822Token.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />

declare module android {
	export module text {
		export module util {
			export class Rfc822Tokenizer {
				public constructor();
				public static tokenize(param0: string, param1: java.util.Collection): void;
				public static tokenize(param0: string): native.Array<android.text.util.Rfc822Token>;
				public findTokenStart(param0: string, param1: number): number;
				public findTokenEnd(param0: string, param1: number): number;
				public terminateToken(param0: string): string;
			}
		}
	}
}
