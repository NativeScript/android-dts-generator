/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module view {
		export class SubMenu {
			public setHeaderTitle(param0: number): android.view.SubMenu;
			public setHeaderTitle(param0: string): android.view.SubMenu;
			public setHeaderIcon(param0: number): android.view.SubMenu;
			public setHeaderIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
			public setHeaderView(param0: android.view.View): android.view.SubMenu;
			public clearHeader(): void;
			public setIcon(param0: number): android.view.SubMenu;
			public setIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
			public getItem(): android.view.MenuItem;
		}
	}
}
