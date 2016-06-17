/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class TextViewCompatJbMr2 {
					public static setCompoundDrawablesRelative(param0: android.widget.TextView, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable, param4: android.graphics.drawable.Drawable): void;
					public static setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.widget.TextView, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable, param4: android.graphics.drawable.Drawable): void;
					public static setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.widget.TextView, param1: number, param2: number, param3: number, param4: number): void;
				}
			}
		}
	}
}
