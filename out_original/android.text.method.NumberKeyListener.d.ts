/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export module method {
			export class NumberKeyListener {
				public constructor();
				public getAcceptedChars(): native.Array<string>;
				public lookup(param0: android.view.KeyEvent, param1: android.text.Spannable): number;
				public filter(param0: string, param1: number, param2: number, param3: android.text.Spanned, param4: number, param5: number): string;
				public static ok(param0: native.Array<string>, param1: string): boolean;
				public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;
			}
		}
	}
}
