/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.LayoutTransition.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.DragEvent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroupOverlay.d.ts" />
/// <reference path="./android.view.ViewOverlay.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.ViewStructure.d.ts" />
/// <reference path="./android.view.WindowInsets.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.animation.LayoutAnimationController.d.ts" />
/// <reference path="./android.view.animation.Transformation.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module view {
		export class ViewGroup {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public getDescendantFocusability(): number;
			public setDescendantFocusability(param0: number): void;
			public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
			public focusableViewAvailable(param0: android.view.View): void;
			public showContextMenuForChild(param0: android.view.View): boolean;
			public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
			public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
			public focusSearch(param0: number): android.view.View;
			public focusSearch(param0: android.view.View, param1: number): android.view.View;
			public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
			public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
			public onRequestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
			public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
			public hasTransientState(): boolean;
			public dispatchUnhandledMove(param0: android.view.View, param1: number): boolean;
			public clearChildFocus(param0: android.view.View): void;
			public clearFocus(): void;
			public getFocusedChild(): android.view.View;
			public hasFocus(): boolean;
			public findFocus(): android.view.View;
			public hasFocusable(): boolean;
			public addFocusables(param0: java.util.ArrayList, param1: number): void;
			public addFocusables(param0: java.util.ArrayList, param1: number, param2: number): void;
			public setTouchscreenBlocksFocus(param0: boolean): void;
			public getTouchscreenBlocksFocus(): boolean;
			public findViewsWithText(param0: java.util.ArrayList, param1: string, param2: number): void;
			public dispatchWindowFocusChanged(param0: boolean): void;
			public addTouchables(param0: java.util.ArrayList): void;
			public dispatchDisplayHint(param0: number): void;
			public dispatchVisibilityChanged(param0: android.view.View, param1: number): void;
			public dispatchWindowVisibilityChanged(param0: number): void;
			public dispatchConfigurationChanged(param0: android.content.res.Configuration): void;
			public recomputeViewAttributes(param0: android.view.View): void;
			public bringChildToFront(param0: android.view.View): void;
			public dispatchDragEvent(param0: android.view.DragEvent): boolean;
			public dispatchWindowSystemUiVisiblityChanged(param0: number): void;
			public dispatchSystemUiVisibilityChanged(param0: number): void;
			public dispatchKeyEventPreIme(param0: android.view.KeyEvent): boolean;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public dispatchHoverEvent(param0: android.view.MotionEvent): boolean;
			public addChildrenForAccessibility(param0: java.util.ArrayList): void;
			public onInterceptHoverEvent(param0: android.view.MotionEvent): boolean;
			public dispatchGenericPointerEvent(param0: android.view.MotionEvent): boolean;
			public dispatchGenericFocusedEvent(param0: android.view.MotionEvent): boolean;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public setMotionEventSplittingEnabled(param0: boolean): void;
			public isMotionEventSplittingEnabled(): boolean;
			public isTransitionGroup(): boolean;
			public setTransitionGroup(param0: boolean): void;
			public requestDisallowInterceptTouchEvent(param0: boolean): void;
			public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
			public requestFocus(): boolean;
			public requestFocus(param0: number): boolean;
			public requestFocus(param0: number, param1: android.graphics.Rect): boolean;
			public onRequestFocusInDescendants(param0: number, param1: android.graphics.Rect): boolean;
			public dispatchProvideStructure(param0: android.view.ViewStructure): void;
			public getAccessibilityClassName(): string;
			public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
			public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
			public dispatchSaveInstanceState(param0: android.util.SparseArray): void;
			public dispatchFreezeSelfOnly(param0: android.util.SparseArray): void;
			public dispatchRestoreInstanceState(param0: android.util.SparseArray): void;
			public dispatchThawSelfOnly(param0: android.util.SparseArray): void;
			public setChildrenDrawingCacheEnabled(param0: boolean): void;
			public dispatchDraw(param0: android.graphics.Canvas): void;
			public getOverlay(): android.view.ViewOverlay;
			public getOverlay(): android.view.ViewGroupOverlay;
			public getChildDrawingOrder(param0: number, param1: number): number;
			public drawChild(param0: android.graphics.Canvas, param1: android.view.View, param2: number): boolean;
			public getClipChildren(): boolean;
			public setClipChildren(param0: boolean): void;
			public setClipToPadding(param0: boolean): void;
			public getClipToPadding(): boolean;
			public dispatchSetSelected(param0: boolean): void;
			public dispatchSetActivated(param0: boolean): void;
			public dispatchSetPressed(param0: boolean): void;
			public dispatchDrawableHotspotChanged(param0: number, param1: number): void;
			public setStaticTransformationsEnabled(param0: boolean): void;
			public getChildStaticTransformation(param0: android.view.View, param1: android.view.animation.Transformation): boolean;
			public addView(param0: android.view.View): void;
			public addView(param0: android.view.View, param1: number): void;
			public addView(param0: android.view.View, param1: number, param2: number): void;
			public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
			public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
			public setOnHierarchyChangeListener(param0: android.view.ViewGroup.OnHierarchyChangeListener): void;
			public onViewAdded(param0: android.view.View): void;
			public onViewRemoved(param0: android.view.View): void;
			public onAttachedToWindow(): void;
			public onDetachedFromWindow(): void;
			public addViewInLayout(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): boolean;
			public addViewInLayout(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams, param3: boolean): boolean;
			public cleanupLayoutState(param0: android.view.View): void;
			public attachLayoutAnimationParameters(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams, param2: number, param3: number): void;
			public removeView(param0: android.view.View): void;
			public removeViewInLayout(param0: android.view.View): void;
			public removeViewsInLayout(param0: number, param1: number): void;
			public removeViewAt(param0: number): void;
			public removeViews(param0: number, param1: number): void;
			public setLayoutTransition(param0: android.animation.LayoutTransition): void;
			public getLayoutTransition(): android.animation.LayoutTransition;
			public removeAllViews(): void;
			public removeAllViewsInLayout(): void;
			public removeDetachedView(param0: android.view.View, param1: boolean): void;
			public attachViewToParent(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
			public detachViewFromParent(param0: android.view.View): void;
			public detachViewFromParent(param0: number): void;
			public detachViewsFromParent(param0: number, param1: number): void;
			public detachAllViewsFromParent(): void;
			public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
			public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
			public offsetDescendantRectToMyCoords(param0: android.view.View, param1: android.graphics.Rect): void;
			public offsetRectIntoDescendantCoords(param0: android.view.View, param1: android.graphics.Rect): void;
			public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
			public layout(param0: number, param1: number, param2: number, param3: number): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public canAnimate(): boolean;
			public startLayoutAnimation(): void;
			public scheduleLayoutAnimation(): void;
			public setLayoutAnimation(param0: android.view.animation.LayoutAnimationController): void;
			public getLayoutAnimation(): android.view.animation.LayoutAnimationController;
			public isAnimationCacheEnabled(): boolean;
			public setAnimationCacheEnabled(param0: boolean): void;
			public isAlwaysDrawnWithCacheEnabled(): boolean;
			public setAlwaysDrawnWithCacheEnabled(param0: boolean): void;
			public isChildrenDrawnWithCacheEnabled(): boolean;
			public setChildrenDrawnWithCacheEnabled(param0: boolean): void;
			public isChildrenDrawingOrderEnabled(): boolean;
			public setChildrenDrawingOrderEnabled(param0: boolean): void;
			public getPersistentDrawingCache(): number;
			public setPersistentDrawingCache(param0: number): void;
			public getLayoutMode(): number;
			public setLayoutMode(param0: number): void;
			public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
			public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
			public debug(param0: number): void;
			public indexOfChild(param0: android.view.View): number;
			public getChildCount(): number;
			public getChildAt(param0: number): android.view.View;
			public measureChildren(param0: number, param1: number): void;
			public measureChild(param0: android.view.View, param1: number, param2: number): void;
			public measureChildWithMargins(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
			public static getChildMeasureSpec(param0: number, param1: number, param2: number): number;
			public clearDisappearingChildren(): void;
			public startViewTransition(param0: android.view.View): void;
			public endViewTransition(param0: android.view.View): void;
			public gatherTransparentRegion(param0: android.graphics.Region): boolean;
			public requestTransparentRegion(param0: android.view.View): void;
			public dispatchApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;
			public getLayoutAnimationListener(): android.view.animation.Animation.AnimationListener;
			public drawableStateChanged(): void;
			public jumpDrawablesToCurrentState(): void;
			public onCreateDrawableState(param0: number): native.Array<number>;
			public setAddStatesFromChildren(param0: boolean): void;
			public addStatesFromChildren(): boolean;
			public childDrawableStateChanged(param0: android.view.View): void;
			public setLayoutAnimationListener(param0: android.view.animation.Animation.AnimationListener): void;
			public shouldDelayChildPressedState(): boolean;
			public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
			public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
			public onStopNestedScroll(param0: android.view.View): void;
			public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
			public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
			public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
			public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
			public getNestedScrollAxes(): number;
			public static CLIP_TO_PADDING_MASK: number;
			public static FOCUS_AFTER_DESCENDANTS: number;
			public static FOCUS_BEFORE_DESCENDANTS: number;
			public static FOCUS_BLOCK_DESCENDANTS: number;
			public static LAYOUT_MODE_CLIP_BOUNDS: number;
			public static LAYOUT_MODE_OPTICAL_BOUNDS: number;
			public static PERSISTENT_ALL_CACHES: number;
			public static PERSISTENT_ANIMATION_CACHE: number;
			public static PERSISTENT_NO_CACHE: number;
			public static PERSISTENT_SCROLLING_CACHE: number;
		}
		export module ViewGroup {
			export class LayoutParams {
				public constructor();
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: number, param1: number);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public setBaseAttributes(param0: android.content.res.TypedArray, param1: number, param2: number): void;
				public resolveLayoutDirection(param0: number): void;
				public static FILL_PARENT: number;
				public static MATCH_PARENT: number;
				public static WRAP_CONTENT: number;
				public height: number;
				public layoutAnimationParameters: android.view.animation.LayoutAnimationController.AnimationParameters;
				public width: number;
			}
			export class MarginLayoutParams {
				public constructor(param0: number, param1: number);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public constructor();
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: number, param1: number);
				public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public setMargins(param0: number, param1: number, param2: number, param3: number): void;
				public setMarginStart(param0: number): void;
				public getMarginStart(): number;
				public setMarginEnd(param0: number): void;
				public getMarginEnd(): number;
				public isMarginRelative(): boolean;
				public setLayoutDirection(param0: number): void;
				public getLayoutDirection(): number;
				public resolveLayoutDirection(param0: number): void;
				public bottomMargin: number;
				public leftMargin: number;
				public rightMargin: number;
				public topMargin: number;
			}
			export class OnHierarchyChangeListener {
				public onChildViewAdded(param0: android.view.View, param1: android.view.View): void;
				public onChildViewRemoved(param0: android.view.View, param1: android.view.View): void;
			}
		}
	}
}
