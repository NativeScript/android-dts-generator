/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v7.app.ActionBar.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatDelegateImplBase {
					public getSupportActionBar(): android.support.v7.app.ActionBar;
					public getMenuInflater(): android.view.MenuInflater;
					public setLocalNightMode(param0: number): void;
					public getDrawerToggleDelegate(): android.support.v7.app.ActionBarDrawerToggle.Delegate;
					public onDestroy(): void;
					public setHandleNativeActionModesEnabled(param0: boolean): void;
					public isHandleNativeActionModesEnabled(): boolean;
					public applyDayNight(): boolean;
					public setTitle(param0: string): void;
					public onSaveInstanceState(param0: android.os.Bundle): void;
				}
				export module AppCompatDelegateImplBase {
					export class ActionBarDrawableToggleImpl {
						public getThemeUpIndicator(): android.graphics.drawable.Drawable;
						public getActionBarThemedContext(): android.content.Context;
						public isNavigationVisible(): boolean;
						public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
						public setActionBarDescription(param0: number): void;
					}
					export class AppCompatWindowCallbackBase {
						public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
						public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
						public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
						public onContentChanged(): void;
						public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
						public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
						public onPanelClosed(param0: number, param1: android.view.Menu): void;
					}
				}
			}
		}
	}
}
