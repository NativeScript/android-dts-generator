/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class TextViewCompat {
					public static setCompoundDrawablesRelative(param0: android.widget.TextView, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable, param4: android.graphics.drawable.Drawable): void;
					public static setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.widget.TextView, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable, param4: android.graphics.drawable.Drawable): void;
					public static setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.widget.TextView, param1: number, param2: number, param3: number, param4: number): void;
					public static getMaxLines(param0: android.widget.TextView): number;
					public static getMinLines(param0: android.widget.TextView): number;
					public static setTextAppearance(param0: android.widget.TextView, param1: number): void;
				}
				export module TextViewCompat {
					export class Api23TextViewCompatImpl {
						public setTextAppearance(param0: android.widget.TextView, param1: number): void;
					}
					export class BaseTextViewCompatImpl {
						public setCompoundDrawablesRelative(param0: android.widget.TextView, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable, param4: android.graphics.drawable.Drawable): void;
						public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.widget.TextView, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable, param4: android.graphics.drawable.Drawable): void;
						public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.widget.TextView, param1: number, param2: number, param3: number, param4: number): void;
						public getMaxLines(param0: android.widget.TextView): number;
						public getMinLines(param0: android.widget.TextView): number;
						public setTextAppearance(param0: android.widget.TextView, param1: number): void;
					}
					export class JbMr1TextViewCompatImpl {
						public setCompoundDrawablesRelative(param0: android.widget.TextView, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable, param4: android.graphics.drawable.Drawable): void;
						public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.widget.TextView, param1: number, param2: number, param3: number, param4: number): void;
						public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.widget.TextView, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable, param4: android.graphics.drawable.Drawable): void;
						public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.widget.TextView, param1: number, param2: number, param3: number, param4: number): void;
					}
					export class JbMr2TextViewCompatImpl {
						public setCompoundDrawablesRelative(param0: android.widget.TextView, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable, param4: android.graphics.drawable.Drawable): void;
						public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.widget.TextView, param1: number, param2: number, param3: number, param4: number): void;
						public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.widget.TextView, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable, param4: android.graphics.drawable.Drawable): void;
						public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.widget.TextView, param1: number, param2: number, param3: number, param4: number): void;
					}
					export class JbTextViewCompatImpl {
						public getMaxLines(param0: android.widget.TextView): number;
						public getMinLines(param0: android.widget.TextView): number;
					}
					export class TextViewCompatImpl {
						public setCompoundDrawablesRelative(param0: android.widget.TextView, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable, param4: android.graphics.drawable.Drawable): void;
						public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.widget.TextView, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable, param4: android.graphics.drawable.Drawable): void;
						public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.widget.TextView, param1: number, param2: number, param3: number, param4: number): void;
						public getMaxLines(param0: android.widget.TextView): number;
						public getMinLines(param0: android.widget.TextView): number;
						public setTextAppearance(param0: android.widget.TextView, param1: number): void;
					}
				}
			}
		}
	}
}
