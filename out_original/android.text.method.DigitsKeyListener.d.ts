/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module text {
		export module method {
			export class DigitsKeyListener {
				public constructor();
				public constructor(param0: boolean, param1: boolean);
				public getAcceptedChars(): native.Array<string>;
				public static getInstance(): android.text.method.DigitsKeyListener;
				public static getInstance(param0: boolean, param1: boolean): android.text.method.DigitsKeyListener;
				public static getInstance(param0: string): android.text.method.DigitsKeyListener;
				public getInputType(): number;
				public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;
			}
		}
	}
}
