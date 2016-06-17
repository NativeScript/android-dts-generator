/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />

declare module android {
	export module view {
		export class ViewParent {
			public requestLayout(): void;
			public isLayoutRequested(): boolean;
			public requestTransparentRegion(param0: android.view.View): void;
			public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
			public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
			public getParent(): android.view.ViewParent;
			public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
			public recomputeViewAttributes(param0: android.view.View): void;
			public clearChildFocus(param0: android.view.View): void;
			public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
			public focusSearch(param0: android.view.View, param1: number): android.view.View;
			public bringChildToFront(param0: android.view.View): void;
			public focusableViewAvailable(param0: android.view.View): void;
			public showContextMenuForChild(param0: android.view.View): boolean;
			public createContextMenu(param0: android.view.ContextMenu): void;
			public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
			public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
			public childDrawableStateChanged(param0: android.view.View): void;
			public requestDisallowInterceptTouchEvent(param0: boolean): void;
			public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
			public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
			public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
			public requestFitSystemWindows(): void;
			public getParentForAccessibility(): android.view.ViewParent;
			public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
			public canResolveLayoutDirection(): boolean;
			public isLayoutDirectionResolved(): boolean;
			public getLayoutDirection(): number;
			public canResolveTextDirection(): boolean;
			public isTextDirectionResolved(): boolean;
			public getTextDirection(): number;
			public canResolveTextAlignment(): boolean;
			public isTextAlignmentResolved(): boolean;
			public getTextAlignment(): number;
			public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
			public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
			public onStopNestedScroll(param0: android.view.View): void;
			public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
			public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
			public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
			public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
			public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
		}
	}
}
