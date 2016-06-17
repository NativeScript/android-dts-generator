/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module view {
		export class ContextMenu {
			public setHeaderTitle(param0: number): android.view.ContextMenu;
			public setHeaderTitle(param0: string): android.view.ContextMenu;
			public setHeaderIcon(param0: number): android.view.ContextMenu;
			public setHeaderIcon(param0: android.graphics.drawable.Drawable): android.view.ContextMenu;
			public setHeaderView(param0: android.view.View): android.view.ContextMenu;
			public clearHeader(): void;
		}
		export module ContextMenu {
			export class ContextMenuInfo {
			}
		}
	}
}
