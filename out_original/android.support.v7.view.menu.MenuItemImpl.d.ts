/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v4.internal.view.SupportMenuItem.d.ts" />
/// <reference path="./android.support.v4.view.ActionProvider.d.ts" />
/// <reference path="./android.support.v7.view.menu.SubMenuBuilder.d.ts" />
/// <reference path="./android.view.ActionProvider.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuItemImpl {
						public invoke(): boolean;
						public isEnabled(): boolean;
						public setEnabled(param0: boolean): android.view.MenuItem;
						public getGroupId(): number;
						public getItemId(): number;
						public getOrder(): number;
						public getOrdering(): number;
						public getIntent(): android.content.Intent;
						public setIntent(param0: android.content.Intent): android.view.MenuItem;
						public setCallback(param0: java.lang.Runnable): android.view.MenuItem;
						public getAlphabeticShortcut(): string;
						public setAlphabeticShortcut(param0: string): android.view.MenuItem;
						public getNumericShortcut(): string;
						public setNumericShortcut(param0: string): android.view.MenuItem;
						public setShortcut(param0: string, param1: string): android.view.MenuItem;
						public getSubMenu(): android.view.SubMenu;
						public hasSubMenu(): boolean;
						public setSubMenu(param0: android.support.v7.view.menu.SubMenuBuilder): void;
						public getTitle(): string;
						public setTitle(param0: string): android.view.MenuItem;
						public setTitle(param0: number): android.view.MenuItem;
						public getTitleCondensed(): string;
						public setTitleCondensed(param0: string): android.view.MenuItem;
						public getIcon(): android.graphics.drawable.Drawable;
						public setIcon(param0: android.graphics.drawable.Drawable): android.view.MenuItem;
						public setIcon(param0: number): android.view.MenuItem;
						public isCheckable(): boolean;
						public setCheckable(param0: boolean): android.view.MenuItem;
						public setExclusiveCheckable(param0: boolean): void;
						public isExclusiveCheckable(): boolean;
						public isChecked(): boolean;
						public setChecked(param0: boolean): android.view.MenuItem;
						public isVisible(): boolean;
						public setVisible(param0: boolean): android.view.MenuItem;
						public setOnMenuItemClickListener(param0: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
						public toString(): string;
						public getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
						public actionFormatChanged(): void;
						public shouldShowIcon(): boolean;
						public isActionButton(): boolean;
						public requestsActionButton(): boolean;
						public requiresActionButton(): boolean;
						public setIsActionButton(param0: boolean): void;
						public showsTextAsAction(): boolean;
						public setShowAsAction(param0: number): void;
						public setActionView(param0: android.view.View): android.support.v4.internal.view.SupportMenuItem;
						public setActionView(param0: number): android.support.v4.internal.view.SupportMenuItem;
						public getActionView(): android.view.View;
						public setActionProvider(param0: android.view.ActionProvider): android.view.MenuItem;
						public getActionProvider(): android.view.ActionProvider;
						public getSupportActionProvider(): android.support.v4.view.ActionProvider;
						public setSupportActionProvider(param0: android.support.v4.view.ActionProvider): android.support.v4.internal.view.SupportMenuItem;
						public setShowAsActionFlags(param0: number): android.support.v4.internal.view.SupportMenuItem;
						public expandActionView(): boolean;
						public collapseActionView(): boolean;
						public setSupportOnActionExpandListener(param0: android.support.v4.view.MenuItemCompat.OnActionExpandListener): android.support.v4.internal.view.SupportMenuItem;
						public hasCollapsibleActionView(): boolean;
						public setActionViewExpanded(param0: boolean): void;
						public isActionViewExpanded(): boolean;
						public setOnActionExpandListener(param0: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
					}
				}
			}
		}
	}
}
