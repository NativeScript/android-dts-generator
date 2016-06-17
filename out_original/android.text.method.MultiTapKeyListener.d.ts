/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module text {
		export module method {
			export class MultiTapKeyListener {
				public constructor();
				public constructor(param0: android.text.method.TextKeyListener.Capitalize, param1: boolean);
				public static getInstance(param0: boolean, param1: android.text.method.TextKeyListener.Capitalize): android.text.method.MultiTapKeyListener;
				public getInputType(): number;
				public onKeyDown(param0: android.view.View, param1: android.text.Editable, param2: number, param3: android.view.KeyEvent): boolean;
				public onSpanChanged(param0: android.text.Spannable, param1: java.lang.Object, param2: number, param3: number, param4: number, param5: number): void;
				public onSpanAdded(param0: android.text.Spannable, param1: java.lang.Object, param2: number, param3: number): void;
				public onSpanRemoved(param0: android.text.Spannable, param1: java.lang.Object, param2: number, param3: number): void;
			}
		}
	}
}
