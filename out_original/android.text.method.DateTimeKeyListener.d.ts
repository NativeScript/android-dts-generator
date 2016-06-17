/// <reference path="./_helpers.d.ts" />

declare module android {
	export module text {
		export module method {
			export class DateTimeKeyListener {
				public constructor();
				public getInputType(): number;
				public getAcceptedChars(): native.Array<string>;
				public static getInstance(): android.text.method.DateTimeKeyListener;
				public static CHARACTERS: native.Array<string>;
			}
		}
	}
}
