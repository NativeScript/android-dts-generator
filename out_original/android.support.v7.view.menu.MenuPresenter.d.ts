/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuBuilder.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuItemImpl.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuView.d.ts" />
/// <reference path="./android.support.v7.view.menu.SubMenuBuilder.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuPresenter {
						public initForMenu(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder): void;
						public getMenuView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView;
						public updateMenuView(param0: boolean): void;
						public setCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public flagActionItems(): boolean;
						public expandItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public collapseItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public getId(): number;
						public onSaveInstanceState(): android.os.Parcelable;
						public onRestoreInstanceState(param0: android.os.Parcelable): void;
					}
					export module MenuPresenter {
						export class Callback {
							public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
							public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
						}
					}
				}
			}
		}
	}
}
