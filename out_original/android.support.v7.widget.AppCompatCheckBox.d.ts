/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatCheckBox {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setButtonDrawable(param0: number): void;
					public setButtonDrawable(param0: android.graphics.drawable.Drawable): void;
					public setButtonDrawable(param0: number): void;
					public getCompoundPaddingLeft(): number;
					public setSupportButtonTintList(param0: android.content.res.ColorStateList): void;
					public getSupportButtonTintList(): android.content.res.ColorStateList;
					public setSupportButtonTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public getSupportButtonTintMode(): android.graphics.PorterDuff.Mode;
				}
			}
		}
	}
}
