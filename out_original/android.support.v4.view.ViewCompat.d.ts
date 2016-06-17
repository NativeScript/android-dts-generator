/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.view.AccessibilityDelegateCompat.d.ts" />
/// <reference path="./android.support.v4.view.OnApplyWindowInsetsListener.d.ts" />
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./android.support.v4.view.WindowInsetsCompat.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeProviderCompat.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewCompat {
					public static canScrollHorizontally(param0: android.view.View, param1: number): boolean;
					public static canScrollVertically(param0: android.view.View, param1: number): boolean;
					public static getOverScrollMode(param0: android.view.View): number;
					public static setOverScrollMode(param0: android.view.View, param1: number): void;
					public static onPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					public static onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					public static onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
					public static setAccessibilityDelegate(param0: android.view.View, param1: android.support.v4.view.AccessibilityDelegateCompat): void;
					public static hasAccessibilityDelegate(param0: android.view.View): boolean;
					public static hasTransientState(param0: android.view.View): boolean;
					public static setHasTransientState(param0: android.view.View, param1: boolean): void;
					public static postInvalidateOnAnimation(param0: android.view.View): void;
					public static postInvalidateOnAnimation(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public static postOnAnimation(param0: android.view.View, param1: java.lang.Runnable): void;
					public static postOnAnimationDelayed(param0: android.view.View, param1: java.lang.Runnable, param2: number): void;
					public static getImportantForAccessibility(param0: android.view.View): number;
					public static setImportantForAccessibility(param0: android.view.View, param1: number): void;
					public static performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public static getAccessibilityNodeProvider(param0: android.view.View): android.support.v4.view.accessibility.AccessibilityNodeProviderCompat;
					public static getAlpha(param0: android.view.View): number;
					public static setLayerType(param0: android.view.View, param1: number, param2: android.graphics.Paint): void;
					public static getLayerType(param0: android.view.View): number;
					public static getLabelFor(param0: android.view.View): number;
					public static setLabelFor(param0: android.view.View, param1: number): void;
					public static setLayerPaint(param0: android.view.View, param1: android.graphics.Paint): void;
					public static getLayoutDirection(param0: android.view.View): number;
					public static setLayoutDirection(param0: android.view.View, param1: number): void;
					public static getParentForAccessibility(param0: android.view.View): android.view.ViewParent;
					public static isOpaque(param0: android.view.View): boolean;
					public static resolveSizeAndState(param0: number, param1: number, param2: number): number;
					public static getMeasuredWidthAndState(param0: android.view.View): number;
					public static getMeasuredHeightAndState(param0: android.view.View): number;
					public static getMeasuredState(param0: android.view.View): number;
					public static combineMeasuredStates(param0: number, param1: number): number;
					public static getAccessibilityLiveRegion(param0: android.view.View): number;
					public static setAccessibilityLiveRegion(param0: android.view.View, param1: number): void;
					public static getPaddingStart(param0: android.view.View): number;
					public static getPaddingEnd(param0: android.view.View): number;
					public static setPaddingRelative(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public static dispatchStartTemporaryDetach(param0: android.view.View): void;
					public static dispatchFinishTemporaryDetach(param0: android.view.View): void;
					public static getTranslationX(param0: android.view.View): number;
					public static getTranslationY(param0: android.view.View): number;
					public static getMinimumWidth(param0: android.view.View): number;
					public static getMinimumHeight(param0: android.view.View): number;
					public static animate(param0: android.view.View): android.support.v4.view.ViewPropertyAnimatorCompat;
					public static setTranslationX(param0: android.view.View, param1: number): void;
					public static setTranslationY(param0: android.view.View, param1: number): void;
					public static setAlpha(param0: android.view.View, param1: number): void;
					public static setX(param0: android.view.View, param1: number): void;
					public static setY(param0: android.view.View, param1: number): void;
					public static setRotation(param0: android.view.View, param1: number): void;
					public static setRotationX(param0: android.view.View, param1: number): void;
					public static setRotationY(param0: android.view.View, param1: number): void;
					public static setScaleX(param0: android.view.View, param1: number): void;
					public static setScaleY(param0: android.view.View, param1: number): void;
					public static getPivotX(param0: android.view.View): number;
					public static setPivotX(param0: android.view.View, param1: number): void;
					public static getPivotY(param0: android.view.View): number;
					public static setPivotY(param0: android.view.View, param1: number): void;
					public static getRotation(param0: android.view.View): number;
					public static getRotationX(param0: android.view.View): number;
					public static getRotationY(param0: android.view.View): number;
					public static getScaleX(param0: android.view.View): number;
					public static getScaleY(param0: android.view.View): number;
					public static getX(param0: android.view.View): number;
					public static getY(param0: android.view.View): number;
					public static setElevation(param0: android.view.View, param1: number): void;
					public static getElevation(param0: android.view.View): number;
					public static setTranslationZ(param0: android.view.View, param1: number): void;
					public static getTranslationZ(param0: android.view.View): number;
					public static setTransitionName(param0: android.view.View, param1: string): void;
					public static getTransitionName(param0: android.view.View): string;
					public static getWindowSystemUiVisibility(param0: android.view.View): number;
					public static requestApplyInsets(param0: android.view.View): void;
					public static setChildrenDrawingOrderEnabled(param0: android.view.ViewGroup, param1: boolean): void;
					public static getFitsSystemWindows(param0: android.view.View): boolean;
					public static setFitsSystemWindows(param0: android.view.View, param1: boolean): void;
					public static jumpDrawablesToCurrentState(param0: android.view.View): void;
					public static setOnApplyWindowInsetsListener(param0: android.view.View, param1: android.support.v4.view.OnApplyWindowInsetsListener): void;
					public static onApplyWindowInsets(param0: android.view.View, param1: android.support.v4.view.WindowInsetsCompat): android.support.v4.view.WindowInsetsCompat;
					public static dispatchApplyWindowInsets(param0: android.view.View, param1: android.support.v4.view.WindowInsetsCompat): android.support.v4.view.WindowInsetsCompat;
					public static setSaveFromParentEnabled(param0: android.view.View, param1: boolean): void;
					public static setActivated(param0: android.view.View, param1: boolean): void;
					public static hasOverlappingRendering(param0: android.view.View): boolean;
					public static isPaddingRelative(param0: android.view.View): boolean;
					public static getBackgroundTintList(param0: android.view.View): android.content.res.ColorStateList;
					public static setBackgroundTintList(param0: android.view.View, param1: android.content.res.ColorStateList): void;
					public static getBackgroundTintMode(param0: android.view.View): android.graphics.PorterDuff.Mode;
					public static setBackgroundTintMode(param0: android.view.View, param1: android.graphics.PorterDuff.Mode): void;
					public static setNestedScrollingEnabled(param0: android.view.View, param1: boolean): void;
					public static isNestedScrollingEnabled(param0: android.view.View): boolean;
					public static startNestedScroll(param0: android.view.View, param1: number): boolean;
					public static stopNestedScroll(param0: android.view.View): void;
					public static hasNestedScrollingParent(param0: android.view.View): boolean;
					public static dispatchNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>): boolean;
					public static dispatchNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>, param4: native.Array<number>): boolean;
					public static dispatchNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public static dispatchNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public static isLaidOut(param0: android.view.View): boolean;
					public static getZ(param0: android.view.View): number;
					public static offsetTopAndBottom(param0: android.view.View, param1: number): void;
					public static offsetLeftAndRight(param0: android.view.View, param1: number): void;
					public static setClipBounds(param0: android.view.View, param1: android.graphics.Rect): void;
					public static getClipBounds(param0: android.view.View): android.graphics.Rect;
					public static isAttachedToWindow(param0: android.view.View): boolean;
					public static hasOnClickListeners(param0: android.view.View): boolean;
					public static setScrollIndicators(param0: android.view.View, param1: number): void;
					public static setScrollIndicators(param0: android.view.View, param1: number, param2: number): void;
					public static getScrollIndicators(param0: android.view.View): number;
					public static OVER_SCROLL_ALWAYS: number;
					public static OVER_SCROLL_IF_CONTENT_SCROLLS: number;
					public static OVER_SCROLL_NEVER: number;
					public static IMPORTANT_FOR_ACCESSIBILITY_AUTO: number;
					public static IMPORTANT_FOR_ACCESSIBILITY_YES: number;
					public static IMPORTANT_FOR_ACCESSIBILITY_NO: number;
					public static IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS: number;
					public static ACCESSIBILITY_LIVE_REGION_NONE: number;
					public static ACCESSIBILITY_LIVE_REGION_POLITE: number;
					public static ACCESSIBILITY_LIVE_REGION_ASSERTIVE: number;
					public static LAYER_TYPE_NONE: number;
					public static LAYER_TYPE_SOFTWARE: number;
					public static LAYER_TYPE_HARDWARE: number;
					public static LAYOUT_DIRECTION_LTR: number;
					public static LAYOUT_DIRECTION_RTL: number;
					public static LAYOUT_DIRECTION_INHERIT: number;
					public static LAYOUT_DIRECTION_LOCALE: number;
					public static MEASURED_SIZE_MASK: number;
					public static MEASURED_STATE_MASK: number;
					public static MEASURED_HEIGHT_STATE_SHIFT: number;
					public static MEASURED_STATE_TOO_SMALL: number;
					public static SCROLL_AXIS_NONE: number;
					public static SCROLL_AXIS_HORIZONTAL: number;
					public static SCROLL_AXIS_VERTICAL: number;
					public static SCROLL_INDICATOR_TOP: number;
					public static SCROLL_INDICATOR_BOTTOM: number;
					public static SCROLL_INDICATOR_LEFT: number;
					public static SCROLL_INDICATOR_RIGHT: number;
					public static SCROLL_INDICATOR_START: number;
					public static SCROLL_INDICATOR_END: number;
				}
				export module ViewCompat {
					export class BaseViewCompatImpl {
						public canScrollHorizontally(param0: android.view.View, param1: number): boolean;
						public canScrollVertically(param0: android.view.View, param1: number): boolean;
						public getOverScrollMode(param0: android.view.View): number;
						public setOverScrollMode(param0: android.view.View, param1: number): void;
						public setAccessibilityDelegate(param0: android.view.View, param1: android.support.v4.view.AccessibilityDelegateCompat): void;
						public hasAccessibilityDelegate(param0: android.view.View): boolean;
						public onPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
						public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
						public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
						public hasTransientState(param0: android.view.View): boolean;
						public setHasTransientState(param0: android.view.View, param1: boolean): void;
						public postInvalidateOnAnimation(param0: android.view.View): void;
						public postInvalidateOnAnimation(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public postOnAnimation(param0: android.view.View, param1: java.lang.Runnable): void;
						public postOnAnimationDelayed(param0: android.view.View, param1: java.lang.Runnable, param2: number): void;
						public getImportantForAccessibility(param0: android.view.View): number;
						public setImportantForAccessibility(param0: android.view.View, param1: number): void;
						public isImportantForAccessibility(param0: android.view.View): boolean;
						public performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public getAccessibilityNodeProvider(param0: android.view.View): android.support.v4.view.accessibility.AccessibilityNodeProviderCompat;
						public getAlpha(param0: android.view.View): number;
						public setLayerType(param0: android.view.View, param1: number, param2: android.graphics.Paint): void;
						public getLayerType(param0: android.view.View): number;
						public getLabelFor(param0: android.view.View): number;
						public setLabelFor(param0: android.view.View, param1: number): void;
						public setLayerPaint(param0: android.view.View, param1: android.graphics.Paint): void;
						public getLayoutDirection(param0: android.view.View): number;
						public setLayoutDirection(param0: android.view.View, param1: number): void;
						public getParentForAccessibility(param0: android.view.View): android.view.ViewParent;
						public isOpaque(param0: android.view.View): boolean;
						public resolveSizeAndState(param0: number, param1: number, param2: number): number;
						public getMeasuredWidthAndState(param0: android.view.View): number;
						public getMeasuredHeightAndState(param0: android.view.View): number;
						public getMeasuredState(param0: android.view.View): number;
						public getAccessibilityLiveRegion(param0: android.view.View): number;
						public setAccessibilityLiveRegion(param0: android.view.View, param1: number): void;
						public getPaddingStart(param0: android.view.View): number;
						public getPaddingEnd(param0: android.view.View): number;
						public setPaddingRelative(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public dispatchStartTemporaryDetach(param0: android.view.View): void;
						public dispatchFinishTemporaryDetach(param0: android.view.View): void;
						public hasOverlappingRendering(param0: android.view.View): boolean;
						public getTranslationX(param0: android.view.View): number;
						public getTranslationY(param0: android.view.View): number;
						public getX(param0: android.view.View): number;
						public getY(param0: android.view.View): number;
						public getRotation(param0: android.view.View): number;
						public getRotationX(param0: android.view.View): number;
						public getRotationY(param0: android.view.View): number;
						public getScaleX(param0: android.view.View): number;
						public getScaleY(param0: android.view.View): number;
						public getMinimumWidth(param0: android.view.View): number;
						public getMinimumHeight(param0: android.view.View): number;
						public animate(param0: android.view.View): android.support.v4.view.ViewPropertyAnimatorCompat;
						public setRotation(param0: android.view.View, param1: number): void;
						public setTranslationX(param0: android.view.View, param1: number): void;
						public setTranslationY(param0: android.view.View, param1: number): void;
						public setAlpha(param0: android.view.View, param1: number): void;
						public setRotationX(param0: android.view.View, param1: number): void;
						public setRotationY(param0: android.view.View, param1: number): void;
						public setScaleX(param0: android.view.View, param1: number): void;
						public setScaleY(param0: android.view.View, param1: number): void;
						public setX(param0: android.view.View, param1: number): void;
						public setY(param0: android.view.View, param1: number): void;
						public setPivotX(param0: android.view.View, param1: number): void;
						public setPivotY(param0: android.view.View, param1: number): void;
						public getPivotX(param0: android.view.View): number;
						public getPivotY(param0: android.view.View): number;
						public setTransitionName(param0: android.view.View, param1: string): void;
						public getTransitionName(param0: android.view.View): string;
						public getWindowSystemUiVisibility(param0: android.view.View): number;
						public requestApplyInsets(param0: android.view.View): void;
						public setElevation(param0: android.view.View, param1: number): void;
						public getElevation(param0: android.view.View): number;
						public setTranslationZ(param0: android.view.View, param1: number): void;
						public getTranslationZ(param0: android.view.View): number;
						public setClipBounds(param0: android.view.View, param1: android.graphics.Rect): void;
						public getClipBounds(param0: android.view.View): android.graphics.Rect;
						public setChildrenDrawingOrderEnabled(param0: android.view.ViewGroup, param1: boolean): void;
						public getFitsSystemWindows(param0: android.view.View): boolean;
						public setFitsSystemWindows(param0: android.view.View, param1: boolean): void;
						public jumpDrawablesToCurrentState(param0: android.view.View): void;
						public setOnApplyWindowInsetsListener(param0: android.view.View, param1: android.support.v4.view.OnApplyWindowInsetsListener): void;
						public onApplyWindowInsets(param0: android.view.View, param1: android.support.v4.view.WindowInsetsCompat): android.support.v4.view.WindowInsetsCompat;
						public dispatchApplyWindowInsets(param0: android.view.View, param1: android.support.v4.view.WindowInsetsCompat): android.support.v4.view.WindowInsetsCompat;
						public setSaveFromParentEnabled(param0: android.view.View, param1: boolean): void;
						public setActivated(param0: android.view.View, param1: boolean): void;
						public isPaddingRelative(param0: android.view.View): boolean;
						public setNestedScrollingEnabled(param0: android.view.View, param1: boolean): void;
						public isNestedScrollingEnabled(param0: android.view.View): boolean;
						public getBackgroundTintList(param0: android.view.View): android.content.res.ColorStateList;
						public setBackgroundTintList(param0: android.view.View, param1: android.content.res.ColorStateList): void;
						public setBackgroundTintMode(param0: android.view.View, param1: android.graphics.PorterDuff.Mode): void;
						public getBackgroundTintMode(param0: android.view.View): android.graphics.PorterDuff.Mode;
						public startNestedScroll(param0: android.view.View, param1: number): boolean;
						public stopNestedScroll(param0: android.view.View): void;
						public hasNestedScrollingParent(param0: android.view.View): boolean;
						public dispatchNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>): boolean;
						public dispatchNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>, param4: native.Array<number>): boolean;
						public dispatchNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public dispatchNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public isLaidOut(param0: android.view.View): boolean;
						public combineMeasuredStates(param0: number, param1: number): number;
						public getZ(param0: android.view.View): number;
						public isAttachedToWindow(param0: android.view.View): boolean;
						public hasOnClickListeners(param0: android.view.View): boolean;
						public getScrollIndicators(param0: android.view.View): number;
						public setScrollIndicators(param0: android.view.View, param1: number): void;
						public setScrollIndicators(param0: android.view.View, param1: number, param2: number): void;
						public offsetLeftAndRight(param0: android.view.View, param1: number): void;
						public offsetTopAndBottom(param0: android.view.View, param1: number): void;
					}
					export class EclairMr1ViewCompatImpl {
						public isOpaque(param0: android.view.View): boolean;
						public setChildrenDrawingOrderEnabled(param0: android.view.ViewGroup, param1: boolean): void;
					}
					export class GBViewCompatImpl {
						public getOverScrollMode(param0: android.view.View): number;
						public setOverScrollMode(param0: android.view.View, param1: number): void;
					}
					export class HCViewCompatImpl {
						public getAlpha(param0: android.view.View): number;
						public setLayerType(param0: android.view.View, param1: number, param2: android.graphics.Paint): void;
						public getLayerType(param0: android.view.View): number;
						public setLayerPaint(param0: android.view.View, param1: android.graphics.Paint): void;
						public resolveSizeAndState(param0: number, param1: number, param2: number): number;
						public getMeasuredWidthAndState(param0: android.view.View): number;
						public getMeasuredHeightAndState(param0: android.view.View): number;
						public getMeasuredState(param0: android.view.View): number;
						public getTranslationX(param0: android.view.View): number;
						public getTranslationY(param0: android.view.View): number;
						public setTranslationX(param0: android.view.View, param1: number): void;
						public setTranslationY(param0: android.view.View, param1: number): void;
						public setAlpha(param0: android.view.View, param1: number): void;
						public setX(param0: android.view.View, param1: number): void;
						public setY(param0: android.view.View, param1: number): void;
						public setRotation(param0: android.view.View, param1: number): void;
						public setRotationX(param0: android.view.View, param1: number): void;
						public setRotationY(param0: android.view.View, param1: number): void;
						public setScaleX(param0: android.view.View, param1: number): void;
						public setScaleY(param0: android.view.View, param1: number): void;
						public setPivotX(param0: android.view.View, param1: number): void;
						public setPivotY(param0: android.view.View, param1: number): void;
						public getX(param0: android.view.View): number;
						public getY(param0: android.view.View): number;
						public getRotation(param0: android.view.View): number;
						public getRotationX(param0: android.view.View): number;
						public getRotationY(param0: android.view.View): number;
						public getScaleX(param0: android.view.View): number;
						public getScaleY(param0: android.view.View): number;
						public getPivotX(param0: android.view.View): number;
						public getPivotY(param0: android.view.View): number;
						public jumpDrawablesToCurrentState(param0: android.view.View): void;
						public setSaveFromParentEnabled(param0: android.view.View, param1: boolean): void;
						public setActivated(param0: android.view.View, param1: boolean): void;
						public combineMeasuredStates(param0: number, param1: number): number;
						public offsetLeftAndRight(param0: android.view.View, param1: number): void;
						public offsetTopAndBottom(param0: android.view.View, param1: number): void;
					}
					export class ICSMr1ViewCompatImpl {
						public hasOnClickListeners(param0: android.view.View): boolean;
					}
					export class ICSViewCompatImpl {
						public canScrollHorizontally(param0: android.view.View, param1: number): boolean;
						public canScrollVertically(param0: android.view.View, param1: number): boolean;
						public onPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
						public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
						public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
						public setAccessibilityDelegate(param0: android.view.View, param1: android.support.v4.view.AccessibilityDelegateCompat): void;
						public hasAccessibilityDelegate(param0: android.view.View): boolean;
						public animate(param0: android.view.View): android.support.v4.view.ViewPropertyAnimatorCompat;
						public setFitsSystemWindows(param0: android.view.View, param1: boolean): void;
					}
					export class JBViewCompatImpl {
						public hasTransientState(param0: android.view.View): boolean;
						public setHasTransientState(param0: android.view.View, param1: boolean): void;
						public postInvalidateOnAnimation(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public postInvalidateOnAnimation(param0: android.view.View): void;
						public postInvalidateOnAnimation(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public postOnAnimation(param0: android.view.View, param1: java.lang.Runnable): void;
						public postOnAnimationDelayed(param0: android.view.View, param1: java.lang.Runnable, param2: number): void;
						public getImportantForAccessibility(param0: android.view.View): number;
						public setImportantForAccessibility(param0: android.view.View, param1: number): void;
						public performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public getAccessibilityNodeProvider(param0: android.view.View): android.support.v4.view.accessibility.AccessibilityNodeProviderCompat;
						public getParentForAccessibility(param0: android.view.View): android.view.ViewParent;
						public getMinimumWidth(param0: android.view.View): number;
						public getMinimumHeight(param0: android.view.View): number;
						public requestApplyInsets(param0: android.view.View): void;
						public getFitsSystemWindows(param0: android.view.View): boolean;
						public hasOverlappingRendering(param0: android.view.View): boolean;
					}
					export class JbMr1ViewCompatImpl {
						public getLabelFor(param0: android.view.View): number;
						public setLabelFor(param0: android.view.View, param1: number): void;
						public setLayerPaint(param0: android.view.View, param1: android.graphics.Paint): void;
						public getLayoutDirection(param0: android.view.View): number;
						public setLayoutDirection(param0: android.view.View, param1: number): void;
						public getPaddingStart(param0: android.view.View): number;
						public getPaddingEnd(param0: android.view.View): number;
						public setPaddingRelative(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public getWindowSystemUiVisibility(param0: android.view.View): number;
						public isPaddingRelative(param0: android.view.View): boolean;
					}
					export class JbMr2ViewCompatImpl {
						public setClipBounds(param0: android.view.View, param1: android.graphics.Rect): void;
						public getClipBounds(param0: android.view.View): android.graphics.Rect;
					}
					export class KitKatViewCompatImpl {
						public getAccessibilityLiveRegion(param0: android.view.View): number;
						public setAccessibilityLiveRegion(param0: android.view.View, param1: number): void;
						public setImportantForAccessibility(param0: android.view.View, param1: number): void;
						public isLaidOut(param0: android.view.View): boolean;
						public isAttachedToWindow(param0: android.view.View): boolean;
					}
					export class LollipopViewCompatImpl {
						public setTransitionName(param0: android.view.View, param1: string): void;
						public getTransitionName(param0: android.view.View): string;
						public requestApplyInsets(param0: android.view.View): void;
						public setElevation(param0: android.view.View, param1: number): void;
						public getElevation(param0: android.view.View): number;
						public setTranslationZ(param0: android.view.View, param1: number): void;
						public getTranslationZ(param0: android.view.View): number;
						public setOnApplyWindowInsetsListener(param0: android.view.View, param1: android.support.v4.view.OnApplyWindowInsetsListener): void;
						public setNestedScrollingEnabled(param0: android.view.View, param1: boolean): void;
						public isNestedScrollingEnabled(param0: android.view.View): boolean;
						public startNestedScroll(param0: android.view.View, param1: number): boolean;
						public stopNestedScroll(param0: android.view.View): void;
						public hasNestedScrollingParent(param0: android.view.View): boolean;
						public dispatchNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>): boolean;
						public dispatchNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>, param4: native.Array<number>): boolean;
						public dispatchNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public dispatchNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public isImportantForAccessibility(param0: android.view.View): boolean;
						public getBackgroundTintList(param0: android.view.View): android.content.res.ColorStateList;
						public setBackgroundTintList(param0: android.view.View, param1: android.content.res.ColorStateList): void;
						public setBackgroundTintMode(param0: android.view.View, param1: android.graphics.PorterDuff.Mode): void;
						public getBackgroundTintMode(param0: android.view.View): android.graphics.PorterDuff.Mode;
						public onApplyWindowInsets(param0: android.view.View, param1: android.support.v4.view.WindowInsetsCompat): android.support.v4.view.WindowInsetsCompat;
						public dispatchApplyWindowInsets(param0: android.view.View, param1: android.support.v4.view.WindowInsetsCompat): android.support.v4.view.WindowInsetsCompat;
						public getZ(param0: android.view.View): number;
						public offsetLeftAndRight(param0: android.view.View, param1: number): void;
						public offsetTopAndBottom(param0: android.view.View, param1: number): void;
					}
					export class MarshmallowViewCompatImpl {
						public setScrollIndicators(param0: android.view.View, param1: number, param2: number): void;
						public setScrollIndicators(param0: android.view.View, param1: number): void;
						public setScrollIndicators(param0: android.view.View, param1: number, param2: number): void;
						public getScrollIndicators(param0: android.view.View): number;
						public offsetLeftAndRight(param0: android.view.View, param1: number): void;
						public offsetTopAndBottom(param0: android.view.View, param1: number): void;
					}
					export class ScrollIndicators {
					}
					export class ViewCompatImpl {
						public canScrollHorizontally(param0: android.view.View, param1: number): boolean;
						public canScrollVertically(param0: android.view.View, param1: number): boolean;
						public getOverScrollMode(param0: android.view.View): number;
						public setOverScrollMode(param0: android.view.View, param1: number): void;
						public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
						public onPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
						public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
						public setAccessibilityDelegate(param0: android.view.View, param1: android.support.v4.view.AccessibilityDelegateCompat): void;
						public hasAccessibilityDelegate(param0: android.view.View): boolean;
						public hasTransientState(param0: android.view.View): boolean;
						public setHasTransientState(param0: android.view.View, param1: boolean): void;
						public postInvalidateOnAnimation(param0: android.view.View): void;
						public postInvalidateOnAnimation(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public postOnAnimation(param0: android.view.View, param1: java.lang.Runnable): void;
						public postOnAnimationDelayed(param0: android.view.View, param1: java.lang.Runnable, param2: number): void;
						public getImportantForAccessibility(param0: android.view.View): number;
						public setImportantForAccessibility(param0: android.view.View, param1: number): void;
						public isImportantForAccessibility(param0: android.view.View): boolean;
						public performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public getAccessibilityNodeProvider(param0: android.view.View): android.support.v4.view.accessibility.AccessibilityNodeProviderCompat;
						public getAlpha(param0: android.view.View): number;
						public setLayerType(param0: android.view.View, param1: number, param2: android.graphics.Paint): void;
						public getLayerType(param0: android.view.View): number;
						public getLabelFor(param0: android.view.View): number;
						public setLabelFor(param0: android.view.View, param1: number): void;
						public setLayerPaint(param0: android.view.View, param1: android.graphics.Paint): void;
						public getLayoutDirection(param0: android.view.View): number;
						public setLayoutDirection(param0: android.view.View, param1: number): void;
						public getParentForAccessibility(param0: android.view.View): android.view.ViewParent;
						public isOpaque(param0: android.view.View): boolean;
						public resolveSizeAndState(param0: number, param1: number, param2: number): number;
						public getMeasuredWidthAndState(param0: android.view.View): number;
						public getMeasuredHeightAndState(param0: android.view.View): number;
						public getMeasuredState(param0: android.view.View): number;
						public getAccessibilityLiveRegion(param0: android.view.View): number;
						public setAccessibilityLiveRegion(param0: android.view.View, param1: number): void;
						public getPaddingStart(param0: android.view.View): number;
						public getPaddingEnd(param0: android.view.View): number;
						public setPaddingRelative(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public dispatchStartTemporaryDetach(param0: android.view.View): void;
						public dispatchFinishTemporaryDetach(param0: android.view.View): void;
						public getX(param0: android.view.View): number;
						public getY(param0: android.view.View): number;
						public getRotation(param0: android.view.View): number;
						public getRotationX(param0: android.view.View): number;
						public getRotationY(param0: android.view.View): number;
						public getScaleX(param0: android.view.View): number;
						public getScaleY(param0: android.view.View): number;
						public getTranslationX(param0: android.view.View): number;
						public getTranslationY(param0: android.view.View): number;
						public getMinimumWidth(param0: android.view.View): number;
						public getMinimumHeight(param0: android.view.View): number;
						public animate(param0: android.view.View): android.support.v4.view.ViewPropertyAnimatorCompat;
						public setRotation(param0: android.view.View, param1: number): void;
						public setRotationX(param0: android.view.View, param1: number): void;
						public setRotationY(param0: android.view.View, param1: number): void;
						public setScaleX(param0: android.view.View, param1: number): void;
						public setScaleY(param0: android.view.View, param1: number): void;
						public setTranslationX(param0: android.view.View, param1: number): void;
						public setTranslationY(param0: android.view.View, param1: number): void;
						public setX(param0: android.view.View, param1: number): void;
						public setY(param0: android.view.View, param1: number): void;
						public setAlpha(param0: android.view.View, param1: number): void;
						public setPivotX(param0: android.view.View, param1: number): void;
						public setPivotY(param0: android.view.View, param1: number): void;
						public getPivotX(param0: android.view.View): number;
						public getPivotY(param0: android.view.View): number;
						public setElevation(param0: android.view.View, param1: number): void;
						public getElevation(param0: android.view.View): number;
						public setTranslationZ(param0: android.view.View, param1: number): void;
						public getTranslationZ(param0: android.view.View): number;
						public setClipBounds(param0: android.view.View, param1: android.graphics.Rect): void;
						public getClipBounds(param0: android.view.View): android.graphics.Rect;
						public setTransitionName(param0: android.view.View, param1: string): void;
						public getTransitionName(param0: android.view.View): string;
						public getWindowSystemUiVisibility(param0: android.view.View): number;
						public requestApplyInsets(param0: android.view.View): void;
						public setChildrenDrawingOrderEnabled(param0: android.view.ViewGroup, param1: boolean): void;
						public getFitsSystemWindows(param0: android.view.View): boolean;
						public hasOverlappingRendering(param0: android.view.View): boolean;
						public setFitsSystemWindows(param0: android.view.View, param1: boolean): void;
						public jumpDrawablesToCurrentState(param0: android.view.View): void;
						public setOnApplyWindowInsetsListener(param0: android.view.View, param1: android.support.v4.view.OnApplyWindowInsetsListener): void;
						public onApplyWindowInsets(param0: android.view.View, param1: android.support.v4.view.WindowInsetsCompat): android.support.v4.view.WindowInsetsCompat;
						public dispatchApplyWindowInsets(param0: android.view.View, param1: android.support.v4.view.WindowInsetsCompat): android.support.v4.view.WindowInsetsCompat;
						public setSaveFromParentEnabled(param0: android.view.View, param1: boolean): void;
						public setActivated(param0: android.view.View, param1: boolean): void;
						public isPaddingRelative(param0: android.view.View): boolean;
						public getBackgroundTintList(param0: android.view.View): android.content.res.ColorStateList;
						public setBackgroundTintList(param0: android.view.View, param1: android.content.res.ColorStateList): void;
						public getBackgroundTintMode(param0: android.view.View): android.graphics.PorterDuff.Mode;
						public setBackgroundTintMode(param0: android.view.View, param1: android.graphics.PorterDuff.Mode): void;
						public setNestedScrollingEnabled(param0: android.view.View, param1: boolean): void;
						public isNestedScrollingEnabled(param0: android.view.View): boolean;
						public startNestedScroll(param0: android.view.View, param1: number): boolean;
						public stopNestedScroll(param0: android.view.View): void;
						public hasNestedScrollingParent(param0: android.view.View): boolean;
						public dispatchNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>): boolean;
						public dispatchNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>, param4: native.Array<number>): boolean;
						public dispatchNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public dispatchNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public isLaidOut(param0: android.view.View): boolean;
						public combineMeasuredStates(param0: number, param1: number): number;
						public getZ(param0: android.view.View): number;
						public isAttachedToWindow(param0: android.view.View): boolean;
						public hasOnClickListeners(param0: android.view.View): boolean;
						public setScrollIndicators(param0: android.view.View, param1: number): void;
						public setScrollIndicators(param0: android.view.View, param1: number, param2: number): void;
						public getScrollIndicators(param0: android.view.View): number;
						public offsetTopAndBottom(param0: android.view.View, param1: number): void;
						public offsetLeftAndRight(param0: android.view.View, param1: number): void;
					}
				}
			}
		}
	}
}
