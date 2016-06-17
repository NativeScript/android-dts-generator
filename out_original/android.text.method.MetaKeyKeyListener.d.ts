/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module text {
		export module method {
			export class MetaKeyKeyListener {
				public constructor();
				public static resetMetaState(param0: android.text.Spannable): void;
				public static getMetaState(param0: string): number;
				public static getMetaState(param0: string, param1: android.view.KeyEvent): number;
				public static getMetaState(param0: string, param1: number): number;
				public static getMetaState(param0: string, param1: number, param2: android.view.KeyEvent): number;
				public static adjustMetaAfterKeypress(param0: android.text.Spannable): void;
				public static isMetaTracker(param0: string, param1: java.lang.Object): boolean;
				public static isSelectingMetaTracker(param0: string, param1: java.lang.Object): boolean;
				public static resetLockedMeta(param0: android.text.Spannable): void;
				public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;
				public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;
				public clearMetaKeyState(param0: android.view.View, param1: android.text.Editable, param2: number): void;
				public static clearMetaKeyState(param0: android.text.Editable, param1: number): void;
				public static resetLockedMeta(param0: number): number;
				public static getMetaState(param0: number): number;
				public static getMetaState(param0: number, param1: number): number;
				public static adjustMetaAfterKeypress(param0: number): number;
				public static handleKeyDown(param0: number, param1: number, param2: android.view.KeyEvent): number;
				public static handleKeyUp(param0: number, param1: number, param2: android.view.KeyEvent): number;
				public clearMetaKeyState(param0: number, param1: number): number;
				public static META_ALT_LOCKED: number;
				public static META_ALT_ON: number;
				public static META_CAP_LOCKED: number;
				public static META_SHIFT_ON: number;
				public static META_SYM_LOCKED: number;
				public static META_SYM_ON: number;
			}
		}
	}
}
