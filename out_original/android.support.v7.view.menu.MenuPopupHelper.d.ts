/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuBuilder.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuItemImpl.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuView.d.ts" />
/// <reference path="./android.support.v7.view.menu.SubMenuBuilder.d.ts" />
/// <reference path="./android.support.v7.widget.ListPopupWindow.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuPopupHelper {
						public constructor();
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder);
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View);
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View, param3: boolean, param4: number);
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View, param3: boolean, param4: number, param5: number);
						public setAnchorView(param0: android.view.View): void;
						public setForceShowIcon(param0: boolean): void;
						public setGravity(param0: number): void;
						public getGravity(): number;
						public show(): void;
						public getPopup(): android.support.v7.widget.ListPopupWindow;
						public tryShow(): boolean;
						public dismiss(): void;
						public onDismiss(): void;
						public isShowing(): boolean;
						public onItemClick(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;
						public onKey(param0: android.view.View, param1: number, param2: android.view.KeyEvent): boolean;
						public onGlobalLayout(): void;
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
					export module MenuPopupHelper {
						export class MenuAdapter {
							public constructor();
							public constructor(param0: android.support.v7.view.menu.MenuPopupHelper, param1: android.support.v7.view.menu.MenuBuilder);
							public getCount(): number;
							public getItem(param0: number): android.support.v7.view.menu.MenuItemImpl;
							public getItemId(param0: number): number;
							public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
							public notifyDataSetChanged(): void;
						}
					}
				}
			}
		}
	}
}
