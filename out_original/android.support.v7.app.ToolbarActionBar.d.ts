/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuBuilder.d.ts" />
/// <reference path="./android.support.v7.widget.Toolbar.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.SpinnerAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class ToolbarActionBar {
					public constructor();
					public constructor(param0: android.support.v7.widget.Toolbar, param1: string, param2: android.view.Window.Callback);
					public getWrappedWindowCallback(): android.view.Window.Callback;
					public setCustomView(param0: android.view.View, param1: android.support.v7.app.ActionBar.LayoutParams): void;
					public setCustomView(param0: number): void;
					public setCustomView(param0: android.view.View): void;
					public setCustomView(param0: android.view.View, param1: android.support.v7.app.ActionBar.LayoutParams): void;
					public setCustomView(param0: number): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public setIcon(param0: number): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public setLogo(param0: android.graphics.drawable.Drawable): void;
					public setLogo(param0: number): void;
					public setLogo(param0: android.graphics.drawable.Drawable): void;
					public setStackedBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setSplitBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setHomeButtonEnabled(param0: boolean): void;
					public setElevation(param0: number): void;
					public getElevation(): number;
					public getThemedContext(): android.content.Context;
					public isTitleTruncated(): boolean;
					public setHomeAsUpIndicator(param0: number): void;
					public setHomeAsUpIndicator(param0: android.graphics.drawable.Drawable): void;
					public setHomeAsUpIndicator(param0: number): void;
					public setHomeActionContentDescription(param0: number): void;
					public setHomeActionContentDescription(param0: string): void;
					public setDefaultDisplayHomeAsUpEnabled(param0: boolean): void;
					public setHomeActionContentDescription(param0: number): void;
					public setShowHideAnimationEnabled(param0: boolean): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public setListNavigationCallbacks(param0: android.widget.SpinnerAdapter, param1: android.support.v7.app.ActionBar.OnNavigationListener): void;
					public setSelectedNavigationItem(param0: number): void;
					public getSelectedNavigationIndex(): number;
					public getNavigationItemCount(): number;
					public setTitle(param0: number): void;
					public setTitle(param0: string): void;
					public setTitle(param0: number): void;
					public setWindowTitle(param0: string): void;
					public requestFocus(): boolean;
					public setSubtitle(param0: number): void;
					public setSubtitle(param0: string): void;
					public setSubtitle(param0: number): void;
					public setDisplayOptions(param0: number, param1: number): void;
					public setDisplayOptions(param0: number): void;
					public setDisplayOptions(param0: number, param1: number): void;
					public setDisplayUseLogoEnabled(param0: boolean): void;
					public setDisplayShowHomeEnabled(param0: boolean): void;
					public setDisplayHomeAsUpEnabled(param0: boolean): void;
					public setDisplayShowTitleEnabled(param0: boolean): void;
					public setDisplayShowCustomEnabled(param0: boolean): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public getCustomView(): android.view.View;
					public getTitle(): string;
					public getSubtitle(): string;
					public getNavigationMode(): number;
					public setNavigationMode(param0: number): void;
					public getDisplayOptions(): number;
					public newTab(): android.support.v7.app.ActionBar.Tab;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: boolean): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number, param2: boolean): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: boolean): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number, param2: boolean): void;
					public removeTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public removeTabAt(param0: number): void;
					public removeAllTabs(): void;
					public selectTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public getSelectedTab(): android.support.v7.app.ActionBar.Tab;
					public getTabAt(param0: number): android.support.v7.app.ActionBar.Tab;
					public getTabCount(): number;
					public getHeight(): number;
					public show(): void;
					public hide(): void;
					public isShowing(): boolean;
					public openOptionsMenu(): boolean;
					public invalidateOptionsMenu(): boolean;
					public collapseActionView(): boolean;
					public onMenuKeyEvent(param0: android.view.KeyEvent): boolean;
					public onKeyShortcut(param0: number, param1: android.view.KeyEvent): boolean;
					public addOnMenuVisibilityListener(param0: android.support.v7.app.ActionBar.OnMenuVisibilityListener): void;
					public removeOnMenuVisibilityListener(param0: android.support.v7.app.ActionBar.OnMenuVisibilityListener): void;
					public dispatchMenuVisibilityChanged(param0: boolean): void;
				}
				export module ToolbarActionBar {
					export class ActionMenuPresenterCallback {
						public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
					}
					export class MenuBuilderCallback {
						public onMenuItemSelected(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
						public onMenuModeChange(param0: android.support.v7.view.menu.MenuBuilder): void;
					}
					export class PanelMenuPresenterCallback {
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
					}
					export class ToolbarCallbackWrapper {
						public constructor(param0: android.view.Window.Callback);
						public constructor();
						public constructor(param0: android.support.v7.app.ToolbarActionBar, param1: android.view.Window.Callback);
						public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
						public onCreatePanelView(param0: number): android.view.View;
					}
				}
			}
		}
	}
}
