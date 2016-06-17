/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />

declare module android {
	export module widget {
		export class AbsSeekBar {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setThumb(param0: android.graphics.drawable.Drawable): void;
			public getThumb(): android.graphics.drawable.Drawable;
			public setThumbTintList(param0: android.content.res.ColorStateList): void;
			public getThumbTintList(): android.content.res.ColorStateList;
			public setThumbTintMode(param0: android.graphics.PorterDuff.Mode): void;
			public getThumbTintMode(): android.graphics.PorterDuff.Mode;
			public getThumbOffset(): number;
			public setThumbOffset(param0: number): void;
			public setSplitTrack(param0: boolean): void;
			public getSplitTrack(): boolean;
			public setKeyProgressIncrement(param0: number): void;
			public getKeyProgressIncrement(): number;
			public setMax(param0: number): void;
			public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
			public jumpDrawablesToCurrentState(): void;
			public drawableStateChanged(): void;
			public drawableHotspotChanged(param0: number, param1: number): void;
			public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
			public onDraw(param0: android.graphics.Canvas): void;
			public onMeasure(param0: number, param1: number): void;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public getAccessibilityClassName(): string;
			public onRtlPropertiesChanged(param0: number): void;
		}
	}
}
