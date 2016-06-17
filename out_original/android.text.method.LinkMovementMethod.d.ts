/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.text.method.MovementMethod.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />

declare module android {
	export module text {
		export module method {
			export class LinkMovementMethod {
				public constructor();
				public canSelectArbitrarily(): boolean;
				public handleMovementKey(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: number, param4: android.view.KeyEvent): boolean;
				public up(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public down(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public left(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public right(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public onTouchEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;
				public initialize(param0: android.widget.TextView, param1: android.text.Spannable): void;
				public onTakeFocus(param0: android.widget.TextView, param1: android.text.Spannable, param2: number): void;
				public static getInstance(): android.text.method.MovementMethod;
			}
		}
	}
}
