/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v4.app.FragmentTransaction.d.ts" />
/// <reference path="./android.support.v7.view.ActionMode.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.SpinnerAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class ActionBar {
					public constructor();
					public setCustomView(param0: android.view.View): void;
					public setCustomView(param0: android.view.View, param1: android.support.v7.app.ActionBar.LayoutParams): void;
					public setCustomView(param0: number): void;
					public setIcon(param0: number): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public setLogo(param0: number): void;
					public setLogo(param0: android.graphics.drawable.Drawable): void;
					public setListNavigationCallbacks(param0: android.widget.SpinnerAdapter, param1: android.support.v7.app.ActionBar.OnNavigationListener): void;
					public setSelectedNavigationItem(param0: number): void;
					public getSelectedNavigationIndex(): number;
					public getNavigationItemCount(): number;
					public setTitle(param0: string): void;
					public setTitle(param0: number): void;
					public setSubtitle(param0: string): void;
					public setSubtitle(param0: number): void;
					public setDisplayOptions(param0: number): void;
					public setDisplayOptions(param0: number, param1: number): void;
					public setDisplayUseLogoEnabled(param0: boolean): void;
					public setDisplayShowHomeEnabled(param0: boolean): void;
					public setDisplayHomeAsUpEnabled(param0: boolean): void;
					public setDisplayShowTitleEnabled(param0: boolean): void;
					public setDisplayShowCustomEnabled(param0: boolean): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setStackedBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setSplitBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public getCustomView(): android.view.View;
					public getTitle(): string;
					public getSubtitle(): string;
					public getNavigationMode(): number;
					public setNavigationMode(param0: number): void;
					public getDisplayOptions(): number;
					public newTab(): android.support.v7.app.ActionBar.Tab;
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
					public addOnMenuVisibilityListener(param0: android.support.v7.app.ActionBar.OnMenuVisibilityListener): void;
					public removeOnMenuVisibilityListener(param0: android.support.v7.app.ActionBar.OnMenuVisibilityListener): void;
					public setHomeButtonEnabled(param0: boolean): void;
					public getThemedContext(): android.content.Context;
					public isTitleTruncated(): boolean;
					public setHomeAsUpIndicator(param0: android.graphics.drawable.Drawable): void;
					public setHomeAsUpIndicator(param0: number): void;
					public setHomeActionContentDescription(param0: string): void;
					public setHomeActionContentDescription(param0: number): void;
					public setHideOnContentScrollEnabled(param0: boolean): void;
					public isHideOnContentScrollEnabled(): boolean;
					public getHideOffset(): number;
					public setHideOffset(param0: number): void;
					public setElevation(param0: number): void;
					public getElevation(): number;
					public setDefaultDisplayHomeAsUpEnabled(param0: boolean): void;
					public setShowHideAnimationEnabled(param0: boolean): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public dispatchMenuVisibilityChanged(param0: boolean): void;
					public startActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public openOptionsMenu(): boolean;
					public invalidateOptionsMenu(): boolean;
					public onMenuKeyEvent(param0: android.view.KeyEvent): boolean;
					public onKeyShortcut(param0: number, param1: android.view.KeyEvent): boolean;
					public collapseActionView(): boolean;
					public setWindowTitle(param0: string): void;
					public static NAVIGATION_MODE_STANDARD: number;
					public static NAVIGATION_MODE_LIST: number;
					public static NAVIGATION_MODE_TABS: number;
					public static DISPLAY_USE_LOGO: number;
					public static DISPLAY_SHOW_HOME: number;
					public static DISPLAY_HOME_AS_UP: number;
					public static DISPLAY_SHOW_TITLE: number;
					public static DISPLAY_SHOW_CUSTOM: number;
				}
				export module ActionBar {
					export class DisplayOptions {
					}
					export class LayoutParams {
						public constructor(param0: number, param1: number);
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor();
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: number, param1: number);
						public constructor(param0: number, param1: number, param2: number);
						public constructor(param0: number);
						public constructor(param0: android.support.v7.app.ActionBar.LayoutParams);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public gravity: number;
					}
					export class NavigationMode {
					}
					export class OnMenuVisibilityListener {
						public onMenuVisibilityChanged(param0: boolean): void;
					}
					export class OnNavigationListener {
						public onNavigationItemSelected(param0: number, param1: number): boolean;
					}
					export class Tab {
						public constructor();
						public getPosition(): number;
						public getIcon(): android.graphics.drawable.Drawable;
						public getText(): string;
						public setIcon(param0: android.graphics.drawable.Drawable): android.support.v7.app.ActionBar.Tab;
						public setIcon(param0: number): android.support.v7.app.ActionBar.Tab;
						public setText(param0: string): android.support.v7.app.ActionBar.Tab;
						public setText(param0: number): android.support.v7.app.ActionBar.Tab;
						public setCustomView(param0: android.view.View): android.support.v7.app.ActionBar.Tab;
						public setCustomView(param0: number): android.support.v7.app.ActionBar.Tab;
						public getCustomView(): android.view.View;
						public setTag(param0: java.lang.Object): android.support.v7.app.ActionBar.Tab;
						public getTag(): java.lang.Object;
						public setTabListener(param0: android.support.v7.app.ActionBar.TabListener): android.support.v7.app.ActionBar.Tab;
						public select(): void;
						public setContentDescription(param0: number): android.support.v7.app.ActionBar.Tab;
						public setContentDescription(param0: string): android.support.v7.app.ActionBar.Tab;
						public getContentDescription(): string;
						public static INVALID_POSITION: number;
					}
					export class TabListener {
						public onTabSelected(param0: android.support.v7.app.ActionBar.Tab, param1: android.support.v4.app.FragmentTransaction): void;
						public onTabUnselected(param0: android.support.v7.app.ActionBar.Tab, param1: android.support.v4.app.FragmentTransaction): void;
						public onTabReselected(param0: android.support.v7.app.ActionBar.Tab, param1: android.support.v4.app.FragmentTransaction): void;
					}
				}
			}
		}
	}
}
