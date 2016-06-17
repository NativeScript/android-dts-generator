/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module app {
		export class MediaRouteButton {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public getRouteTypes(): number;
			public setRouteTypes(param0: number): void;
			public setExtendedSettingsClickListener(param0: android.view.View.OnClickListener): void;
			public showDialog(): void;
			public performClick(): boolean;
			public performLongClick(): boolean;
			public onCreateDrawableState(param0: number): native.Array<number>;
			public drawableStateChanged(): void;
			public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
			public jumpDrawablesToCurrentState(): void;
			public setVisibility(param0: number): void;
			public onAttachedToWindow(): void;
			public onDetachedFromWindow(): void;
			public onMeasure(param0: number, param1: number): void;
			public onDraw(param0: android.graphics.Canvas): void;
		}
	}
}
