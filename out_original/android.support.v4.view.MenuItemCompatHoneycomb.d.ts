/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class MenuItemCompatHoneycomb {
					public static setShowAsAction(param0: android.view.MenuItem, param1: number): void;
					public static setActionView(param0: android.view.MenuItem, param1: android.view.View): android.view.MenuItem;
					public static setActionView(param0: android.view.MenuItem, param1: number): android.view.MenuItem;
					public static getActionView(param0: android.view.MenuItem): android.view.View;
				}
			}
		}
	}
}
