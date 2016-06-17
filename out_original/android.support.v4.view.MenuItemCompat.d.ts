/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.view.ActionProvider.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class MenuItemCompat {
					public static setShowAsAction(param0: android.view.MenuItem, param1: number): void;
					public static setActionView(param0: android.view.MenuItem, param1: android.view.View): android.view.MenuItem;
					public static setActionView(param0: android.view.MenuItem, param1: number): android.view.MenuItem;
					public static getActionView(param0: android.view.MenuItem): android.view.View;
					public static setActionProvider(param0: android.view.MenuItem, param1: android.support.v4.view.ActionProvider): android.view.MenuItem;
					public static getActionProvider(param0: android.view.MenuItem): android.support.v4.view.ActionProvider;
					public static expandActionView(param0: android.view.MenuItem): boolean;
					public static collapseActionView(param0: android.view.MenuItem): boolean;
					public static isActionViewExpanded(param0: android.view.MenuItem): boolean;
					public static setOnActionExpandListener(param0: android.view.MenuItem, param1: android.support.v4.view.MenuItemCompat.OnActionExpandListener): android.view.MenuItem;
					public static SHOW_AS_ACTION_NEVER: number;
					public static SHOW_AS_ACTION_IF_ROOM: number;
					public static SHOW_AS_ACTION_ALWAYS: number;
					public static SHOW_AS_ACTION_WITH_TEXT: number;
					public static SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW: number;
				}
				export module MenuItemCompat {
					export class BaseMenuVersionImpl {
						public setShowAsAction(param0: android.view.MenuItem, param1: number): void;
						public setActionView(param0: android.view.MenuItem, param1: android.view.View): android.view.MenuItem;
						public setActionView(param0: android.view.MenuItem, param1: number): android.view.MenuItem;
						public getActionView(param0: android.view.MenuItem): android.view.View;
						public expandActionView(param0: android.view.MenuItem): boolean;
						public collapseActionView(param0: android.view.MenuItem): boolean;
						public isActionViewExpanded(param0: android.view.MenuItem): boolean;
						public setOnActionExpandListener(param0: android.view.MenuItem, param1: android.support.v4.view.MenuItemCompat.OnActionExpandListener): android.view.MenuItem;
					}
					export class HoneycombMenuVersionImpl {
						public setShowAsAction(param0: android.view.MenuItem, param1: number): void;
						public setActionView(param0: android.view.MenuItem, param1: android.view.View): android.view.MenuItem;
						public setActionView(param0: android.view.MenuItem, param1: number): android.view.MenuItem;
						public getActionView(param0: android.view.MenuItem): android.view.View;
						public expandActionView(param0: android.view.MenuItem): boolean;
						public collapseActionView(param0: android.view.MenuItem): boolean;
						public isActionViewExpanded(param0: android.view.MenuItem): boolean;
						public setOnActionExpandListener(param0: android.view.MenuItem, param1: android.support.v4.view.MenuItemCompat.OnActionExpandListener): android.view.MenuItem;
					}
					export class IcsMenuVersionImpl {
						public expandActionView(param0: android.view.MenuItem): boolean;
						public collapseActionView(param0: android.view.MenuItem): boolean;
						public isActionViewExpanded(param0: android.view.MenuItem): boolean;
						public setOnActionExpandListener(param0: android.view.MenuItem, param1: android.support.v4.view.MenuItemCompat.OnActionExpandListener): android.view.MenuItem;
					}
					export class MenuVersionImpl {
						public setShowAsAction(param0: android.view.MenuItem, param1: number): void;
						public setActionView(param0: android.view.MenuItem, param1: android.view.View): android.view.MenuItem;
						public setActionView(param0: android.view.MenuItem, param1: number): android.view.MenuItem;
						public getActionView(param0: android.view.MenuItem): android.view.View;
						public expandActionView(param0: android.view.MenuItem): boolean;
						public collapseActionView(param0: android.view.MenuItem): boolean;
						public isActionViewExpanded(param0: android.view.MenuItem): boolean;
						public setOnActionExpandListener(param0: android.view.MenuItem, param1: android.support.v4.view.MenuItemCompat.OnActionExpandListener): android.view.MenuItem;
					}
					export class OnActionExpandListener {
						public onMenuItemActionExpand(param0: android.view.MenuItem): boolean;
						public onMenuItemActionCollapse(param0: android.view.MenuItem): boolean;
					}
				}
			}
		}
	}
}
