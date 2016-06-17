/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module widget {
		export class SlidingDrawer {
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public onFinishInflate(): void;
			public onMeasure(param0: number, param1: number): void;
			public dispatchDraw(param0: android.graphics.Canvas): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public toggle(): void;
			public animateToggle(): void;
			public open(): void;
			public close(): void;
			public animateClose(): void;
			public animateOpen(): void;
			public getAccessibilityClassName(): string;
			public setOnDrawerOpenListener(param0: android.widget.SlidingDrawer.OnDrawerOpenListener): void;
			public setOnDrawerCloseListener(param0: android.widget.SlidingDrawer.OnDrawerCloseListener): void;
			public setOnDrawerScrollListener(param0: android.widget.SlidingDrawer.OnDrawerScrollListener): void;
			public getHandle(): android.view.View;
			public getContent(): android.view.View;
			public unlock(): void;
			public lock(): void;
			public isOpened(): boolean;
			public isMoving(): boolean;
			public static ORIENTATION_HORIZONTAL: number;
			public static ORIENTATION_VERTICAL: number;
		}
		export module SlidingDrawer {
			export class OnDrawerCloseListener {
				public onDrawerClosed(): void;
			}
			export class OnDrawerOpenListener {
				public onDrawerOpened(): void;
			}
			export class OnDrawerScrollListener {
				public onScrollStarted(): void;
				public onScrollEnded(): void;
			}
		}
	}
}
