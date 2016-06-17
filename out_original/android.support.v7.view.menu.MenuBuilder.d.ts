/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuItemImpl.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuPresenter.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuBuilder {
						public constructor();
						public constructor(param0: android.content.Context);
						public setDefaultShowAsAction(param0: number): android.support.v7.view.menu.MenuBuilder;
						public addMenuPresenter(param0: android.support.v7.view.menu.MenuPresenter): void;
						public addMenuPresenter(param0: android.support.v7.view.menu.MenuPresenter, param1: android.content.Context): void;
						public removeMenuPresenter(param0: android.support.v7.view.menu.MenuPresenter): void;
						public savePresenterStates(param0: android.os.Bundle): void;
						public restorePresenterStates(param0: android.os.Bundle): void;
						public saveActionViewStates(param0: android.os.Bundle): void;
						public restoreActionViewStates(param0: android.os.Bundle): void;
						public getActionViewStatesKey(): string;
						public setCallback(param0: android.support.v7.view.menu.MenuBuilder.Callback): void;
						public addInternal(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
						public add(param0: string): android.view.MenuItem;
						public add(param0: number): android.view.MenuItem;
						public add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
						public add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
						public addSubMenu(param0: string): android.view.SubMenu;
						public addSubMenu(param0: number): android.view.SubMenu;
						public addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
						public addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
						public addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: native.Array<android.content.Intent>, param5: android.content.Intent, param6: number, param7: native.Array<android.view.MenuItem>): number;
						public removeItem(param0: number): void;
						public removeGroup(param0: number): void;
						public removeItemAt(param0: number): void;
						public clearAll(): void;
						public clear(): void;
						public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
						public setGroupVisible(param0: number, param1: boolean): void;
						public setGroupEnabled(param0: number, param1: boolean): void;
						public hasVisibleItems(): boolean;
						public findItem(param0: number): android.view.MenuItem;
						public findItemIndex(param0: number): number;
						public findGroupIndex(param0: number): number;
						public findGroupIndex(param0: number, param1: number): number;
						public size(): number;
						public getItem(param0: number): android.view.MenuItem;
						public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
						public setQwertyMode(param0: boolean): void;
						public setShortcutsVisible(param0: boolean): void;
						public isShortcutsVisible(): boolean;
						public getContext(): android.content.Context;
						public changeMenuMode(): void;
						public performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
						public performIdentifierAction(param0: number, param1: number): boolean;
						public performItemAction(param0: android.view.MenuItem, param1: number): boolean;
						public performItemAction(param0: android.view.MenuItem, param1: android.support.v7.view.menu.MenuPresenter, param2: number): boolean;
						public close(param0: boolean): void;
						public close(): void;
						public onItemsChanged(param0: boolean): void;
						public stopDispatchingItemsChanged(): void;
						public startDispatchingItemsChanged(): void;
						public getVisibleItems(): java.util.ArrayList;
						public flagActionItems(): void;
						public getActionItems(): java.util.ArrayList;
						public getNonActionItems(): java.util.ArrayList;
						public clearHeader(): void;
						public setHeaderTitleInt(param0: string): android.support.v7.view.menu.MenuBuilder;
						public setHeaderTitleInt(param0: number): android.support.v7.view.menu.MenuBuilder;
						public setHeaderIconInt(param0: android.graphics.drawable.Drawable): android.support.v7.view.menu.MenuBuilder;
						public setHeaderIconInt(param0: number): android.support.v7.view.menu.MenuBuilder;
						public setHeaderViewInt(param0: android.view.View): android.support.v7.view.menu.MenuBuilder;
						public getHeaderTitle(): string;
						public getHeaderIcon(): android.graphics.drawable.Drawable;
						public getHeaderView(): android.view.View;
						public getRootMenu(): android.support.v7.view.menu.MenuBuilder;
						public setCurrentMenuInfo(param0: android.view.ContextMenu.ContextMenuInfo): void;
						public expandItemActionView(param0: android.support.v7.view.menu.MenuItemImpl): boolean;
						public collapseItemActionView(param0: android.support.v7.view.menu.MenuItemImpl): boolean;
						public getExpandedItem(): android.support.v7.view.menu.MenuItemImpl;
						public setOverrideVisibleItems(param0: boolean): void;
					}
					export module MenuBuilder {
						export class Callback {
							public onMenuItemSelected(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
							public onMenuModeChange(param0: android.support.v7.view.menu.MenuBuilder): void;
						}
						export class ItemInvoker {
							public invokeItem(param0: android.support.v7.view.menu.MenuItemImpl): boolean;
						}
					}
				}
			}
		}
	}
}
