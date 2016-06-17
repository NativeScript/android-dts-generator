/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />

declare module android {
	export module text {
		export module method {
			export class MovementMethod {
				public initialize(param0: android.widget.TextView, param1: android.text.Spannable): void;
				public onKeyDown(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: android.view.KeyEvent): boolean;
				public onKeyUp(param0: android.widget.TextView, param1: android.text.Spannable, param2: number, param3: android.view.KeyEvent): boolean;
				public onKeyOther(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.KeyEvent): boolean;
				public onTakeFocus(param0: android.widget.TextView, param1: android.text.Spannable, param2: number): void;
				public onTrackballEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;
				public onTouchEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;
				public onGenericMotionEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;
				public canSelectArbitrarily(): boolean;
			}
		}
	}
}
