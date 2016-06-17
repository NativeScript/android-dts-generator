/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuBuilder.d.ts" />
/// <reference path="./android.support.v7.view.menu.SubMenuBuilder.d.ts" />
/// <reference path="./android.support.v7.widget.ActionBarContextView.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class StandaloneActionMode {
					public constructor();
					public constructor(param0: android.content.Context, param1: android.support.v7.widget.ActionBarContextView, param2: android.support.v7.view.ActionMode.Callback, param3: boolean);
					public setTitle(param0: number): void;
					public setTitle(param0: string): void;
					public setSubtitle(param0: number): void;
					public setSubtitle(param0: string): void;
					public setTitle(param0: number): void;
					public setSubtitle(param0: number): void;
					public setTitleOptionalHint(param0: boolean): void;
					public isTitleOptional(): boolean;
					public setCustomView(param0: android.view.View): void;
					public invalidate(): void;
					public finish(): void;
					public getMenu(): android.view.Menu;
					public getTitle(): string;
					public getSubtitle(): string;
					public getCustomView(): android.view.View;
					public getMenuInflater(): android.view.MenuInflater;
					public onMenuItemSelected(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
					public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
					public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
					public onCloseSubMenu(param0: android.support.v7.view.menu.SubMenuBuilder): void;
					public onMenuModeChange(param0: android.support.v7.view.menu.MenuBuilder): void;
					public isUiFocusable(): boolean;
				}
			}
		}
	}
}
