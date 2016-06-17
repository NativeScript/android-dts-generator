/// <reference path="./_helpers.d.ts" />

declare module android {
	export module text {
		export module method {
			export class DateKeyListener {
				public constructor();
				public getInputType(): number;
				public getAcceptedChars(): native.Array<string>;
				public static getInstance(): android.text.method.DateKeyListener;
				public static CHARACTERS: native.Array<string>;
			}
		}
	}
}
