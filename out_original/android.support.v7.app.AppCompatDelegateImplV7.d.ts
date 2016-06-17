/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.support.v7.view.ActionMode.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuBuilder.d.ts" />
/// <reference path="./android.support.v7.widget.Toolbar.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatDelegateImplV7 {
					public onCreate(param0: android.os.Bundle): void;
					public onPostCreate(param0: android.os.Bundle): void;
					public initWindowDecorActionBar(): void;
					public setSupportActionBar(param0: android.support.v7.widget.Toolbar): void;
					public findViewById(param0: number): android.view.View;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public onStop(): void;
					public onPostResume(): void;
					public setContentView(param0: number): void;
					public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public setContentView(param0: android.view.View): void;
					public setContentView(param0: number): void;
					public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public onDestroy(): void;
					public requestWindowFeature(param0: number): boolean;
					public hasWindowFeature(param0: number): boolean;
					public onMenuItemSelected(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
					public onMenuModeChange(param0: android.support.v7.view.menu.MenuBuilder): void;
					public startSupportActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public invalidateOptionsMenu(): void;
					public createView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
					public installViewFactory(): void;
					public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
				}
				export module AppCompatDelegateImplV7 {
					export class ActionMenuPresenterCallback {
						public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
					}
					export class ActionModeCallbackWrapperV7 {
						public constructor();
						public constructor(param0: android.support.v7.app.AppCompatDelegateImplV7, param1: android.support.v7.view.ActionMode.Callback);
						public onCreateActionMode(param0: android.support.v7.view.ActionMode, param1: android.view.Menu): boolean;
						public onPrepareActionMode(param0: android.support.v7.view.ActionMode, param1: android.view.Menu): boolean;
						public onActionItemClicked(param0: android.support.v7.view.ActionMode, param1: android.view.MenuItem): boolean;
						public onDestroyActionMode(param0: android.support.v7.view.ActionMode): void;
					}
					export class ListMenuDecorView {
						public constructor(param0: android.content.Context);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public constructor();
						public constructor(param0: android.support.v7.app.AppCompatDelegateImplV7, param1: android.content.Context);
						public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
						public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
						public setBackgroundResource(param0: number): void;
					}
					export class PanelFeatureState {
						public hasPanelItems(): boolean;
						public clearMenuPresenters(): void;
						public qwertyMode: boolean;
					}
					export module PanelFeatureState {
						export class SavedState {
							public describeContents(): number;
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public static CREATOR: android.os.Parcelable.Creator;
						}
					}
					export class PanelMenuPresenterCallback {
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
					}
				}
			}
		}
	}
}
