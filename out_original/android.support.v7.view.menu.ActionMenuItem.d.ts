/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v4.internal.view.SupportMenuItem.d.ts" />
/// <reference path="./android.support.v4.view.ActionProvider.d.ts" />
/// <reference path="./android.view.ActionProvider.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class ActionMenuItem {
						public constructor();
						public constructor(param0: android.content.Context, param1: number, param2: number, param3: number, param4: number, param5: string);
						public getAlphabeticShortcut(): string;
						public getGroupId(): number;
						public getIcon(): android.graphics.drawable.Drawable;
						public getIntent(): android.content.Intent;
						public getItemId(): number;
						public getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
						public getNumericShortcut(): string;
						public getOrder(): number;
						public getSubMenu(): android.view.SubMenu;
						public getTitle(): string;
						public getTitleCondensed(): string;
						public hasSubMenu(): boolean;
						public isCheckable(): boolean;
						public isChecked(): boolean;
						public isEnabled(): boolean;
						public isVisible(): boolean;
						public setAlphabeticShortcut(param0: string): android.view.MenuItem;
						public setCheckable(param0: boolean): android.view.MenuItem;
						public setExclusiveCheckable(param0: boolean): android.support.v7.view.menu.ActionMenuItem;
						public setChecked(param0: boolean): android.view.MenuItem;
						public setEnabled(param0: boolean): android.view.MenuItem;
						public setIcon(param0: android.graphics.drawable.Drawable): android.view.MenuItem;
						public setIcon(param0: number): android.view.MenuItem;
						public setIntent(param0: android.content.Intent): android.view.MenuItem;
						public setNumericShortcut(param0: string): android.view.MenuItem;
						public setOnMenuItemClickListener(param0: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
						public setShortcut(param0: string, param1: string): android.view.MenuItem;
						public setTitle(param0: string): android.view.MenuItem;
						public setTitle(param0: number): android.view.MenuItem;
						public setTitleCondensed(param0: string): android.view.MenuItem;
						public setVisible(param0: boolean): android.view.MenuItem;
						public invoke(): boolean;
						public setShowAsAction(param0: number): void;
						public setActionView(param0: android.view.View): android.support.v4.internal.view.SupportMenuItem;
						public getActionView(): android.view.View;
						public setActionProvider(param0: android.view.ActionProvider): android.view.MenuItem;
						public getActionProvider(): android.view.ActionProvider;
						public setActionView(param0: number): android.support.v4.internal.view.SupportMenuItem;
						public getSupportActionProvider(): android.support.v4.view.ActionProvider;
						public setSupportActionProvider(param0: android.support.v4.view.ActionProvider): android.support.v4.internal.view.SupportMenuItem;
						public setShowAsActionFlags(param0: number): android.support.v4.internal.view.SupportMenuItem;
						public expandActionView(): boolean;
						public collapseActionView(): boolean;
						public isActionViewExpanded(): boolean;
						public setOnActionExpandListener(param0: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
						public setSupportOnActionExpandListener(param0: android.support.v4.view.MenuItemCompat.OnActionExpandListener): android.support.v4.internal.view.SupportMenuItem;
					}
				}
			}
		}
	}
}
