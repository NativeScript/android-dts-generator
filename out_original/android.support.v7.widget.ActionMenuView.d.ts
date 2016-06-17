/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuBuilder.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuItemImpl.d.ts" />
/// <reference path="./android.support.v7.widget.ActionMenuPresenter.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActionMenuView {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setPopupTheme(param0: number): void;
					public getPopupTheme(): number;
					public setPresenter(param0: android.support.v7.widget.ActionMenuPresenter): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public setOnMenuItemClickListener(param0: android.support.v7.widget.ActionMenuView.OnMenuItemClickListener): void;
					public onMeasure(param0: number, param1: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public onDetachedFromWindow(): void;
					public setOverflowIcon(param0: android.graphics.drawable.Drawable): void;
					public getOverflowIcon(): android.graphics.drawable.Drawable;
					public isOverflowReserved(): boolean;
					public setOverflowReserved(param0: boolean): void;
					public generateDefaultLayoutParams(): android.support.v7.widget.LinearLayoutCompat.LayoutParams;
					public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
					public generateDefaultLayoutParams(): android.support.v7.widget.ActionMenuView.LayoutParams;
					public generateLayoutParams(param0: android.util.AttributeSet): android.support.v7.widget.LinearLayoutCompat.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.support.v7.widget.LinearLayoutCompat.LayoutParams;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.util.AttributeSet): android.support.v7.widget.ActionMenuView.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.support.v7.widget.ActionMenuView.LayoutParams;
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public generateOverflowButtonLayoutParams(): android.support.v7.widget.ActionMenuView.LayoutParams;
					public invokeItem(param0: android.support.v7.view.menu.MenuItemImpl): boolean;
					public getWindowAnimations(): number;
					public initialize(param0: android.support.v7.view.menu.MenuBuilder): void;
					public getMenu(): android.view.Menu;
					public setMenuCallbacks(param0: android.support.v7.view.menu.MenuPresenter.Callback, param1: android.support.v7.view.menu.MenuBuilder.Callback): void;
					public peekMenu(): android.support.v7.view.menu.MenuBuilder;
					public showOverflowMenu(): boolean;
					public hideOverflowMenu(): boolean;
					public isOverflowMenuShowing(): boolean;
					public isOverflowMenuShowPending(): boolean;
					public dismissPopupMenus(): void;
					public hasSupportDividerBeforeChildAt(param0: number): boolean;
					public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
					public setExpandedActionViewsExclusive(param0: boolean): void;
				}
				export module ActionMenuView {
					export class ActionMenuChildView {
						public needsDividerBefore(): boolean;
						public needsDividerAfter(): boolean;
					}
					export class ActionMenuPresenterCallback {
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
					}
					export class LayoutParams {
						public constructor(param0: number, param1: number);
						public constructor(param0: number, param1: number, param2: number);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.support.v7.widget.LinearLayoutCompat.LayoutParams);
						public constructor();
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: android.support.v7.widget.ActionMenuView.LayoutParams);
						public constructor(param0: number, param1: number);
						public isOverflowButton: boolean;
						public cellsUsed: number;
						public extraPixels: number;
						public expandable: boolean;
						public preventEdgeOffset: boolean;
					}
					export class MenuBuilderCallback {
						public onMenuItemSelected(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
						public onMenuModeChange(param0: android.support.v7.view.menu.MenuBuilder): void;
					}
					export class OnMenuItemClickListener {
						public onMenuItemClick(param0: android.view.MenuItem): boolean;
					}
				}
			}
		}
	}
}
