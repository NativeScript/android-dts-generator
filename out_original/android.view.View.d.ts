/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.StateListAnimator.d.ts" />
/// <reference path="./android.content.ClipData.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.Property.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
/// <reference path="./android.view.DragEvent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.TouchDelegate.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.ViewOutlineProvider.d.ts" />
/// <reference path="./android.view.ViewOverlay.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.ViewPropertyAnimator.d.ts" />
/// <reference path="./android.view.ViewStructure.d.ts" />
/// <reference path="./android.view.ViewTreeObserver.d.ts" />
/// <reference path="./android.view.WindowId.d.ts" />
/// <reference path="./android.view.WindowInsets.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeProvider.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./android.view.inputmethod.EditorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module view {
		export class View {
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public toString(): string;
			public getVerticalFadingEdgeLength(): number;
			public setFadingEdgeLength(param0: number): void;
			public getHorizontalFadingEdgeLength(): number;
			public getVerticalScrollbarWidth(): number;
			public getHorizontalScrollbarHeight(): number;
			public setVerticalScrollbarPosition(param0: number): void;
			public getVerticalScrollbarPosition(): number;
			public setScrollIndicators(param0: number): void;
			public setScrollIndicators(param0: number, param1: number): void;
			public getScrollIndicators(): number;
			public setOnScrollChangeListener(param0: android.view.View.OnScrollChangeListener): void;
			public setOnFocusChangeListener(param0: android.view.View.OnFocusChangeListener): void;
			public addOnLayoutChangeListener(param0: android.view.View.OnLayoutChangeListener): void;
			public removeOnLayoutChangeListener(param0: android.view.View.OnLayoutChangeListener): void;
			public addOnAttachStateChangeListener(param0: android.view.View.OnAttachStateChangeListener): void;
			public removeOnAttachStateChangeListener(param0: android.view.View.OnAttachStateChangeListener): void;
			public getOnFocusChangeListener(): android.view.View.OnFocusChangeListener;
			public setOnClickListener(param0: android.view.View.OnClickListener): void;
			public hasOnClickListeners(): boolean;
			public setOnLongClickListener(param0: android.view.View.OnLongClickListener): void;
			public setOnContextClickListener(param0: android.view.View.OnContextClickListener): void;
			public setOnCreateContextMenuListener(param0: android.view.View.OnCreateContextMenuListener): void;
			public performClick(): boolean;
			public callOnClick(): boolean;
			public performLongClick(): boolean;
			public performContextClick(): boolean;
			public showContextMenu(): boolean;
			public startActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
			public startActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
			public setOnKeyListener(param0: android.view.View.OnKeyListener): void;
			public setOnTouchListener(param0: android.view.View.OnTouchListener): void;
			public setOnGenericMotionListener(param0: android.view.View.OnGenericMotionListener): void;
			public setOnHoverListener(param0: android.view.View.OnHoverListener): void;
			public setOnDragListener(param0: android.view.View.OnDragListener): void;
			public requestRectangleOnScreen(param0: android.graphics.Rect): boolean;
			public requestRectangleOnScreen(param0: android.graphics.Rect, param1: boolean): boolean;
			public clearFocus(): void;
			public hasFocus(): boolean;
			public hasFocusable(): boolean;
			public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;
			public sendAccessibilityEvent(param0: number): void;
			public announceForAccessibility(param0: string): void;
			public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
			public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
			public onPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
			public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
			public createAccessibilityNodeInfo(): android.view.accessibility.AccessibilityNodeInfo;
			public onInitializeAccessibilityNodeInfo(param0: android.view.accessibility.AccessibilityNodeInfo): void;
			public getAccessibilityClassName(): string;
			public onProvideStructure(param0: android.view.ViewStructure): void;
			public onProvideVirtualStructure(param0: android.view.ViewStructure): void;
			public dispatchProvideStructure(param0: android.view.ViewStructure): void;
			public setAccessibilityDelegate(param0: android.view.View.AccessibilityDelegate): void;
			public getAccessibilityNodeProvider(): android.view.accessibility.AccessibilityNodeProvider;
			public getContentDescription(): string;
			public setContentDescription(param0: string): void;
			public setAccessibilityTraversalBefore(param0: number): void;
			public getAccessibilityTraversalBefore(): number;
			public setAccessibilityTraversalAfter(param0: number): void;
			public getAccessibilityTraversalAfter(): number;
			public getLabelFor(): number;
			public setLabelFor(param0: number): void;
			public isFocused(): boolean;
			public findFocus(): android.view.View;
			public isScrollContainer(): boolean;
			public setScrollContainer(param0: boolean): void;
			public getDrawingCacheQuality(): number;
			public setDrawingCacheQuality(param0: number): void;
			public getKeepScreenOn(): boolean;
			public setKeepScreenOn(param0: boolean): void;
			public getNextFocusLeftId(): number;
			public setNextFocusLeftId(param0: number): void;
			public getNextFocusRightId(): number;
			public setNextFocusRightId(param0: number): void;
			public getNextFocusUpId(): number;
			public setNextFocusUpId(param0: number): void;
			public getNextFocusDownId(): number;
			public setNextFocusDownId(param0: number): void;
			public getNextFocusForwardId(): number;
			public setNextFocusForwardId(param0: number): void;
			public isShown(): boolean;
			public fitSystemWindows(param0: android.graphics.Rect): boolean;
			public onApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;
			public setOnApplyWindowInsetsListener(param0: android.view.View.OnApplyWindowInsetsListener): void;
			public dispatchApplyWindowInsets(param0: android.view.WindowInsets): android.view.WindowInsets;
			public getRootWindowInsets(): android.view.WindowInsets;
			public computeSystemWindowInsets(param0: android.view.WindowInsets, param1: android.graphics.Rect): android.view.WindowInsets;
			public setFitsSystemWindows(param0: boolean): void;
			public getFitsSystemWindows(): boolean;
			public requestFitSystemWindows(): void;
			public requestApplyInsets(): void;
			public getVisibility(): number;
			public setVisibility(param0: number): void;
			public isEnabled(): boolean;
			public setEnabled(param0: boolean): void;
			public setFocusable(param0: boolean): void;
			public setFocusableInTouchMode(param0: boolean): void;
			public setSoundEffectsEnabled(param0: boolean): void;
			public isSoundEffectsEnabled(): boolean;
			public setHapticFeedbackEnabled(param0: boolean): void;
			public isHapticFeedbackEnabled(): boolean;
			public setLayoutDirection(param0: number): void;
			public getLayoutDirection(): number;
			public hasTransientState(): boolean;
			public setHasTransientState(param0: boolean): void;
			public isAttachedToWindow(): boolean;
			public isLaidOut(): boolean;
			public setWillNotDraw(param0: boolean): void;
			public willNotDraw(): boolean;
			public setWillNotCacheDrawing(param0: boolean): void;
			public willNotCacheDrawing(): boolean;
			public isClickable(): boolean;
			public setClickable(param0: boolean): void;
			public isLongClickable(): boolean;
			public setLongClickable(param0: boolean): void;
			public isContextClickable(): boolean;
			public setContextClickable(param0: boolean): void;
			public setPressed(param0: boolean): void;
			public dispatchSetPressed(param0: boolean): void;
			public isPressed(): boolean;
			public isSaveEnabled(): boolean;
			public setSaveEnabled(param0: boolean): void;
			public getFilterTouchesWhenObscured(): boolean;
			public setFilterTouchesWhenObscured(param0: boolean): void;
			public isSaveFromParentEnabled(): boolean;
			public setSaveFromParentEnabled(param0: boolean): void;
			public isFocusable(): boolean;
			public isFocusableInTouchMode(): boolean;
			public focusSearch(param0: number): android.view.View;
			public dispatchUnhandledMove(param0: android.view.View, param1: number): boolean;
			public getFocusables(param0: number): java.util.ArrayList;
			public addFocusables(param0: java.util.ArrayList, param1: number): void;
			public addFocusables(param0: java.util.ArrayList, param1: number, param2: number): void;
			public findViewsWithText(param0: java.util.ArrayList, param1: string, param2: number): void;
			public getTouchables(): java.util.ArrayList;
			public addTouchables(param0: java.util.ArrayList): void;
			public isAccessibilityFocused(): boolean;
			public requestFocus(): boolean;
			public requestFocus(param0: number): boolean;
			public requestFocus(param0: number, param1: android.graphics.Rect): boolean;
			public requestFocusFromTouch(): boolean;
			public getImportantForAccessibility(): number;
			public setAccessibilityLiveRegion(param0: number): void;
			public getAccessibilityLiveRegion(): number;
			public setImportantForAccessibility(param0: number): void;
			public isImportantForAccessibility(): boolean;
			public getParentForAccessibility(): android.view.ViewParent;
			public addChildrenForAccessibility(param0: java.util.ArrayList): void;
			public dispatchNestedPrePerformAccessibilityAction(param0: number, param1: android.os.Bundle): boolean;
			public performAccessibilityAction(param0: number, param1: android.os.Bundle): boolean;
			public onStartTemporaryDetach(): void;
			public onFinishTemporaryDetach(): void;
			public getKeyDispatcherState(): android.view.KeyEvent.DispatcherState;
			public dispatchKeyEventPreIme(param0: android.view.KeyEvent): boolean;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public onFilterTouchEventForSecurity(param0: android.view.MotionEvent): boolean;
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public dispatchHoverEvent(param0: android.view.MotionEvent): boolean;
			public dispatchGenericPointerEvent(param0: android.view.MotionEvent): boolean;
			public dispatchGenericFocusedEvent(param0: android.view.MotionEvent): boolean;
			public dispatchWindowFocusChanged(param0: boolean): void;
			public onWindowFocusChanged(param0: boolean): void;
			public hasWindowFocus(): boolean;
			public dispatchVisibilityChanged(param0: android.view.View, param1: number): void;
			public onVisibilityChanged(param0: android.view.View, param1: number): void;
			public dispatchDisplayHint(param0: number): void;
			public onDisplayHint(param0: number): void;
			public dispatchWindowVisibilityChanged(param0: number): void;
			public onWindowVisibilityChanged(param0: number): void;
			public getWindowVisibility(): number;
			public getWindowVisibleDisplayFrame(param0: android.graphics.Rect): void;
			public dispatchConfigurationChanged(param0: android.content.res.Configuration): void;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public isInTouchMode(): boolean;
			public getContext(): android.content.Context;
			public onKeyPreIme(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public onKeyShortcut(param0: number, param1: android.view.KeyEvent): boolean;
			public onCheckIsTextEditor(): boolean;
			public onCreateInputConnection(param0: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
			public checkInputConnectionProxy(param0: android.view.View): boolean;
			public createContextMenu(param0: android.view.ContextMenu): void;
			public getContextMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
			public onCreateContextMenu(param0: android.view.ContextMenu): void;
			public onTrackballEvent(param0: android.view.MotionEvent): boolean;
			public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onHoverEvent(param0: android.view.MotionEvent): boolean;
			public isHovered(): boolean;
			public setHovered(param0: boolean): void;
			public onHoverChanged(param0: boolean): void;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public cancelLongPress(): void;
			public setTouchDelegate(param0: android.view.TouchDelegate): void;
			public getTouchDelegate(): android.view.TouchDelegate;
			public requestUnbufferedDispatch(param0: android.view.MotionEvent): void;
			public bringToFront(): void;
			public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
			public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
			public dispatchDraw(param0: android.graphics.Canvas): void;
			public getParent(): android.view.ViewParent;
			public setScrollX(param0: number): void;
			public setScrollY(param0: number): void;
			public getScrollX(): number;
			public getScrollY(): number;
			public getWidth(): number;
			public getHeight(): number;
			public getDrawingRect(param0: android.graphics.Rect): void;
			public getMeasuredWidth(): number;
			public getMeasuredWidthAndState(): number;
			public getMeasuredHeight(): number;
			public getMeasuredHeightAndState(): number;
			public getMeasuredState(): number;
			public getMatrix(): android.graphics.Matrix;
			public getCameraDistance(): number;
			public setCameraDistance(param0: number): void;
			public getRotation(): number;
			public setRotation(param0: number): void;
			public getRotationY(): number;
			public setRotationY(param0: number): void;
			public getRotationX(): number;
			public setRotationX(param0: number): void;
			public getScaleX(): number;
			public setScaleX(param0: number): void;
			public getScaleY(): number;
			public setScaleY(param0: number): void;
			public getPivotX(): number;
			public setPivotX(param0: number): void;
			public getPivotY(): number;
			public setPivotY(param0: number): void;
			public getAlpha(): number;
			public hasOverlappingRendering(): boolean;
			public setAlpha(param0: number): void;
			public getTop(): number;
			public setTop(param0: number): void;
			public getBottom(): number;
			public isDirty(): boolean;
			public setBottom(param0: number): void;
			public getLeft(): number;
			public setLeft(param0: number): void;
			public getRight(): number;
			public setRight(param0: number): void;
			public getX(): number;
			public setX(param0: number): void;
			public getY(): number;
			public setY(param0: number): void;
			public getZ(): number;
			public setZ(param0: number): void;
			public getElevation(): number;
			public setElevation(param0: number): void;
			public getTranslationX(): number;
			public setTranslationX(param0: number): void;
			public getTranslationY(): number;
			public setTranslationY(param0: number): void;
			public getTranslationZ(): number;
			public setTranslationZ(param0: number): void;
			public getStateListAnimator(): android.animation.StateListAnimator;
			public setStateListAnimator(param0: android.animation.StateListAnimator): void;
			public getClipToOutline(): boolean;
			public setClipToOutline(param0: boolean): void;
			public setOutlineProvider(param0: android.view.ViewOutlineProvider): void;
			public getOutlineProvider(): android.view.ViewOutlineProvider;
			public invalidateOutline(): void;
			public getHitRect(param0: android.graphics.Rect): void;
			public getFocusedRect(param0: android.graphics.Rect): void;
			public getGlobalVisibleRect(param0: android.graphics.Rect, param1: android.graphics.Point): boolean;
			public getGlobalVisibleRect(param0: android.graphics.Rect): boolean;
			public getLocalVisibleRect(param0: android.graphics.Rect): boolean;
			public offsetTopAndBottom(param0: number): void;
			public offsetLeftAndRight(param0: number): void;
			public getLayoutParams(): android.view.ViewGroup.LayoutParams;
			public setLayoutParams(param0: android.view.ViewGroup.LayoutParams): void;
			public scrollTo(param0: number, param1: number): void;
			public scrollBy(param0: number, param1: number): void;
			public awakenScrollBars(): boolean;
			public awakenScrollBars(param0: number): boolean;
			public awakenScrollBars(param0: number, param1: boolean): boolean;
			public invalidate(param0: android.graphics.Rect): void;
			public invalidate(param0: number, param1: number, param2: number, param3: number): void;
			public invalidate(): void;
			public isOpaque(): boolean;
			public getHandler(): android.os.Handler;
			public post(param0: java.lang.Runnable): boolean;
			public postDelayed(param0: java.lang.Runnable, param1: number): boolean;
			public postOnAnimation(param0: java.lang.Runnable): void;
			public postOnAnimationDelayed(param0: java.lang.Runnable, param1: number): void;
			public removeCallbacks(param0: java.lang.Runnable): boolean;
			public postInvalidate(): void;
			public postInvalidate(param0: number, param1: number, param2: number, param3: number): void;
			public postInvalidateDelayed(param0: number): void;
			public postInvalidateDelayed(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public postInvalidateOnAnimation(): void;
			public postInvalidateOnAnimation(param0: number, param1: number, param2: number, param3: number): void;
			public computeScroll(): void;
			public isHorizontalFadingEdgeEnabled(): boolean;
			public setHorizontalFadingEdgeEnabled(param0: boolean): void;
			public isVerticalFadingEdgeEnabled(): boolean;
			public setVerticalFadingEdgeEnabled(param0: boolean): void;
			public getTopFadingEdgeStrength(): number;
			public getBottomFadingEdgeStrength(): number;
			public getLeftFadingEdgeStrength(): number;
			public getRightFadingEdgeStrength(): number;
			public isHorizontalScrollBarEnabled(): boolean;
			public setHorizontalScrollBarEnabled(param0: boolean): void;
			public isVerticalScrollBarEnabled(): boolean;
			public setVerticalScrollBarEnabled(param0: boolean): void;
			public setScrollbarFadingEnabled(param0: boolean): void;
			public isScrollbarFadingEnabled(): boolean;
			public getScrollBarDefaultDelayBeforeFade(): number;
			public setScrollBarDefaultDelayBeforeFade(param0: number): void;
			public getScrollBarFadeDuration(): number;
			public setScrollBarFadeDuration(param0: number): void;
			public getScrollBarSize(): number;
			public setScrollBarSize(param0: number): void;
			public setScrollBarStyle(param0: number): void;
			public getScrollBarStyle(): number;
			public computeHorizontalScrollRange(): number;
			public computeHorizontalScrollOffset(): number;
			public computeHorizontalScrollExtent(): number;
			public computeVerticalScrollRange(): number;
			public computeVerticalScrollOffset(): number;
			public computeVerticalScrollExtent(): number;
			public canScrollHorizontally(param0: number): boolean;
			public canScrollVertically(param0: number): boolean;
			public onDrawScrollBars(param0: android.graphics.Canvas): void;
			public onDraw(param0: android.graphics.Canvas): void;
			public onAttachedToWindow(): void;
			public onScreenStateChanged(param0: number): void;
			public onRtlPropertiesChanged(param0: number): void;
			public canResolveLayoutDirection(): boolean;
			public isLayoutDirectionResolved(): boolean;
			public onDetachedFromWindow(): void;
			public getWindowAttachCount(): number;
			public getWindowToken(): android.os.IBinder;
			public getWindowId(): android.view.WindowId;
			public getApplicationWindowToken(): android.os.IBinder;
			public getDisplay(): android.view.Display;
			public cancelPendingInputEvents(): void;
			public onCancelPendingInputEvents(): void;
			public saveHierarchyState(param0: android.util.SparseArray): void;
			public dispatchSaveInstanceState(param0: android.util.SparseArray): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public restoreHierarchyState(param0: android.util.SparseArray): void;
			public dispatchRestoreInstanceState(param0: android.util.SparseArray): void;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
			public getDrawingTime(): number;
			public setDuplicateParentStateEnabled(param0: boolean): void;
			public isDuplicateParentStateEnabled(): boolean;
			public setLayerType(param0: number, param1: android.graphics.Paint): void;
			public setLayerPaint(param0: android.graphics.Paint): void;
			public getLayerType(): number;
			public buildLayer(): void;
			public setDrawingCacheEnabled(param0: boolean): void;
			public isDrawingCacheEnabled(): boolean;
			public getDrawingCache(): android.graphics.Bitmap;
			public getDrawingCache(param0: boolean): android.graphics.Bitmap;
			public destroyDrawingCache(): void;
			public setDrawingCacheBackgroundColor(param0: number): void;
			public getDrawingCacheBackgroundColor(): number;
			public buildDrawingCache(): void;
			public buildDrawingCache(param0: boolean): void;
			public isInEditMode(): boolean;
			public isPaddingOffsetRequired(): boolean;
			public getLeftPaddingOffset(): number;
			public getRightPaddingOffset(): number;
			public getTopPaddingOffset(): number;
			public getBottomPaddingOffset(): number;
			public isHardwareAccelerated(): boolean;
			public setClipBounds(param0: android.graphics.Rect): void;
			public getClipBounds(): android.graphics.Rect;
			public getClipBounds(param0: android.graphics.Rect): boolean;
			public draw(param0: android.graphics.Canvas): void;
			public getOverlay(): android.view.ViewOverlay;
			public getSolidColor(): number;
			public isLayoutRequested(): boolean;
			public layout(param0: number, param1: number, param2: number, param3: number): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public onFinishInflate(): void;
			public getResources(): android.content.res.Resources;
			public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
			public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
			public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
			public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
			public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
			public drawableStateChanged(): void;
			public drawableHotspotChanged(param0: number, param1: number): void;
			public dispatchDrawableHotspotChanged(param0: number, param1: number): void;
			public refreshDrawableState(): void;
			public getDrawableState(): native.Array<number>;
			public onCreateDrawableState(param0: number): native.Array<number>;
			public static mergeDrawableStates(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
			public jumpDrawablesToCurrentState(): void;
			public setBackgroundColor(param0: number): void;
			public setBackgroundResource(param0: number): void;
			public setBackground(param0: android.graphics.drawable.Drawable): void;
			public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
			public getBackground(): android.graphics.drawable.Drawable;
			public setBackgroundTintList(param0: android.content.res.ColorStateList): void;
			public getBackgroundTintList(): android.content.res.ColorStateList;
			public setBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
			public getBackgroundTintMode(): android.graphics.PorterDuff.Mode;
			public getForeground(): android.graphics.drawable.Drawable;
			public setForeground(param0: android.graphics.drawable.Drawable): void;
			public getForegroundGravity(): number;
			public setForegroundGravity(param0: number): void;
			public setForegroundTintList(param0: android.content.res.ColorStateList): void;
			public getForegroundTintList(): android.content.res.ColorStateList;
			public setForegroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
			public getForegroundTintMode(): android.graphics.PorterDuff.Mode;
			public onDrawForeground(param0: android.graphics.Canvas): void;
			public setPadding(param0: number, param1: number, param2: number, param3: number): void;
			public setPaddingRelative(param0: number, param1: number, param2: number, param3: number): void;
			public getPaddingTop(): number;
			public getPaddingBottom(): number;
			public getPaddingLeft(): number;
			public getPaddingStart(): number;
			public getPaddingRight(): number;
			public getPaddingEnd(): number;
			public isPaddingRelative(): boolean;
			public setSelected(param0: boolean): void;
			public dispatchSetSelected(param0: boolean): void;
			public isSelected(): boolean;
			public setActivated(param0: boolean): void;
			public dispatchSetActivated(param0: boolean): void;
			public isActivated(): boolean;
			public getViewTreeObserver(): android.view.ViewTreeObserver;
			public getRootView(): android.view.View;
			public getLocationOnScreen(param0: native.Array<number>): void;
			public getLocationInWindow(param0: native.Array<number>): void;
			public findViewById(param0: number): android.view.View;
			public findViewWithTag(param0: java.lang.Object): android.view.View;
			public setId(param0: number): void;
			public getId(): number;
			public getTag(): java.lang.Object;
			public setTag(param0: java.lang.Object): void;
			public getTag(param0: number): java.lang.Object;
			public setTag(param0: number, param1: java.lang.Object): void;
			public getBaseline(): number;
			public isInLayout(): boolean;
			public requestLayout(): void;
			public forceLayout(): void;
			public measure(param0: number, param1: number): void;
			public onMeasure(param0: number, param1: number): void;
			public setMeasuredDimension(param0: number, param1: number): void;
			public static combineMeasuredStates(param0: number, param1: number): number;
			public static resolveSize(param0: number, param1: number): number;
			public static resolveSizeAndState(param0: number, param1: number, param2: number): number;
			public static getDefaultSize(param0: number, param1: number): number;
			public getSuggestedMinimumHeight(): number;
			public getSuggestedMinimumWidth(): number;
			public getMinimumHeight(): number;
			public setMinimumHeight(param0: number): void;
			public getMinimumWidth(): number;
			public setMinimumWidth(param0: number): void;
			public getAnimation(): android.view.animation.Animation;
			public startAnimation(param0: android.view.animation.Animation): void;
			public clearAnimation(): void;
			public setAnimation(param0: android.view.animation.Animation): void;
			public onAnimationStart(): void;
			public onAnimationEnd(): void;
			public onSetAlpha(param0: number): boolean;
			public playSoundEffect(param0: number): void;
			public performHapticFeedback(param0: number): boolean;
			public performHapticFeedback(param0: number, param1: number): boolean;
			public setSystemUiVisibility(param0: number): void;
			public getSystemUiVisibility(): number;
			public getWindowSystemUiVisibility(): number;
			public onWindowSystemUiVisibilityChanged(param0: number): void;
			public dispatchWindowSystemUiVisiblityChanged(param0: number): void;
			public setOnSystemUiVisibilityChangeListener(param0: android.view.View.OnSystemUiVisibilityChangeListener): void;
			public dispatchSystemUiVisibilityChanged(param0: number): void;
			public startDrag(param0: android.content.ClipData, param1: android.view.View.DragShadowBuilder, param2: java.lang.Object, param3: number): boolean;
			public onDragEvent(param0: android.view.DragEvent): boolean;
			public dispatchDragEvent(param0: android.view.DragEvent): boolean;
			public static inflate(param0: android.content.Context, param1: number, param2: android.view.ViewGroup): android.view.View;
			public overScrollBy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean): boolean;
			public onOverScrolled(param0: number, param1: number, param2: boolean, param3: boolean): void;
			public getOverScrollMode(): number;
			public setOverScrollMode(param0: number): void;
			public setNestedScrollingEnabled(param0: boolean): void;
			public isNestedScrollingEnabled(): boolean;
			public startNestedScroll(param0: number): boolean;
			public stopNestedScroll(): void;
			public hasNestedScrollingParent(): boolean;
			public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
			public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
			public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
			public dispatchNestedPreFling(param0: number, param1: number): boolean;
			public setTextDirection(param0: number): void;
			public getTextDirection(): number;
			public canResolveTextDirection(): boolean;
			public isTextDirectionResolved(): boolean;
			public setTextAlignment(param0: number): void;
			public getTextAlignment(): number;
			public canResolveTextAlignment(): boolean;
			public isTextAlignmentResolved(): boolean;
			public static generateViewId(): number;
			public animate(): android.view.ViewPropertyAnimator;
			public setTransitionName(param0: string): void;
			public getTransitionName(): string;
			public static ACCESSIBILITY_LIVE_REGION_ASSERTIVE: number;
			public static ACCESSIBILITY_LIVE_REGION_NONE: number;
			public static ACCESSIBILITY_LIVE_REGION_POLITE: number;
			public static ALPHA: android.util.Property;
			public static DRAWING_CACHE_QUALITY_AUTO: number;
			public static DRAWING_CACHE_QUALITY_HIGH: number;
			public static DRAWING_CACHE_QUALITY_LOW: number;
			public static EMPTY_STATE_SET: native.Array<number>;
			public static ENABLED_FOCUSED_SELECTED_STATE_SET: native.Array<number>;
			public static ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static ENABLED_FOCUSED_STATE_SET: native.Array<number>;
			public static ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static ENABLED_SELECTED_STATE_SET: native.Array<number>;
			public static ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static ENABLED_STATE_SET: native.Array<number>;
			public static ENABLED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static FIND_VIEWS_WITH_CONTENT_DESCRIPTION: number;
			public static FIND_VIEWS_WITH_TEXT: number;
			public static FOCUSABLES_ALL: number;
			public static FOCUSABLES_TOUCH_MODE: number;
			public static FOCUSED_SELECTED_STATE_SET: native.Array<number>;
			public static FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static FOCUSED_STATE_SET: native.Array<number>;
			public static FOCUSED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static FOCUS_BACKWARD: number;
			public static FOCUS_DOWN: number;
			public static FOCUS_FORWARD: number;
			public static FOCUS_LEFT: number;
			public static FOCUS_RIGHT: number;
			public static FOCUS_UP: number;
			public static GONE: number;
			public static HAPTIC_FEEDBACK_ENABLED: number;
			public static IMPORTANT_FOR_ACCESSIBILITY_AUTO: number;
			public static IMPORTANT_FOR_ACCESSIBILITY_NO: number;
			public static IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS: number;
			public static IMPORTANT_FOR_ACCESSIBILITY_YES: number;
			public static INVISIBLE: number;
			public static KEEP_SCREEN_ON: number;
			public static LAYER_TYPE_HARDWARE: number;
			public static LAYER_TYPE_NONE: number;
			public static LAYER_TYPE_SOFTWARE: number;
			public static LAYOUT_DIRECTION_INHERIT: number;
			public static LAYOUT_DIRECTION_LOCALE: number;
			public static LAYOUT_DIRECTION_LTR: number;
			public static LAYOUT_DIRECTION_RTL: number;
			public static MEASURED_HEIGHT_STATE_SHIFT: number;
			public static MEASURED_SIZE_MASK: number;
			public static MEASURED_STATE_MASK: number;
			public static MEASURED_STATE_TOO_SMALL: number;
			public static NO_ID: number;
			public static OVER_SCROLL_ALWAYS: number;
			public static OVER_SCROLL_IF_CONTENT_SCROLLS: number;
			public static OVER_SCROLL_NEVER: number;
			public static PRESSED_ENABLED_FOCUSED_SELECTED_STATE_SET: native.Array<number>;
			public static PRESSED_ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static PRESSED_ENABLED_FOCUSED_STATE_SET: native.Array<number>;
			public static PRESSED_ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static PRESSED_ENABLED_SELECTED_STATE_SET: native.Array<number>;
			public static PRESSED_ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static PRESSED_ENABLED_STATE_SET: native.Array<number>;
			public static PRESSED_ENABLED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static PRESSED_FOCUSED_SELECTED_STATE_SET: native.Array<number>;
			public static PRESSED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static PRESSED_FOCUSED_STATE_SET: native.Array<number>;
			public static PRESSED_FOCUSED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static PRESSED_SELECTED_STATE_SET: native.Array<number>;
			public static PRESSED_SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static PRESSED_STATE_SET: native.Array<number>;
			public static PRESSED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static ROTATION: android.util.Property;
			public static ROTATION_X: android.util.Property;
			public static ROTATION_Y: android.util.Property;
			public static SCALE_X: android.util.Property;
			public static SCALE_Y: android.util.Property;
			public static SCREEN_STATE_OFF: number;
			public static SCREEN_STATE_ON: number;
			public static SCROLLBARS_INSIDE_INSET: number;
			public static SCROLLBARS_INSIDE_OVERLAY: number;
			public static SCROLLBARS_OUTSIDE_INSET: number;
			public static SCROLLBARS_OUTSIDE_OVERLAY: number;
			public static SCROLLBAR_POSITION_DEFAULT: number;
			public static SCROLLBAR_POSITION_LEFT: number;
			public static SCROLLBAR_POSITION_RIGHT: number;
			public static SCROLL_AXIS_HORIZONTAL: number;
			public static SCROLL_AXIS_NONE: number;
			public static SCROLL_AXIS_VERTICAL: number;
			public static SCROLL_INDICATOR_BOTTOM: number;
			public static SCROLL_INDICATOR_END: number;
			public static SCROLL_INDICATOR_LEFT: number;
			public static SCROLL_INDICATOR_RIGHT: number;
			public static SCROLL_INDICATOR_START: number;
			public static SCROLL_INDICATOR_TOP: number;
			public static SELECTED_STATE_SET: native.Array<number>;
			public static SELECTED_WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static SOUND_EFFECTS_ENABLED: number;
			public static STATUS_BAR_HIDDEN: number;
			public static STATUS_BAR_VISIBLE: number;
			public static SYSTEM_UI_FLAG_FULLSCREEN: number;
			public static SYSTEM_UI_FLAG_HIDE_NAVIGATION: number;
			public static SYSTEM_UI_FLAG_IMMERSIVE: number;
			public static SYSTEM_UI_FLAG_IMMERSIVE_STICKY: number;
			public static SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN: number;
			public static SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION: number;
			public static SYSTEM_UI_FLAG_LAYOUT_STABLE: number;
			public static SYSTEM_UI_FLAG_LIGHT_STATUS_BAR: number;
			public static SYSTEM_UI_FLAG_LOW_PROFILE: number;
			public static SYSTEM_UI_FLAG_VISIBLE: number;
			public static SYSTEM_UI_LAYOUT_FLAGS: number;
			public static TEXT_ALIGNMENT_CENTER: number;
			public static TEXT_ALIGNMENT_GRAVITY: number;
			public static TEXT_ALIGNMENT_INHERIT: number;
			public static TEXT_ALIGNMENT_TEXT_END: number;
			public static TEXT_ALIGNMENT_TEXT_START: number;
			public static TEXT_ALIGNMENT_VIEW_END: number;
			public static TEXT_ALIGNMENT_VIEW_START: number;
			public static TEXT_DIRECTION_ANY_RTL: number;
			public static TEXT_DIRECTION_FIRST_STRONG: number;
			public static TEXT_DIRECTION_FIRST_STRONG_LTR: number;
			public static TEXT_DIRECTION_FIRST_STRONG_RTL: number;
			public static TEXT_DIRECTION_INHERIT: number;
			public static TEXT_DIRECTION_LOCALE: number;
			public static TEXT_DIRECTION_LTR: number;
			public static TEXT_DIRECTION_RTL: number;
			public static TRANSLATION_X: android.util.Property;
			public static TRANSLATION_Y: android.util.Property;
			public static TRANSLATION_Z: android.util.Property;
			public static VIEW_LOG_TAG: string;
			public static VISIBLE: number;
			public static WINDOW_FOCUSED_STATE_SET: native.Array<number>;
			public static X: android.util.Property;
			public static Y: android.util.Property;
			public static Z: android.util.Property;
		}
		export module View {
			export class AccessibilityDelegate {
				public constructor();
				public sendAccessibilityEvent(param0: android.view.View, param1: number): void;
				public performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
				public dispatchPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
				public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
				public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: android.view.accessibility.AccessibilityNodeInfo): void;
				public onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
				public getAccessibilityNodeProvider(param0: android.view.View): android.view.accessibility.AccessibilityNodeProvider;
			}
			export class BaseSavedState {
				public constructor(param0: android.os.Parcelable);
				public constructor();
				public constructor(param0: android.os.Parcel);
				public constructor(param0: android.os.Parcelable);
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
			export class DragShadowBuilder {
				public constructor();
				public constructor(param0: android.view.View);
				public constructor();
				public getView(): android.view.View;
				public onProvideShadowMetrics(param0: android.graphics.Point, param1: android.graphics.Point): void;
				public onDrawShadow(param0: android.graphics.Canvas): void;
			}
			export class MeasureSpec {
				public constructor();
				public static makeMeasureSpec(param0: number, param1: number): number;
				public static getMode(param0: number): number;
				public static getSize(param0: number): number;
				public toString(): string;
				public static toString(param0: number): string;
				public static AT_MOST: number;
				public static EXACTLY: number;
				public static UNSPECIFIED: number;
			}
			export class OnApplyWindowInsetsListener {
				public onApplyWindowInsets(param0: android.view.View, param1: android.view.WindowInsets): android.view.WindowInsets;
			}
			export class OnAttachStateChangeListener {
				public onViewAttachedToWindow(param0: android.view.View): void;
				public onViewDetachedFromWindow(param0: android.view.View): void;
			}
			export class OnClickListener {
				public onClick(param0: android.view.View): void;
			}
			export class OnContextClickListener {
				public onContextClick(param0: android.view.View): boolean;
			}
			export class OnCreateContextMenuListener {
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			}
			export class OnDragListener {
				public onDrag(param0: android.view.View, param1: android.view.DragEvent): boolean;
			}
			export class OnFocusChangeListener {
				public onFocusChange(param0: android.view.View, param1: boolean): void;
			}
			export class OnGenericMotionListener {
				public onGenericMotion(param0: android.view.View, param1: android.view.MotionEvent): boolean;
			}
			export class OnHoverListener {
				public onHover(param0: android.view.View, param1: android.view.MotionEvent): boolean;
			}
			export class OnKeyListener {
				public onKey(param0: android.view.View, param1: number, param2: android.view.KeyEvent): boolean;
			}
			export class OnLayoutChangeListener {
				public onLayoutChange(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
			}
			export class OnLongClickListener {
				public onLongClick(param0: android.view.View): boolean;
			}
			export class OnScrollChangeListener {
				public onScrollChange(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
			}
			export class OnSystemUiVisibilityChangeListener {
				public onSystemUiVisibilityChange(param0: number): void;
			}
			export class OnTouchListener {
				public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
			}
		}
	}
}
