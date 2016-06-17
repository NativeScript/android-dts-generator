/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.view.ActionProvider.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module internal {
				export module view {
					export class SupportMenuItem {
						public setShowAsAction(param0: number): void;
						public setShowAsActionFlags(param0: number): android.view.MenuItem;
						public setActionView(param0: android.view.View): android.view.MenuItem;
						public setActionView(param0: number): android.view.MenuItem;
						public getActionView(): android.view.View;
						public setSupportActionProvider(param0: android.support.v4.view.ActionProvider): android.support.v4.internal.view.SupportMenuItem;
						public getSupportActionProvider(): android.support.v4.view.ActionProvider;
						public expandActionView(): boolean;
						public collapseActionView(): boolean;
						public isActionViewExpanded(): boolean;
						public setSupportOnActionExpandListener(param0: android.support.v4.view.MenuItemCompat.OnActionExpandListener): android.support.v4.internal.view.SupportMenuItem;
						public static SHOW_AS_ACTION_NEVER: number;
						public static SHOW_AS_ACTION_IF_ROOM: number;
						public static SHOW_AS_ACTION_ALWAYS: number;
						public static SHOW_AS_ACTION_WITH_TEXT: number;
						public static SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW: number;
					}
				}
			}
		}
	}
}
