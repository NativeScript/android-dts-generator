/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export class SpannedString {
			public constructor();
			public constructor(param0: string);
			public subSequence(param0: number, param1: number): string;
			public static valueOf(param0: string): android.text.SpannedString;
		}
	}
}
