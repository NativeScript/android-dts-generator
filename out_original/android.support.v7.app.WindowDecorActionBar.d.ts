/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v7.view.ActionMode.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuBuilder.d.ts" />
/// <reference path="./android.support.v7.view.menu.SubMenuBuilder.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.SpinnerAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class WindowDecorActionBar {
					public constructor();
					public constructor(param0: android.app.Activity, param1: boolean);
					public constructor(param0: android.app.Dialog);
					public constructor(param0: android.view.View);
					public setElevation(param0: number): void;
					public getElevation(): number;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public onWindowVisibilityChanged(param0: number): void;
					public setShowHideAnimationEnabled(param0: boolean): void;
					public addOnMenuVisibilityListener(param0: android.support.v7.app.ActionBar.OnMenuVisibilityListener): void;
					public removeOnMenuVisibilityListener(param0: android.support.v7.app.ActionBar.OnMenuVisibilityListener): void;
					public dispatchMenuVisibilityChanged(param0: boolean): void;
					public setCustomView(param0: android.view.View): void;
					public setCustomView(param0: android.view.View, param1: android.support.v7.app.ActionBar.LayoutParams): void;
					public setCustomView(param0: number): void;
					public setDisplayUseLogoEnabled(param0: boolean): void;
					public setDisplayShowHomeEnabled(param0: boolean): void;
					public setDisplayHomeAsUpEnabled(param0: boolean): void;
					public setDisplayShowTitleEnabled(param0: boolean): void;
					public setDisplayShowCustomEnabled(param0: boolean): void;
					public setHomeButtonEnabled(param0: boolean): void;
					public setTitle(param0: string): void;
					public setTitle(param0: number): void;
					public setSubtitle(param0: string): void;
					public setSubtitle(param0: number): void;
					public setSelectedNavigationItem(param0: number): void;
					public removeAllTabs(): void;
					public setTitle(param0: string): void;
					public setWindowTitle(param0: string): void;
					public requestFocus(): boolean;
					public setSubtitle(param0: string): void;
					public setDisplayOptions(param0: number, param1: number): void;
					public setDisplayOptions(param0: number): void;
					public setDisplayOptions(param0: number, param1: number): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setStackedBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setSplitBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public getCustomView(): android.view.View;
					public getTitle(): string;
					public getSubtitle(): string;
					public getNavigationMode(): number;
					public getDisplayOptions(): number;
					public startActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: boolean): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number, param2: boolean): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: boolean): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number, param2: boolean): void;
					public newTab(): android.support.v7.app.ActionBar.Tab;
					public removeTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public removeTabAt(param0: number): void;
					public selectTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public getSelectedTab(): android.support.v7.app.ActionBar.Tab;
					public getHeight(): number;
					public enableContentAnimations(param0: boolean): void;
					public show(): void;
					public showForSystem(): void;
					public hide(): void;
					public hideForSystem(): void;
					public setHideOnContentScrollEnabled(param0: boolean): void;
					public isHideOnContentScrollEnabled(): boolean;
					public getHideOffset(): number;
					public setHideOffset(param0: number): void;
					public doShow(param0: boolean): void;
					public doHide(param0: boolean): void;
					public isShowing(): boolean;
					public animateToMode(param0: boolean): void;
					public getThemedContext(): android.content.Context;
					public isTitleTruncated(): boolean;
					public setHomeAsUpIndicator(param0: number): void;
					public setHomeAsUpIndicator(param0: android.graphics.drawable.Drawable): void;
					public setHomeAsUpIndicator(param0: number): void;
					public setHomeActionContentDescription(param0: number): void;
					public setHomeActionContentDescription(param0: string): void;
					public setHomeActionContentDescription(param0: number): void;
					public onContentScrollStarted(): void;
					public onContentScrollStopped(): void;
					public collapseActionView(): boolean;
					public setCustomView(param0: android.view.View): void;
					public setCustomView(param0: android.view.View, param1: android.support.v7.app.ActionBar.LayoutParams): void;
					public setListNavigationCallbacks(param0: android.widget.SpinnerAdapter, param1: android.support.v7.app.ActionBar.OnNavigationListener): void;
					public getSelectedNavigationIndex(): number;
					public getNavigationItemCount(): number;
					public getTabCount(): number;
					public setNavigationMode(param0: number): void;
					public getTabAt(param0: number): android.support.v7.app.ActionBar.Tab;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public setIcon(param0: number): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public hasIcon(): boolean;
					public setLogo(param0: android.graphics.drawable.Drawable): void;
					public setLogo(param0: number): void;
					public setLogo(param0: android.graphics.drawable.Drawable): void;
					public hasLogo(): boolean;
					public setDefaultDisplayHomeAsUpEnabled(param0: boolean): void;
				}
				export module WindowDecorActionBar {
					export class ActionModeImpl {
						public constructor();
						public constructor(param0: android.support.v7.app.WindowDecorActionBar, param1: android.content.Context, param2: android.support.v7.view.ActionMode.Callback);
						public getMenuInflater(): android.view.MenuInflater;
						public getMenu(): android.view.Menu;
						public finish(): void;
						public invalidate(): void;
						public dispatchOnCreate(): boolean;
						public setCustomView(param0: android.view.View): void;
						public setSubtitle(param0: number): void;
						public setSubtitle(param0: string): void;
						public setTitle(param0: number): void;
						public setTitle(param0: string): void;
						public setTitle(param0: number): void;
						public setSubtitle(param0: number): void;
						public getTitle(): string;
						public getSubtitle(): string;
						public setTitleOptionalHint(param0: boolean): void;
						public isTitleOptional(): boolean;
						public getCustomView(): android.view.View;
						public onMenuItemSelected(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
						public onCloseSubMenu(param0: android.support.v7.view.menu.SubMenuBuilder): void;
						public onMenuModeChange(param0: android.support.v7.view.menu.MenuBuilder): void;
					}
					export class TabImpl {
						public constructor();
						public constructor(param0: android.support.v7.app.WindowDecorActionBar);
						public getTag(): java.lang.Object;
						public setTag(param0: java.lang.Object): android.support.v7.app.ActionBar.Tab;
						public getCallback(): android.support.v7.app.ActionBar.TabListener;
						public setTabListener(param0: android.support.v7.app.ActionBar.TabListener): android.support.v7.app.ActionBar.Tab;
						public getCustomView(): android.view.View;
						public setCustomView(param0: number): android.support.v7.app.ActionBar.Tab;
						public setCustomView(param0: android.view.View): android.support.v7.app.ActionBar.Tab;
						public setCustomView(param0: number): android.support.v7.app.ActionBar.Tab;
						public getIcon(): android.graphics.drawable.Drawable;
						public getPosition(): number;
						public setPosition(param0: number): void;
						public getText(): string;
						public setIcon(param0: number): android.support.v7.app.ActionBar.Tab;
						public setIcon(param0: android.graphics.drawable.Drawable): android.support.v7.app.ActionBar.Tab;
						public setIcon(param0: number): android.support.v7.app.ActionBar.Tab;
						public setText(param0: number): android.support.v7.app.ActionBar.Tab;
						public setText(param0: string): android.support.v7.app.ActionBar.Tab;
						public setText(param0: number): android.support.v7.app.ActionBar.Tab;
						public select(): void;
						public setContentDescription(param0: string): android.support.v7.app.ActionBar.Tab;
						public setContentDescription(param0: number): android.support.v7.app.ActionBar.Tab;
						public setContentDescription(param0: string): android.support.v7.app.ActionBar.Tab;
						public getContentDescription(): string;
					}
				}
			}
		}
	}
}
