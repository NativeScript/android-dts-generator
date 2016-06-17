/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuBuilder.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuItemImpl.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuView.d.ts" />
/// <reference path="./android.support.v7.view.menu.SubMenuBuilder.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class BaseMenuPresenter {
						public constructor();
						public constructor(param0: android.content.Context, param1: number, param2: number);
						public initForMenu(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder): void;
						public getMenuView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView;
						public updateMenuView(param0: boolean): void;
						public addItemView(param0: android.view.View, param1: number): void;
						public filterLeftoverView(param0: android.view.ViewGroup, param1: number): boolean;
						public setCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public getCallback(): android.support.v7.view.menu.MenuPresenter.Callback;
						public createItemView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView.ItemView;
						public getItemView(param0: android.support.v7.view.menu.MenuItemImpl, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
						public bindItemView(param0: android.support.v7.view.menu.MenuItemImpl, param1: android.support.v7.view.menu.MenuView.ItemView): void;
						public shouldIncludeItem(param0: number, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
						public flagActionItems(): boolean;
						public expandItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public collapseItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public getId(): number;
						public setId(param0: number): void;
						public mSystemContext: android.content.Context;
						public mContext: android.content.Context;
						public mMenu: android.support.v7.view.menu.MenuBuilder;
						public mSystemInflater: android.view.LayoutInflater;
						public mInflater: android.view.LayoutInflater;
						public mMenuView: android.support.v7.view.menu.MenuView;
					}
				}
			}
		}
	}
}
