/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module widget {
		export class CheckedTextView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public toggle(): void;
			public isChecked(): boolean;
			public setChecked(param0: boolean): void;
			public setCheckMarkDrawable(param0: number): void;
			public setCheckMarkDrawable(param0: android.graphics.drawable.Drawable): void;
			public setCheckMarkTintList(param0: android.content.res.ColorStateList): void;
			public getCheckMarkTintList(): android.content.res.ColorStateList;
			public setCheckMarkTintMode(param0: android.graphics.PorterDuff.Mode): void;
			public getCheckMarkTintMode(): android.graphics.PorterDuff.Mode;
			public setVisibility(param0: number): void;
			public jumpDrawablesToCurrentState(): void;
			public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
			public getCheckMarkDrawable(): android.graphics.drawable.Drawable;
			public onRtlPropertiesChanged(param0: number): void;
			public onDraw(param0: android.graphics.Canvas): void;
			public onCreateDrawableState(param0: number): native.Array<number>;
			public drawableStateChanged(): void;
			public drawableHotspotChanged(param0: number, param1: number): void;
			public getAccessibilityClassName(): string;
		}
	}
}
