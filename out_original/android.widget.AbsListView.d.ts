/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.SparseBooleanArray.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./android.view.inputmethod.EditorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module widget {
		export class AbsListView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setOverScrollMode(param0: number): void;
			public setAdapter(param0: android.widget.Adapter): void;
			public setAdapter(param0: android.widget.ListAdapter): void;
			public getCheckedItemCount(): number;
			public isItemChecked(param0: number): boolean;
			public getCheckedItemPosition(): number;
			public getCheckedItemPositions(): android.util.SparseBooleanArray;
			public getCheckedItemIds(): native.Array<number>;
			public clearChoices(): void;
			public setItemChecked(param0: number, param1: boolean): void;
			public performItemClick(param0: android.view.View, param1: number, param2: number): boolean;
			public getChoiceMode(): number;
			public setChoiceMode(param0: number): void;
			public setMultiChoiceModeListener(param0: android.widget.AbsListView.MultiChoiceModeListener): void;
			public setFastScrollEnabled(param0: boolean): void;
			public setFastScrollStyle(param0: number): void;
			public setFastScrollAlwaysVisible(param0: boolean): void;
			public isFastScrollAlwaysVisible(): boolean;
			public getVerticalScrollbarWidth(): number;
			public isFastScrollEnabled(): boolean;
			public setVerticalScrollbarPosition(param0: number): void;
			public setScrollBarStyle(param0: number): void;
			public setSmoothScrollbarEnabled(param0: boolean): void;
			public isSmoothScrollbarEnabled(): boolean;
			public setOnScrollListener(param0: android.widget.AbsListView.OnScrollListener): void;
			public getAccessibilityClassName(): string;
			public isScrollingCacheEnabled(): boolean;
			public setScrollingCacheEnabled(param0: boolean): void;
			public setTextFilterEnabled(param0: boolean): void;
			public isTextFilterEnabled(): boolean;
			public getFocusedRect(param0: android.graphics.Rect): void;
			public isStackFromBottom(): boolean;
			public setStackFromBottom(param0: boolean): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
			public setFilterText(param0: string): void;
			public getTextFilter(): string;
			public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;
			public requestLayout(): void;
			public computeVerticalScrollExtent(): number;
			public computeVerticalScrollOffset(): number;
			public computeVerticalScrollRange(): number;
			public getTopFadingEdgeStrength(): number;
			public getBottomFadingEdgeStrength(): number;
			public onMeasure(param0: number, param1: number): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public layoutChildren(): void;
			public getSelectedView(): android.view.View;
			public getListPaddingTop(): number;
			public getListPaddingBottom(): number;
			public getListPaddingLeft(): number;
			public getListPaddingRight(): number;
			public onInitializeAccessibilityNodeInfoForItem(param0: android.view.View, param1: number, param2: android.view.accessibility.AccessibilityNodeInfo): void;
			public dispatchDraw(param0: android.graphics.Canvas): void;
			public isPaddingOffsetRequired(): boolean;
			public getLeftPaddingOffset(): number;
			public getTopPaddingOffset(): number;
			public getRightPaddingOffset(): number;
			public getBottomPaddingOffset(): number;
			public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
			public setDrawSelectorOnTop(param0: boolean): void;
			public setSelector(param0: number): void;
			public setSelector(param0: android.graphics.drawable.Drawable): void;
			public getSelector(): android.graphics.drawable.Drawable;
			public setScrollIndicators(param0: number): void;
			public setScrollIndicators(param0: number, param1: number): void;
			public setScrollIndicators(param0: android.view.View, param1: android.view.View): void;
			public drawableStateChanged(): void;
			public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
			public jumpDrawablesToCurrentState(): void;
			public onAttachedToWindow(): void;
			public onDetachedFromWindow(): void;
			public onWindowFocusChanged(param0: boolean): void;
			public onRtlPropertiesChanged(param0: number): void;
			public onCancelPendingInputEvents(): void;
			public getContextMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
			public showContextMenuForChild(param0: android.view.View): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public dispatchSetPressed(param0: boolean): void;
			public dispatchDrawableHotspotChanged(param0: number, param1: number): void;
			public pointToPosition(param0: number, param1: number): number;
			public pointToRowId(param0: number, param1: number): number;
			public onTouchModeChanged(param0: boolean): void;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public onOverScrolled(param0: number, param1: number, param2: boolean, param3: boolean): void;
			public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public fling(param0: number): void;
			public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
			public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
			public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
			public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
			public draw(param0: android.graphics.Canvas): void;
			public requestDisallowInterceptTouchEvent(param0: boolean): void;
			public onInterceptHoverEvent(param0: android.view.MotionEvent): boolean;
			public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
			public addTouchables(param0: java.util.ArrayList): void;
			public setFriction(param0: number): void;
			public setVelocityScale(param0: number): void;
			public smoothScrollToPosition(param0: number): void;
			public smoothScrollToPositionFromTop(param0: number, param1: number, param2: number): void;
			public smoothScrollToPositionFromTop(param0: number, param1: number): void;
			public smoothScrollToPosition(param0: number, param1: number): void;
			public smoothScrollBy(param0: number, param1: number): void;
			public scrollListBy(param0: number): void;
			public canScrollList(param0: number): boolean;
			public invalidateViews(): void;
			public handleDataChanged(): void;
			public onDisplayHint(param0: number): void;
			public isInFilterMode(): boolean;
			public onCreateInputConnection(param0: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
			public checkInputConnectionProxy(param0: android.view.View): boolean;
			public clearTextFilter(): void;
			public hasTextFilter(): boolean;
			public onGlobalLayout(): void;
			public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
			public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
			public afterTextChanged(param0: android.text.Editable): void;
			public onFilterComplete(param0: number): void;
			public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.widget.AbsListView.LayoutParams;
			public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
			public setTranscriptMode(param0: number): void;
			public getTranscriptMode(): number;
			public getSolidColor(): number;
			public setCacheColorHint(param0: number): void;
			public getCacheColorHint(): number;
			public reclaimViews(param0: java.util.List): void;
			public setRemoteViewsAdapter(param0: android.content.Intent): void;
			public deferNotifyDataSetChanged(): void;
			public onRemoteAdapterConnected(): boolean;
			public onRemoteAdapterDisconnected(): void;
			public setRecyclerListener(param0: android.widget.AbsListView.RecyclerListener): void;
			public setSelectionFromTop(param0: number, param1: number): void;
			public static CHOICE_MODE_MULTIPLE: number;
			public static CHOICE_MODE_MULTIPLE_MODAL: number;
			public static CHOICE_MODE_NONE: number;
			public static CHOICE_MODE_SINGLE: number;
			public static TRANSCRIPT_MODE_ALWAYS_SCROLL: number;
			public static TRANSCRIPT_MODE_DISABLED: number;
			public static TRANSCRIPT_MODE_NORMAL: number;
		}
		export module AbsListView {
			export class LayoutParams {
				public constructor(param0: number, param1: number);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public constructor();
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
			}
			export class MultiChoiceModeListener {
				public onItemCheckedStateChanged(param0: android.view.ActionMode, param1: number, param2: number, param3: boolean): void;
			}
			export class OnScrollListener {
				public onScrollStateChanged(param0: android.widget.AbsListView, param1: number): void;
				public onScroll(param0: android.widget.AbsListView, param1: number, param2: number, param3: number): void;
				public static SCROLL_STATE_FLING: number;
				public static SCROLL_STATE_IDLE: number;
				public static SCROLL_STATE_TOUCH_SCROLL: number;
			}
			export class RecyclerListener {
				public onMovedToScrapHeap(param0: android.view.View): void;
			}
			export class SelectionBoundsAdjuster {
				public adjustListItemSelectionBounds(param0: android.graphics.Rect): void;
			}
		}
	}
}
