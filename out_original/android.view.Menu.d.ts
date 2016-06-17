/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module view {
		export class Menu {
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
			public static CATEGORY_ALTERNATIVE: number;
			public static CATEGORY_CONTAINER: number;
			public static CATEGORY_SECONDARY: number;
			public static CATEGORY_SYSTEM: number;
			public static FIRST: number;
			public static FLAG_ALWAYS_PERFORM_CLOSE: number;
			public static FLAG_APPEND_TO_GROUP: number;
			public static FLAG_PERFORM_NO_CLOSE: number;
			public static NONE: number;
		}
	}
}
