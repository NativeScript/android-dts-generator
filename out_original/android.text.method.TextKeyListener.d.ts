/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module text {
		export module method {
			export class TextKeyListener {
				public constructor();
				public constructor(param0: android.text.method.TextKeyListener.Capitalize, param1: boolean);
				public static getInstance(param0: boolean, param1: android.text.method.TextKeyListener.Capitalize): android.text.method.TextKeyListener;
				public static getInstance(): android.text.method.TextKeyListener;
				public static shouldCap(param0: android.text.method.TextKeyListener.Capitalize, param1: string, param2: number): boolean;
				public getInputType(): number;
				public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;
				public onKeyUp(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;
				public onKeyOther(param0: android.view.View, param1: android.text.Editable, param2: android.view.KeyEvent): boolean;
				public static clear(param0: android.text.Editable): void;
				public onSpanAdded(param0: android.text.Spannable, param1: java.lang.Object, param2: number, param3: number): void;
				public onSpanRemoved(param0: android.text.Spannable, param1: java.lang.Object, param2: number, param3: number): void;
				public onSpanChanged(param0: android.text.Spannable, param1: java.lang.Object, param2: number, param3: number, param4: number, param5: number): void;
				public release(): void;
			}
			export module TextKeyListener {
				export class Capitalize {
					public static values(): native.Array<android.text.method.TextKeyListener.Capitalize>;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
					public static valueOf(param0: string): android.text.method.TextKeyListener.Capitalize;
					public static CHARACTERS: android.text.method.TextKeyListener.Capitalize;
					public static NONE: android.text.method.TextKeyListener.Capitalize;
					public static SENTENCES: android.text.method.TextKeyListener.Capitalize;
					public static WORDS: android.text.method.TextKeyListener.Capitalize;
				}
			}
		}
	}
}
