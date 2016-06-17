/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuBuilder.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuItemImpl.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuView {
						public initialize(param0: android.support.v7.view.menu.MenuBuilder): void;
						public getWindowAnimations(): number;
					}
					export module MenuView {
						export class ItemView {
							public initialize(param0: android.support.v7.view.menu.MenuItemImpl, param1: number): void;
							public getItemData(): android.support.v7.view.menu.MenuItemImpl;
							public setTitle(param0: string): void;
							public setEnabled(param0: boolean): void;
							public setCheckable(param0: boolean): void;
							public setChecked(param0: boolean): void;
							public setShortcut(param0: boolean, param1: string): void;
							public setIcon(param0: android.graphics.drawable.Drawable): void;
							public prefersCondensedTitle(): boolean;
							public showsIcon(): boolean;
						}
					}
				}
			}
		}
	}
}
