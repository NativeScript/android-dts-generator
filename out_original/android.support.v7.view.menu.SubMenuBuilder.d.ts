/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuBuilder.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuItemImpl.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class SubMenuBuilder {
						public constructor(param0: android.content.Context);
						public constructor();
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.support.v7.view.menu.MenuItemImpl);
						public setQwertyMode(param0: boolean): void;
						public isQwertyMode(): boolean;
						public setShortcutsVisible(param0: boolean): void;
						public isShortcutsVisible(): boolean;
						public getParentMenu(): android.view.Menu;
						public getItem(param0: number): android.view.MenuItem;
						public getItem(): android.view.MenuItem;
						public setCallback(param0: android.support.v7.view.menu.MenuBuilder.Callback): void;
						public getRootMenu(): android.support.v7.view.menu.MenuBuilder;
						public setIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
						public setIcon(param0: number): android.view.SubMenu;
						public setHeaderIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
						public setHeaderIcon(param0: number): android.view.SubMenu;
						public setHeaderTitle(param0: string): android.view.SubMenu;
						public setHeaderTitle(param0: number): android.view.SubMenu;
						public setHeaderView(param0: android.view.View): android.view.SubMenu;
						public expandItemActionView(param0: android.support.v7.view.menu.MenuItemImpl): boolean;
						public collapseItemActionView(param0: android.support.v7.view.menu.MenuItemImpl): boolean;
						public getActionViewStatesKey(): string;
					}
				}
			}
		}
	}
}
