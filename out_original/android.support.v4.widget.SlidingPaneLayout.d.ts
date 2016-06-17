/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class SlidingPaneLayout {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setParallaxDistance(param0: number): void;
					public getParallaxDistance(): number;
					public setSliderFadeColor(param0: number): void;
					public getSliderFadeColor(): number;
					public setCoveredFadeColor(param0: number): void;
					public getCoveredFadeColor(): number;
					public setPanelSlideListener(param0: android.support.v4.widget.SlidingPaneLayout.PanelSlideListener): void;
					public onAttachedToWindow(): void;
					public onDetachedFromWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public smoothSlideOpen(): void;
					public openPane(): boolean;
					public smoothSlideClosed(): void;
					public closePane(): boolean;
					public isOpen(): boolean;
					public canSlide(): boolean;
					public isSlideable(): boolean;
					public drawChild(param0: android.graphics.Canvas, param1: android.view.View, param2: number): boolean;
					public computeScroll(): void;
					public setShadowDrawable(param0: android.graphics.drawable.Drawable): void;
					public setShadowDrawableLeft(param0: android.graphics.drawable.Drawable): void;
					public setShadowDrawableRight(param0: android.graphics.drawable.Drawable): void;
					public setShadowResource(param0: number): void;
					public setShadowResourceLeft(param0: number): void;
					public setShadowResourceRight(param0: number): void;
					public draw(param0: android.graphics.Canvas): void;
					public canScroll(param0: android.view.View, param1: boolean, param2: number, param3: number, param4: number): boolean;
					public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public onSaveInstanceState(): android.os.Parcelable;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
				}
				export module SlidingPaneLayout {
					export class AccessibilityDelegate {
						public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
						public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
						public onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
						public filter(param0: android.view.View): boolean;
					}
					export class DisableLayerRunnable {
						public run(): void;
					}
					export class DragHelperCallback {
						public tryCaptureView(param0: android.view.View, param1: number): boolean;
						public onViewDragStateChanged(param0: number): void;
						public onViewCaptured(param0: android.view.View, param1: number): void;
						public onViewPositionChanged(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public onViewReleased(param0: android.view.View, param1: number, param2: number): void;
						public getViewHorizontalDragRange(param0: android.view.View): number;
						public clampViewPositionHorizontal(param0: android.view.View, param1: number, param2: number): number;
						public clampViewPositionVertical(param0: android.view.View, param1: number, param2: number): number;
						public onEdgeDragStarted(param0: number, param1: number): void;
					}
					export class LayoutParams {
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: number, param1: number);
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor();
						public constructor(param0: number, param1: number);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.support.v4.widget.SlidingPaneLayout.LayoutParams);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public weight: number;
					}
					export class PanelSlideListener {
						public onPanelSlide(param0: android.view.View, param1: number): void;
						public onPanelOpened(param0: android.view.View): void;
						public onPanelClosed(param0: android.view.View): void;
					}
					export class SavedState {
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public static CREATOR: android.os.Parcelable.Creator;
					}
					export class SimplePanelSlideListener {
						public constructor();
						public onPanelSlide(param0: android.view.View, param1: number): void;
						public onPanelOpened(param0: android.view.View): void;
						public onPanelClosed(param0: android.view.View): void;
					}
					export class SlidingPanelLayoutImpl {
						public invalidateChildRegion(param0: android.support.v4.widget.SlidingPaneLayout, param1: android.view.View): void;
					}
					export class SlidingPanelLayoutImplBase {
						public invalidateChildRegion(param0: android.support.v4.widget.SlidingPaneLayout, param1: android.view.View): void;
					}
					export class SlidingPanelLayoutImplJB {
						public invalidateChildRegion(param0: android.support.v4.widget.SlidingPaneLayout, param1: android.view.View): void;
					}
					export class SlidingPanelLayoutImplJBMR1 {
						public invalidateChildRegion(param0: android.support.v4.widget.SlidingPaneLayout, param1: android.view.View): void;
					}
				}
			}
		}
	}
}
