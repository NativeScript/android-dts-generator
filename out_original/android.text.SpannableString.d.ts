/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module text {
		export class SpannableString {
			public constructor();
			public constructor(param0: string);
			public static valueOf(param0: string): android.text.SpannableString;
			public setSpan(param0: java.lang.Object, param1: number, param2: number, param3: number): void;
			public removeSpan(param0: java.lang.Object): void;
			public subSequence(param0: number, param1: number): string;
		}
	}
}
