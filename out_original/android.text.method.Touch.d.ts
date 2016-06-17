/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Layout.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />

declare module android {
	export module text {
		export module method {
			export class Touch {
				public static scrollTo(param0: android.widget.TextView, param1: android.text.Layout, param2: number, param3: number): void;
				public static onTouchEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;
				public static getInitialScrollX(param0: android.widget.TextView, param1: android.text.Spannable): number;
				public static getInitialScrollY(param0: android.widget.TextView, param1: android.text.Spannable): number;
			}
		}
	}
}
