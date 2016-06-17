/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v4.widget.DrawerLayout.d.ts" />
/// <reference path="./android.support.v7.widget.Toolbar.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class ActionBarDrawerToggle {
					public constructor();
					public constructor(param0: android.app.Activity, param1: android.support.v4.widget.DrawerLayout, param2: number, param3: number);
					public constructor(param0: android.app.Activity, param1: android.support.v4.widget.DrawerLayout, param2: android.support.v7.widget.Toolbar, param3: number, param4: number);
					public syncState(): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
					public setHomeAsUpIndicator(param0: android.graphics.drawable.Drawable): void;
					public setHomeAsUpIndicator(param0: number): void;
					public isDrawerIndicatorEnabled(): boolean;
					public setDrawerIndicatorEnabled(param0: boolean): void;
					public onDrawerSlide(param0: android.view.View, param1: number): void;
					public onDrawerOpened(param0: android.view.View): void;
					public onDrawerClosed(param0: android.view.View): void;
					public onDrawerStateChanged(param0: number): void;
					public getToolbarNavigationClickListener(): android.view.View.OnClickListener;
					public setToolbarNavigationClickListener(param0: android.view.View.OnClickListener): void;
				}
				export module ActionBarDrawerToggle {
					export class Delegate {
						public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
						public setActionBarDescription(param0: number): void;
						public getThemeUpIndicator(): android.graphics.drawable.Drawable;
						public getActionBarThemedContext(): android.content.Context;
						public isNavigationVisible(): boolean;
					}
					export class DelegateProvider {
						public getDrawerToggleDelegate(): android.support.v7.app.ActionBarDrawerToggle.Delegate;
					}
					export class DrawerArrowDrawableToggle {
						public constructor(param0: android.content.Context);
						public constructor();
						public constructor(param0: android.app.Activity, param1: android.content.Context);
						public setPosition(param0: number): void;
						public getPosition(): number;
					}
					export class DrawerToggle {
						public setPosition(param0: number): void;
						public getPosition(): number;
					}
					export class DummyDelegate {
						public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
						public setActionBarDescription(param0: number): void;
						public getThemeUpIndicator(): android.graphics.drawable.Drawable;
						public getActionBarThemedContext(): android.content.Context;
						public isNavigationVisible(): boolean;
					}
					export class HoneycombDelegate {
						public getThemeUpIndicator(): android.graphics.drawable.Drawable;
						public getActionBarThemedContext(): android.content.Context;
						public isNavigationVisible(): boolean;
						public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
						public setActionBarDescription(param0: number): void;
					}
					export class JellybeanMr2Delegate {
						public getThemeUpIndicator(): android.graphics.drawable.Drawable;
						public getActionBarThemedContext(): android.content.Context;
						public isNavigationVisible(): boolean;
						public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
						public setActionBarDescription(param0: number): void;
					}
					export class ToolbarCompatDelegate {
						public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
						public setActionBarDescription(param0: number): void;
						public getThemeUpIndicator(): android.graphics.drawable.Drawable;
						public getActionBarThemedContext(): android.content.Context;
						public isNavigationVisible(): boolean;
					}
				}
			}
		}
	}
}
