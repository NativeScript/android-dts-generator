/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v7.app.ActionBar.d.ts" />
/// <reference path="./android.support.v7.app.AppCompatDelegate.d.ts" />
/// <reference path="./android.support.v7.view.ActionMode.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatDialog {
					public constructor(param0: android.content.Context, param1: number);
					public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: number);
					public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);
					public onCreate(param0: android.os.Bundle): void;
					public getSupportActionBar(): android.support.v7.app.ActionBar;
					public setContentView(param0: android.view.View): void;
					public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public setContentView(param0: number): void;
					public setContentView(param0: android.view.View): void;
					public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public findViewById(param0: number): android.view.View;
					public setTitle(param0: number): void;
					public setTitle(param0: string): void;
					public setTitle(param0: number): void;
					public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public onStop(): void;
					public supportRequestWindowFeature(param0: number): boolean;
					public invalidateOptionsMenu(): void;
					public getDelegate(): android.support.v7.app.AppCompatDelegate;
					public onSupportActionModeStarted(param0: android.support.v7.view.ActionMode): void;
					public onSupportActionModeFinished(param0: android.support.v7.view.ActionMode): void;
					public onWindowStartingSupportActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
				}
			}
		}
	}
}
