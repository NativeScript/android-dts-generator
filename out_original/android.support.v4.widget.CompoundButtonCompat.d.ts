/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.widget.CompoundButton.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class CompoundButtonCompat {
					public static setButtonTintList(param0: android.widget.CompoundButton, param1: android.content.res.ColorStateList): void;
					public static getButtonTintList(param0: android.widget.CompoundButton): android.content.res.ColorStateList;
					public static setButtonTintMode(param0: android.widget.CompoundButton, param1: android.graphics.PorterDuff.Mode): void;
					public static getButtonTintMode(param0: android.widget.CompoundButton): android.graphics.PorterDuff.Mode;
					public static getButtonDrawable(param0: android.widget.CompoundButton): android.graphics.drawable.Drawable;
				}
				export module CompoundButtonCompat {
					export class Api23CompoundButtonImpl {
						public getButtonDrawable(param0: android.widget.CompoundButton): android.graphics.drawable.Drawable;
					}
					export class BaseCompoundButtonCompat {
						public setButtonTintList(param0: android.widget.CompoundButton, param1: android.content.res.ColorStateList): void;
						public getButtonTintList(param0: android.widget.CompoundButton): android.content.res.ColorStateList;
						public setButtonTintMode(param0: android.widget.CompoundButton, param1: android.graphics.PorterDuff.Mode): void;
						public getButtonTintMode(param0: android.widget.CompoundButton): android.graphics.PorterDuff.Mode;
						public getButtonDrawable(param0: android.widget.CompoundButton): android.graphics.drawable.Drawable;
					}
					export class CompoundButtonCompatImpl {
						public setButtonTintList(param0: android.widget.CompoundButton, param1: android.content.res.ColorStateList): void;
						public getButtonTintList(param0: android.widget.CompoundButton): android.content.res.ColorStateList;
						public setButtonTintMode(param0: android.widget.CompoundButton, param1: android.graphics.PorterDuff.Mode): void;
						public getButtonTintMode(param0: android.widget.CompoundButton): android.graphics.PorterDuff.Mode;
						public getButtonDrawable(param0: android.widget.CompoundButton): android.graphics.drawable.Drawable;
					}
					export class LollipopCompoundButtonImpl {
						public setButtonTintList(param0: android.widget.CompoundButton, param1: android.content.res.ColorStateList): void;
						public getButtonTintList(param0: android.widget.CompoundButton): android.content.res.ColorStateList;
						public setButtonTintMode(param0: android.widget.CompoundButton, param1: android.graphics.PorterDuff.Mode): void;
						public getButtonTintMode(param0: android.widget.CompoundButton): android.graphics.PorterDuff.Mode;
					}
				}
			}
		}
	}
}
