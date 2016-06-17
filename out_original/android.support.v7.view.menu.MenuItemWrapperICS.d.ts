/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
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
					export class MenuItemWrapperICS {
						public getItemId(): number;
						public getGroupId(): number;
						public getOrder(): number;
						public setTitle(param0: string): android.view.MenuItem;
						public setTitle(param0: number): android.view.MenuItem;
						public getTitle(): string;
						public setTitleCondensed(param0: string): android.view.MenuItem;
						public getTitleCondensed(): string;
						public setIcon(param0: android.graphics.drawable.Drawable): android.view.MenuItem;
						public setIcon(param0: number): android.view.MenuItem;
						public getIcon(): android.graphics.drawable.Drawable;
						public setIntent(param0: android.content.Intent): android.view.MenuItem;
						public getIntent(): android.content.Intent;
						public setShortcut(param0: string, param1: string): android.view.MenuItem;
						public setNumericShortcut(param0: string): android.view.MenuItem;
						public getNumericShortcut(): string;
						public setAlphabeticShortcut(param0: string): android.view.MenuItem;
						public getAlphabeticShortcut(): string;
						public setCheckable(param0: boolean): android.view.MenuItem;
						public isCheckable(): boolean;
						public setChecked(param0: boolean): android.view.MenuItem;
						public isChecked(): boolean;
						public setVisible(param0: boolean): android.view.MenuItem;
						public isVisible(): boolean;
						public setEnabled(param0: boolean): android.view.MenuItem;
						public isEnabled(): boolean;
						public hasSubMenu(): boolean;
						public getSubMenu(): android.view.SubMenu;
						public setOnMenuItemClickListener(param0: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
						public getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
						public setShowAsAction(param0: number): void;
						public setShowAsActionFlags(param0: number): android.view.MenuItem;
						public setActionView(param0: android.view.View): android.view.MenuItem;
						public setActionView(param0: number): android.view.MenuItem;
						public getActionView(): android.view.View;
						public setActionProvider(param0: android.view.ActionProvider): android.view.MenuItem;
						public getActionProvider(): android.view.ActionProvider;
						public expandActionView(): boolean;
						public collapseActionView(): boolean;
						public isActionViewExpanded(): boolean;
						public setOnActionExpandListener(param0: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
						public setExclusiveCheckable(param0: boolean): void;
					}
					export module MenuItemWrapperICS {
						export class ActionProviderWrapper {
							public constructor(param0: android.content.Context);
							public constructor();
							public constructor(param0: android.support.v7.view.menu.MenuItemWrapperICS, param1: android.content.Context, param2: android.view.ActionProvider);
							public onCreateActionView(param0: android.view.MenuItem): android.view.View;
							public onCreateActionView(): android.view.View;
							public onPerformDefaultAction(): boolean;
							public hasSubMenu(): boolean;
							public onPrepareSubMenu(param0: android.view.SubMenu): void;
						}
						export class CollapsibleActionViewWrapper {
							public onActionViewExpanded(): void;
							public onActionViewCollapsed(): void;
						}
						export class OnActionExpandListenerWrapper {
							public onMenuItemActionExpand(param0: android.view.MenuItem): boolean;
							public onMenuItemActionCollapse(param0: android.view.MenuItem): boolean;
						}
						export class OnMenuItemClickListenerWrapper {
							public onMenuItemClick(param0: android.view.MenuItem): boolean;
						}
					}
				}
			}
		}
	}
}
