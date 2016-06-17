/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module widget {
		export class TabWidget {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
			public getChildDrawingOrder(param0: number, param1: number): number;
			public getChildTabViewAt(param0: number): android.view.View;
			public getTabCount(): number;
			public setDividerDrawable(param0: android.graphics.drawable.Drawable): void;
			public setDividerDrawable(param0: number): void;
			public setLeftStripDrawable(param0: android.graphics.drawable.Drawable): void;
			public setLeftStripDrawable(param0: number): void;
			public setRightStripDrawable(param0: android.graphics.drawable.Drawable): void;
			public setRightStripDrawable(param0: number): void;
			public setStripEnabled(param0: boolean): void;
			public isStripEnabled(): boolean;
			public childDrawableStateChanged(param0: android.view.View): void;
			public dispatchDraw(param0: android.graphics.Canvas): void;
			public setCurrentTab(param0: number): void;
			public getAccessibilityClassName(): string;
			public focusCurrentTab(param0: number): void;
			public setEnabled(param0: boolean): void;
			public addView(param0: android.view.View, param1: number): void;
			public addView(param0: android.view.View, param1: number, param2: number): void;
			public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
			public addView(param0: android.view.View): void;
			public removeAllViews(): void;
			public onFocusChange(param0: android.view.View, param1: boolean): void;
		}
	}
}
