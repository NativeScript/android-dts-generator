/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />

declare module android {
	export module view {
		export class SurfaceView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public getHolder(): android.view.SurfaceHolder;
			public onAttachedToWindow(): void;
			public onWindowVisibilityChanged(param0: number): void;
			public setVisibility(param0: number): void;
			public onDetachedFromWindow(): void;
			public onMeasure(param0: number, param1: number): void;
			public gatherTransparentRegion(param0: android.graphics.Region): boolean;
			public draw(param0: android.graphics.Canvas): void;
			public dispatchDraw(param0: android.graphics.Canvas): void;
			public setZOrderMediaOverlay(param0: boolean): void;
			public setZOrderOnTop(param0: boolean): void;
			public setSecure(param0: boolean): void;
		}
	}
}
