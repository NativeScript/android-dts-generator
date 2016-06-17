/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export class AlteredCharSequence {
			public static make(param0: string, param1: native.Array<string>, param2: number, param3: number): android.text.AlteredCharSequence;
			public charAt(param0: number): string;
			public length(): number;
			public subSequence(param0: number, param1: number): string;
			public getChars(param0: number, param1: number, param2: native.Array<string>, param3: number): void;
			public toString(): string;
		}
	}
}
