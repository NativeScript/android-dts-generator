/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v4.internal.view.SupportSubMenu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class SubMenuWrapperICS {
						public getWrappedObject(): java.lang.Object;
						public getWrappedObject(): android.support.v4.internal.view.SupportSubMenu;
						public setHeaderTitle(param0: number): android.view.SubMenu;
						public setHeaderTitle(param0: string): android.view.SubMenu;
						public setHeaderIcon(param0: number): android.view.SubMenu;
						public setHeaderIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
						public setHeaderView(param0: android.view.View): android.view.SubMenu;
						public clearHeader(): void;
						public setIcon(param0: number): android.view.SubMenu;
						public setIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
						public getItem(param0: number): android.view.MenuItem;
						public getItem(): android.view.MenuItem;
					}
				}
			}
		}
	}
}
