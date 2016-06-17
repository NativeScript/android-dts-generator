/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.ActionProvider.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module view {
		export class MenuItem {
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
			public static SHOW_AS_ACTION_ALWAYS: number;
			public static SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW: number;
			public static SHOW_AS_ACTION_IF_ROOM: number;
			public static SHOW_AS_ACTION_NEVER: number;
			public static SHOW_AS_ACTION_WITH_TEXT: number;
		}
		export module MenuItem {
			export class OnActionExpandListener {
				public onMenuItemActionExpand(param0: android.view.MenuItem): boolean;
				public onMenuItemActionCollapse(param0: android.view.MenuItem): boolean;
			}
			export class OnMenuItemClickListener {
				public onMenuItemClick(param0: android.view.MenuItem): boolean;
			}
		}
	}
}
