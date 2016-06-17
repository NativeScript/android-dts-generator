/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuWrapperICS {
						public add(param0: string): android.view.MenuItem;
						public add(param0: number): android.view.MenuItem;
						public add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
						public add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
						public addSubMenu(param0: string): android.view.SubMenu;
						public addSubMenu(param0: number): android.view.SubMenu;
						public addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
						public addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
						public addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: native.Array<android.content.Intent>, param5: android.content.Intent, param6: number, param7: native.Array<android.view.MenuItem>): number;
						public removeItem(param0: number): void;
						public removeGroup(param0: number): void;
						public clear(): void;
						public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
						public setGroupVisible(param0: number, param1: boolean): void;
						public setGroupEnabled(param0: number, param1: boolean): void;
						public hasVisibleItems(): boolean;
						public findItem(param0: number): android.view.MenuItem;
						public size(): number;
						public getItem(param0: number): android.view.MenuItem;
						public close(): void;
						public performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
						public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
						public performIdentifierAction(param0: number, param1: number): boolean;
						public setQwertyMode(param0: boolean): void;
					}
				}
			}
		}
	}
}
