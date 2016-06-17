/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />

declare module android {
	export module widget {
		export class ProgressBar {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public isIndeterminate(): boolean;
			public setIndeterminate(param0: boolean): void;
			public getIndeterminateDrawable(): android.graphics.drawable.Drawable;
			public setIndeterminateDrawable(param0: android.graphics.drawable.Drawable): void;
			public setIndeterminateTintList(param0: android.content.res.ColorStateList): void;
			public getIndeterminateTintList(): android.content.res.ColorStateList;
			public setIndeterminateTintMode(param0: android.graphics.PorterDuff.Mode): void;
			public getIndeterminateTintMode(): android.graphics.PorterDuff.Mode;
			public setIndeterminateDrawableTiled(param0: android.graphics.drawable.Drawable): void;
			public getProgressDrawable(): android.graphics.drawable.Drawable;
			public setProgressDrawable(param0: android.graphics.drawable.Drawable): void;
			public setProgressTintList(param0: android.content.res.ColorStateList): void;
			public getProgressTintList(): android.content.res.ColorStateList;
			public setProgressTintMode(param0: android.graphics.PorterDuff.Mode): void;
			public getProgressTintMode(): android.graphics.PorterDuff.Mode;
			public setProgressBackgroundTintList(param0: android.content.res.ColorStateList): void;
			public getProgressBackgroundTintList(): android.content.res.ColorStateList;
			public setProgressBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
			public getProgressBackgroundTintMode(): android.graphics.PorterDuff.Mode;
			public setSecondaryProgressTintList(param0: android.content.res.ColorStateList): void;
			public getSecondaryProgressTintList(): android.content.res.ColorStateList;
			public setSecondaryProgressTintMode(param0: android.graphics.PorterDuff.Mode): void;
			public getSecondaryProgressTintMode(): android.graphics.PorterDuff.Mode;
			public setProgressDrawableTiled(param0: android.graphics.drawable.Drawable): void;
			public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
			public jumpDrawablesToCurrentState(): void;
			public postInvalidate(param0: number, param1: number, param2: number, param3: number): void;
			public postInvalidate(): void;
			public setProgress(param0: number): void;
			public setSecondaryProgress(param0: number): void;
			public getProgress(): number;
			public getSecondaryProgress(): number;
			public getMax(): number;
			public setMax(param0: number): void;
			public incrementProgressBy(param0: number): void;
			public incrementSecondaryProgressBy(param0: number): void;
			public setInterpolator(param0: android.content.Context, param1: number): void;
			public setInterpolator(param0: android.view.animation.Interpolator): void;
			public getInterpolator(): android.view.animation.Interpolator;
			public setVisibility(param0: number): void;
			public onVisibilityChanged(param0: android.view.View, param1: number): void;
			public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
			public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
			public onDraw(param0: android.graphics.Canvas): void;
			public onMeasure(param0: number, param1: number): void;
			public drawableStateChanged(): void;
			public drawableHotspotChanged(param0: number, param1: number): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
			public onAttachedToWindow(): void;
			public onDetachedFromWindow(): void;
			public getAccessibilityClassName(): string;
		}
	}
}
