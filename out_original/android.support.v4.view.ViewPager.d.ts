/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v4.view.PagerAdapter.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewPager {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public onDetachedFromWindow(): void;
					public setAdapter(param0: android.support.v4.view.PagerAdapter): void;
					public getAdapter(): android.support.v4.view.PagerAdapter;
					public setCurrentItem(param0: number): void;
					public setCurrentItem(param0: number, param1: boolean): void;
					public getCurrentItem(): number;
					public setOnPageChangeListener(param0: android.support.v4.view.ViewPager.OnPageChangeListener): void;
					public addOnPageChangeListener(param0: android.support.v4.view.ViewPager.OnPageChangeListener): void;
					public removeOnPageChangeListener(param0: android.support.v4.view.ViewPager.OnPageChangeListener): void;
					public clearOnPageChangeListeners(): void;
					public setPageTransformer(param0: boolean, param1: android.support.v4.view.ViewPager.PageTransformer): void;
					public getChildDrawingOrder(param0: number, param1: number): number;
					public getOffscreenPageLimit(): number;
					public setOffscreenPageLimit(param0: number): void;
					public setPageMargin(param0: number): void;
					public getPageMargin(): number;
					public setPageMarginDrawable(param0: android.graphics.drawable.Drawable): void;
					public setPageMarginDrawable(param0: number): void;
					public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
					public drawableStateChanged(): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public addView(param0: android.view.View): void;
					public addView(param0: android.view.View, param1: number): void;
					public addView(param0: android.view.View, param1: number, param2: number): void;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
					public removeView(param0: android.view.View): void;
					public onAttachedToWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public computeScroll(): void;
					public onPageScrolled(param0: number, param1: number, param2: number): void;
					public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public draw(param0: android.graphics.Canvas): void;
					public onDraw(param0: android.graphics.Canvas): void;
					public beginFakeDrag(): boolean;
					public endFakeDrag(): void;
					public fakeDragBy(param0: number): void;
					public isFakeDragging(): boolean;
					public canScrollHorizontally(param0: number): boolean;
					public canScroll(param0: android.view.View, param1: boolean, param2: number, param3: number, param4: number): boolean;
					public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
					public executeKeyEvent(param0: android.view.KeyEvent): boolean;
					public arrowScroll(param0: number): boolean;
					public addFocusables(param0: java.util.ArrayList, param1: number): void;
					public addFocusables(param0: java.util.ArrayList, param1: number, param2: number): void;
					public addTouchables(param0: java.util.ArrayList): void;
					public onRequestFocusInDescendants(param0: number, param1: android.graphics.Rect): boolean;
					public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
					public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public static SCROLL_STATE_IDLE: number;
					public static SCROLL_STATE_DRAGGING: number;
					public static SCROLL_STATE_SETTLING: number;
				}
				export module ViewPager {
					export class Decor {
					}
					export class ItemInfo {
					}
					export class LayoutParams {
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: number, param1: number);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor();
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public isDecor: boolean;
						public gravity: number;
					}
					export class MyAccessibilityDelegate {
						public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
						public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
						public performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					}
					export class OnAdapterChangeListener {
						public onAdapterChanged(param0: android.support.v4.view.PagerAdapter, param1: android.support.v4.view.PagerAdapter): void;
					}
					export class OnPageChangeListener {
						public onPageScrolled(param0: number, param1: number, param2: number): void;
						public onPageSelected(param0: number): void;
						public onPageScrollStateChanged(param0: number): void;
					}
					export class PageTransformer {
						public transformPage(param0: android.view.View, param1: number): void;
					}
					export class PagerObserver {
						public onChanged(): void;
						public onInvalidated(): void;
					}
					export class SavedState {
						public constructor(param0: android.os.Parcel);
						public constructor();
						public constructor(param0: android.os.Parcelable);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public toString(): string;
						public static CREATOR: android.os.Parcelable.Creator;
					}
					export class SimpleOnPageChangeListener {
						public constructor();
						public onPageScrolled(param0: number, param1: number, param2: number): void;
						public onPageSelected(param0: number): void;
						public onPageScrollStateChanged(param0: number): void;
					}
					export class ViewPositionComparator {
						public compare(param0: android.view.View, param1: android.view.View): number;
					}
				}
			}
		}
	}
}
