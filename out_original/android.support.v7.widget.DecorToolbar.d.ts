/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./android.support.v7.widget.ScrollingTabContainerView.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.SpinnerAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class DecorToolbar {
					public getViewGroup(): android.view.ViewGroup;
					public getContext(): android.content.Context;
					public hasExpandedActionView(): boolean;
					public collapseActionView(): void;
					public setWindowCallback(param0: android.view.Window.Callback): void;
					public setWindowTitle(param0: string): void;
					public getTitle(): string;
					public setTitle(param0: string): void;
					public getSubtitle(): string;
					public setSubtitle(param0: string): void;
					public initProgress(): void;
					public initIndeterminateProgress(): void;
					public hasIcon(): boolean;
					public hasLogo(): boolean;
					public setIcon(param0: number): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public setLogo(param0: number): void;
					public setLogo(param0: android.graphics.drawable.Drawable): void;
					public canShowOverflowMenu(): boolean;
					public isOverflowMenuShowing(): boolean;
					public isOverflowMenuShowPending(): boolean;
					public showOverflowMenu(): boolean;
					public hideOverflowMenu(): boolean;
					public setMenuPrepared(): void;
					public setMenu(param0: android.view.Menu, param1: android.support.v7.view.menu.MenuPresenter.Callback): void;
					public dismissPopupMenus(): void;
					public getDisplayOptions(): number;
					public setDisplayOptions(param0: number): void;
					public setEmbeddedTabView(param0: android.support.v7.widget.ScrollingTabContainerView): void;
					public hasEmbeddedTabs(): boolean;
					public isTitleTruncated(): boolean;
					public setCollapsible(param0: boolean): void;
					public setHomeButtonEnabled(param0: boolean): void;
					public getNavigationMode(): number;
					public setNavigationMode(param0: number): void;
					public setDropdownParams(param0: android.widget.SpinnerAdapter, param1: android.widget.AdapterView.OnItemSelectedListener): void;
					public setDropdownSelectedPosition(param0: number): void;
					public getDropdownSelectedPosition(): number;
					public getDropdownItemCount(): number;
					public setCustomView(param0: android.view.View): void;
					public getCustomView(): android.view.View;
					public animateToVisibility(param0: number): void;
					public setupAnimatorToVisibility(param0: number, param1: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public setNavigationIcon(param0: android.graphics.drawable.Drawable): void;
					public setNavigationIcon(param0: number): void;
					public setNavigationContentDescription(param0: string): void;
					public setNavigationContentDescription(param0: number): void;
					public setDefaultNavigationContentDescription(param0: number): void;
					public setDefaultNavigationIcon(param0: android.graphics.drawable.Drawable): void;
					public saveHierarchyState(param0: android.util.SparseArray): void;
					public restoreHierarchyState(param0: android.util.SparseArray): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public getHeight(): number;
					public setVisibility(param0: number): void;
					public getVisibility(): number;
					public setMenuCallbacks(param0: android.support.v7.view.menu.MenuPresenter.Callback, param1: android.support.v7.view.menu.MenuBuilder.Callback): void;
					public getMenu(): android.view.Menu;
				}
			}
		}
	}
}
