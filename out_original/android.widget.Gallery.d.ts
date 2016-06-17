/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Transformation.d.ts" />

declare module android {
	export module widget {
		export class Gallery {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setCallbackDuringFling(param0: boolean): void;
			public setAnimationDuration(param0: number): void;
			public setSpacing(param0: number): void;
			public setUnselectedAlpha(param0: number): void;
			public getChildStaticTransformation(param0: android.view.View, param1: android.view.animation.Transformation): boolean;
			public computeHorizontalScrollExtent(): number;
			public computeHorizontalScrollOffset(): number;
			public computeHorizontalScrollRange(): number;
			public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
			public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
			public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public onSingleTapUp(param0: android.view.MotionEvent): boolean;
			public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
			public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
			public onDown(param0: android.view.MotionEvent): boolean;
			public onLongPress(param0: android.view.MotionEvent): void;
			public onShowPress(param0: android.view.MotionEvent): void;
			public dispatchSetSelected(param0: boolean): void;
			public dispatchSetPressed(param0: boolean): void;
			public getContextMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
			public showContextMenuForChild(param0: android.view.View): boolean;
			public showContextMenu(): boolean;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public setGravity(param0: number): void;
			public getChildDrawingOrder(param0: number, param1: number): number;
			public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;
			public getAccessibilityClassName(): string;
		}
		export module Gallery {
			export class LayoutParams {
				public constructor(param0: number, param1: number);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public constructor();
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: number, param1: number);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
			}
		}
	}
}
