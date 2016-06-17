/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module widget {
		export class CompoundButton {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public toggle(): void;
			public performClick(): boolean;
			public isChecked(): boolean;
			public setChecked(param0: boolean): void;
			public setOnCheckedChangeListener(param0: android.widget.CompoundButton.OnCheckedChangeListener): void;
			public setButtonDrawable(param0: number): void;
			public setButtonDrawable(param0: android.graphics.drawable.Drawable): void;
			public getButtonDrawable(): android.graphics.drawable.Drawable;
			public setButtonTintList(param0: android.content.res.ColorStateList): void;
			public getButtonTintList(): android.content.res.ColorStateList;
			public setButtonTintMode(param0: android.graphics.PorterDuff.Mode): void;
			public getButtonTintMode(): android.graphics.PorterDuff.Mode;
			public getAccessibilityClassName(): string;
			public getCompoundPaddingLeft(): number;
			public getCompoundPaddingRight(): number;
			public onDraw(param0: android.graphics.Canvas): void;
			public onCreateDrawableState(param0: number): native.Array<number>;
			public drawableStateChanged(): void;
			public drawableHotspotChanged(param0: number, param1: number): void;
			public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
			public jumpDrawablesToCurrentState(): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
		}
		export module CompoundButton {
			export class OnCheckedChangeListener {
				public onCheckedChanged(param0: android.widget.CompoundButton, param1: boolean): void;
			}
		}
	}
}
