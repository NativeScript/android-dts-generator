/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActionBarOverlayLayout {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public onDetachedFromWindow(): void;
					public setActionBarVisibilityCallback(param0: android.support.v7.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback): void;
					public setOverlayMode(param0: boolean): void;
					public isInOverlayMode(): boolean;
					public setHasNonEmbeddedTabs(param0: boolean): void;
					public setShowingForActionMode(param0: boolean): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public onWindowSystemUiVisibilityChanged(param0: number): void;
					public onWindowVisibilityChanged(param0: number): void;
					public fitSystemWindows(param0: android.graphics.Rect): boolean;
					public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
					public generateDefaultLayoutParams(): android.support.v7.widget.ActionBarOverlayLayout.LayoutParams;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.util.AttributeSet): android.support.v7.widget.ActionBarOverlayLayout.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public onMeasure(param0: number, param1: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public draw(param0: android.graphics.Canvas): void;
					public shouldDelayChildPressedState(): boolean;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public getNestedScrollAxes(): number;
					public setHideOnContentScrollEnabled(param0: boolean): void;
					public isHideOnContentScrollEnabled(): boolean;
					public getActionBarHideOffset(): number;
					public setActionBarHideOffset(param0: number): void;
					public setWindowCallback(param0: android.view.Window.Callback): void;
					public setWindowTitle(param0: string): void;
					public getTitle(): string;
					public initFeature(param0: number): void;
					public setUiOptions(param0: number): void;
					public hasIcon(): boolean;
					public hasLogo(): boolean;
					public setIcon(param0: number): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public setLogo(param0: number): void;
					public canShowOverflowMenu(): boolean;
					public isOverflowMenuShowing(): boolean;
					public isOverflowMenuShowPending(): boolean;
					public showOverflowMenu(): boolean;
					public hideOverflowMenu(): boolean;
					public setMenuPrepared(): void;
					public setMenu(param0: android.view.Menu, param1: android.support.v7.view.menu.MenuPresenter.Callback): void;
					public saveToolbarHierarchyState(param0: android.util.SparseArray): void;
					public restoreToolbarHierarchyState(param0: android.util.SparseArray): void;
					public dismissPopups(): void;
				}
				export module ActionBarOverlayLayout {
					export class ActionBarVisibilityCallback {
						public onWindowVisibilityChanged(param0: number): void;
						public showForSystem(): void;
						public hideForSystem(): void;
						public enableContentAnimations(param0: boolean): void;
						public onContentScrollStarted(): void;
						public onContentScrollStopped(): void;
					}
					export class LayoutParams {
						public constructor(param0: number, param1: number);
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor();
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: number, param1: number);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
					}
				}
			}
		}
	}
}
