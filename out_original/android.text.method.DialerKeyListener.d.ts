/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />

declare module android {
	export module text {
		export module method {
			export class DialerKeyListener {
				public constructor();
				public getAcceptedChars(): native.Array<string>;
				public static getInstance(): android.text.method.DialerKeyListener;
				public getInputType(): number;
				public lookup(param0: android.view.KeyEvent, param1: android.text.Spannable): number;
				public static CHARACTERS: native.Array<string>;
			}
		}
	}
}
