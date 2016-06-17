/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.graphics.drawable.Icon.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module widget {
		export class ImageView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
			public jumpDrawablesToCurrentState(): void;
			public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
			public hasOverlappingRendering(): boolean;
			public getAdjustViewBounds(): boolean;
			public setAdjustViewBounds(param0: boolean): void;
			public getMaxWidth(): number;
			public setMaxWidth(param0: number): void;
			public getMaxHeight(): number;
			public setMaxHeight(param0: number): void;
			public getDrawable(): android.graphics.drawable.Drawable;
			public setImageResource(param0: number): void;
			public setImageURI(param0: android.net.Uri): void;
			public setImageDrawable(param0: android.graphics.drawable.Drawable): void;
			public setImageIcon(param0: android.graphics.drawable.Icon): void;
			public setImageTintList(param0: android.content.res.ColorStateList): void;
			public getImageTintList(): android.content.res.ColorStateList;
			public setImageTintMode(param0: android.graphics.PorterDuff.Mode): void;
			public getImageTintMode(): android.graphics.PorterDuff.Mode;
			public setImageBitmap(param0: android.graphics.Bitmap): void;
			public setImageState(param0: native.Array<number>, param1: boolean): void;
			public setSelected(param0: boolean): void;
			public setImageLevel(param0: number): void;
			public setScaleType(param0: android.widget.ImageView.ScaleType): void;
			public getScaleType(): android.widget.ImageView.ScaleType;
			public getImageMatrix(): android.graphics.Matrix;
			public setImageMatrix(param0: android.graphics.Matrix): void;
			public getCropToPadding(): boolean;
			public setCropToPadding(param0: boolean): void;
			public onCreateDrawableState(param0: number): native.Array<number>;
			public onRtlPropertiesChanged(param0: number): void;
			public onMeasure(param0: number, param1: number): void;
			public setFrame(param0: number, param1: number, param2: number, param3: number): boolean;
			public drawableStateChanged(): void;
			public drawableHotspotChanged(param0: number, param1: number): void;
			public onDraw(param0: android.graphics.Canvas): void;
			public getBaseline(): number;
			public setBaseline(param0: number): void;
			public setBaselineAlignBottom(param0: boolean): void;
			public getBaselineAlignBottom(): boolean;
			public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
			public setColorFilter(param0: number): void;
			public clearColorFilter(): void;
			public getColorFilter(): android.graphics.ColorFilter;
			public setColorFilter(param0: android.graphics.ColorFilter): void;
			public getImageAlpha(): number;
			public setImageAlpha(param0: number): void;
			public setAlpha(param0: number): void;
			public setAlpha(param0: number): void;
			public isOpaque(): boolean;
			public setVisibility(param0: number): void;
			public onAttachedToWindow(): void;
			public onDetachedFromWindow(): void;
			public getAccessibilityClassName(): string;
		}
		export module ImageView {
			export class ScaleType {
				public static values(): native.Array<android.widget.ImageView.ScaleType>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.widget.ImageView.ScaleType;
				public static CENTER: android.widget.ImageView.ScaleType;
				public static CENTER_CROP: android.widget.ImageView.ScaleType;
				public static CENTER_INSIDE: android.widget.ImageView.ScaleType;
				public static FIT_CENTER: android.widget.ImageView.ScaleType;
				public static FIT_END: android.widget.ImageView.ScaleType;
				public static FIT_START: android.widget.ImageView.ScaleType;
				public static FIT_XY: android.widget.ImageView.ScaleType;
				public static MATRIX: android.widget.ImageView.ScaleType;
			}
		}
	}
}
