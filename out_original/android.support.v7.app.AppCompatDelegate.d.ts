/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v7.app.ActionBar.d.ts" />
/// <reference path="./android.support.v7.app.AppCompatCallback.d.ts" />
/// <reference path="./android.support.v7.view.ActionMode.d.ts" />
/// <reference path="./android.support.v7.widget.Toolbar.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatDelegate {
					public static create(param0: android.app.Activity, param1: android.support.v7.app.AppCompatCallback): android.support.v7.app.AppCompatDelegate;
					public static create(param0: android.app.Dialog, param1: android.support.v7.app.AppCompatCallback): android.support.v7.app.AppCompatDelegate;
					public getSupportActionBar(): android.support.v7.app.ActionBar;
					public setSupportActionBar(param0: android.support.v7.widget.Toolbar): void;
					public getMenuInflater(): android.view.MenuInflater;
					public onCreate(param0: android.os.Bundle): void;
					public onPostCreate(param0: android.os.Bundle): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public onStop(): void;
					public onPostResume(): void;
					public findViewById(param0: number): android.view.View;
					public setContentView(param0: android.view.View): void;
					public setContentView(param0: number): void;
					public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public setTitle(param0: string): void;
					public invalidateOptionsMenu(): void;
					public onDestroy(): void;
					public getDrawerToggleDelegate(): android.support.v7.app.ActionBarDrawerToggle.Delegate;
					public requestWindowFeature(param0: number): boolean;
					public hasWindowFeature(param0: number): boolean;
					public startSupportActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public installViewFactory(): void;
					public createView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
					public setHandleNativeActionModesEnabled(param0: boolean): void;
					public isHandleNativeActionModesEnabled(): boolean;
					public onSaveInstanceState(param0: android.os.Bundle): void;
					public applyDayNight(): boolean;
					public setLocalNightMode(param0: number): void;
					public static setDefaultNightMode(param0: number): void;
					public static getDefaultNightMode(): number;
					public static setCompatVectorFromResourcesEnabled(param0: boolean): void;
					public static isCompatVectorFromResourcesEnabled(): boolean;
					public static MODE_NIGHT_NO: number;
					public static MODE_NIGHT_YES: number;
					public static MODE_NIGHT_AUTO: number;
					public static MODE_NIGHT_FOLLOW_SYSTEM: number;
					public static FEATURE_SUPPORT_ACTION_BAR: number;
					public static FEATURE_SUPPORT_ACTION_BAR_OVERLAY: number;
					public static FEATURE_ACTION_MODE_OVERLAY: number;
				}
				export module AppCompatDelegate {
					export class NightMode {
					}
				}
			}
		}
	}
}
