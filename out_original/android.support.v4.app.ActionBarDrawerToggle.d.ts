/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v4.widget.DrawerLayout.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class ActionBarDrawerToggle {
					public constructor();
					public constructor(param0: android.app.Activity, param1: android.support.v4.widget.DrawerLayout, param2: number, param3: number, param4: number);
					public constructor(param0: android.app.Activity, param1: android.support.v4.widget.DrawerLayout, param2: boolean, param3: number, param4: number, param5: number);
					public syncState(): void;
					public setHomeAsUpIndicator(param0: android.graphics.drawable.Drawable): void;
					public setHomeAsUpIndicator(param0: number): void;
					public setDrawerIndicatorEnabled(param0: boolean): void;
					public isDrawerIndicatorEnabled(): boolean;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
					public onDrawerSlide(param0: android.view.View, param1: number): void;
					public onDrawerOpened(param0: android.view.View): void;
					public onDrawerClosed(param0: android.view.View): void;
					public onDrawerStateChanged(param0: number): void;
				}
				export module ActionBarDrawerToggle {
					export class ActionBarDrawerToggleImpl {
						public getThemeUpIndicator(param0: android.app.Activity): android.graphics.drawable.Drawable;
						public setActionBarUpIndicator(param0: java.lang.Object, param1: android.app.Activity, param2: android.graphics.drawable.Drawable, param3: number): java.lang.Object;
						public setActionBarDescription(param0: java.lang.Object, param1: android.app.Activity, param2: number): java.lang.Object;
					}
					export class ActionBarDrawerToggleImplBase {
						public getThemeUpIndicator(param0: android.app.Activity): android.graphics.drawable.Drawable;
						public setActionBarUpIndicator(param0: java.lang.Object, param1: android.app.Activity, param2: android.graphics.drawable.Drawable, param3: number): java.lang.Object;
						public setActionBarDescription(param0: java.lang.Object, param1: android.app.Activity, param2: number): java.lang.Object;
					}
					export class ActionBarDrawerToggleImplHC {
						public getThemeUpIndicator(param0: android.app.Activity): android.graphics.drawable.Drawable;
						public setActionBarUpIndicator(param0: java.lang.Object, param1: android.app.Activity, param2: android.graphics.drawable.Drawable, param3: number): java.lang.Object;
						public setActionBarDescription(param0: java.lang.Object, param1: android.app.Activity, param2: number): java.lang.Object;
					}
					export class ActionBarDrawerToggleImplJellybeanMR2 {
						public getThemeUpIndicator(param0: android.app.Activity): android.graphics.drawable.Drawable;
						public setActionBarUpIndicator(param0: java.lang.Object, param1: android.app.Activity, param2: android.graphics.drawable.Drawable, param3: number): java.lang.Object;
						public setActionBarDescription(param0: java.lang.Object, param1: android.app.Activity, param2: number): java.lang.Object;
					}
					export class Delegate {
						public getThemeUpIndicator(): android.graphics.drawable.Drawable;
						public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
						public setActionBarDescription(param0: number): void;
					}
					export class DelegateProvider {
						public getDrawerToggleDelegate(): android.support.v4.app.ActionBarDrawerToggle.Delegate;
					}
					export class SlideDrawable {
						public setPosition(param0: number): void;
						public getPosition(): number;
						public setOffset(param0: number): void;
						public draw(param0: android.graphics.Canvas): void;
					}
				}
			}
		}
	}
}
