/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.support.v4.app.TaskStackBuilder.d.ts" />
/// <reference path="./android.support.v7.app.ActionBar.d.ts" />
/// <reference path="./android.support.v7.app.AppCompatDelegate.d.ts" />
/// <reference path="./android.support.v7.view.ActionMode.d.ts" />
/// <reference path="./android.support.v7.widget.Toolbar.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatActivity {
					public constructor(param0: android.content.Context, param1: number);
					public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
					public constructor(param0: android.content.Context);
					public constructor();
					public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
					public onCreate(param0: android.os.Bundle): void;
					public setTheme(param0: number): void;
					public onPostCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
					public onPostCreate(param0: android.os.Bundle): void;
					public getSupportActionBar(): android.support.v7.app.ActionBar;
					public setSupportActionBar(param0: android.support.v7.widget.Toolbar): void;
					public getMenuInflater(): android.view.MenuInflater;
					public setContentView(param0: android.view.View): void;
					public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public setContentView(param0: number): void;
					public setContentView(param0: android.view.View): void;
					public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public onStop(): void;
					public onPostResume(): void;
					public findViewById(param0: number): android.view.View;
					public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
					public onDestroy(): void;
					public onTitleChanged(param0: string, param1: number): void;
					public supportRequestWindowFeature(param0: number): boolean;
					public supportInvalidateOptionsMenu(): void;
					public invalidateOptionsMenu(): void;
					public onSupportActionModeStarted(param0: android.support.v7.view.ActionMode): void;
					public onSupportActionModeFinished(param0: android.support.v7.view.ActionMode): void;
					public onWindowStartingSupportActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public startSupportActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public setSupportProgressBarVisibility(param0: boolean): void;
					public setSupportProgressBarIndeterminateVisibility(param0: boolean): void;
					public setSupportProgressBarIndeterminate(param0: boolean): void;
					public setSupportProgress(param0: number): void;
					public onCreateSupportNavigateUpTaskStack(param0: android.support.v4.app.TaskStackBuilder): void;
					public onPrepareSupportNavigateUpTaskStack(param0: android.support.v4.app.TaskStackBuilder): void;
					public onSupportNavigateUp(): boolean;
					public getSupportParentActivityIntent(): android.content.Intent;
					public supportShouldUpRecreateTask(param0: android.content.Intent): boolean;
					public supportNavigateUpTo(param0: android.content.Intent): void;
					public onContentChanged(): void;
					public onSupportContentChanged(): void;
					public getDrawerToggleDelegate(): android.support.v7.app.ActionBarDrawerToggle.Delegate;
					public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
					public onPanelClosed(param0: number, param1: android.view.Menu): void;
					public onSaveInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
					public onSaveInstanceState(param0: android.os.Bundle): void;
					public getDelegate(): android.support.v7.app.AppCompatDelegate;
					public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
					public getResources(): android.content.res.Resources;
				}
			}
		}
	}
}
