/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v4.internal.view.SupportMenu.d.ts" />
/// <reference path="./android.support.v4.internal.view.SupportMenuItem.d.ts" />
/// <reference path="./android.support.v4.internal.view.SupportSubMenu.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuWrapperFactory {
						public static wrapSupportMenu(param0: android.content.Context, param1: android.support.v4.internal.view.SupportMenu): android.view.Menu;
						public static wrapSupportMenuItem(param0: android.content.Context, param1: android.support.v4.internal.view.SupportMenuItem): android.view.MenuItem;
						public static wrapSupportSubMenu(param0: android.content.Context, param1: android.support.v4.internal.view.SupportSubMenu): android.view.SubMenu;
					}
				}
			}
		}
	}
}
