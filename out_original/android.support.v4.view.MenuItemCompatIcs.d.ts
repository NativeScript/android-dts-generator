/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class MenuItemCompatIcs {
					public static expandActionView(param0: android.view.MenuItem): boolean;
					public static collapseActionView(param0: android.view.MenuItem): boolean;
					public static isActionViewExpanded(param0: android.view.MenuItem): boolean;
					public static setOnActionExpandListener(param0: android.view.MenuItem, param1: android.support.v4.view.MenuItemCompatIcs.SupportActionExpandProxy): android.view.MenuItem;
				}
				export module MenuItemCompatIcs {
					export class OnActionExpandListenerWrapper {
						public constructor();
						public constructor(param0: android.support.v4.view.MenuItemCompatIcs.SupportActionExpandProxy);
						public onMenuItemActionExpand(param0: android.view.MenuItem): boolean;
						public onMenuItemActionCollapse(param0: android.view.MenuItem): boolean;
					}
					export class SupportActionExpandProxy {
						public onMenuItemActionExpand(param0: android.view.MenuItem): boolean;
						public onMenuItemActionCollapse(param0: android.view.MenuItem): boolean;
					}
				}
			}
		}
	}
}
