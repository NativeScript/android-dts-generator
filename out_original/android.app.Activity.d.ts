/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.ActionBar.d.ts" />
/// <reference path="./android.app.Application.d.ts" />
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.app.FragmentManager.d.ts" />
/// <reference path="./android.app.LoaderManager.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.app.SharedElementCallback.d.ts" />
/// <reference path="./android.app.TaskStackBuilder.d.ts" />
/// <reference path="./android.app.VoiceInteractor.d.ts" />
/// <reference path="./android.app.assist.AssistContent.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentSender.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.media.session.MediaController.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.transition.Scene.d.ts" />
/// <reference path="./android.transition.TransitionManager.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.Window.d.ts" />
/// <reference path="./android.view.WindowManager.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.widget.Toolbar.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class Activity {
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
			public constructor(param0: android.content.Context);
			public constructor();
			public getIntent(): android.content.Intent;
			public setIntent(param0: android.content.Intent): void;
			public getApplication(): android.app.Application;
			public isChild(): boolean;
			public getParent(): android.app.Activity;
			public getWindowManager(): android.view.WindowManager;
			public getWindow(): android.view.Window;
			public getLoaderManager(): android.app.LoaderManager;
			public getCurrentFocus(): android.view.View;
			public onCreate(param0: android.os.Bundle): void;
			public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onRestoreInstanceState(param0: android.os.Bundle): void;
			public onRestoreInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onPostCreate(param0: android.os.Bundle): void;
			public onPostCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onStart(): void;
			public onRestart(): void;
			public onStateNotSaved(): void;
			public onResume(): void;
			public onPostResume(): void;
			public isVoiceInteraction(): boolean;
			public isVoiceInteractionRoot(): boolean;
			public getVoiceInteractor(): android.app.VoiceInteractor;
			public onNewIntent(param0: android.content.Intent): void;
			public onSaveInstanceState(param0: android.os.Bundle): void;
			public onSaveInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onPause(): void;
			public onUserLeaveHint(): void;
			public onCreateThumbnail(param0: android.graphics.Bitmap, param1: android.graphics.Canvas): boolean;
			public onCreateDescription(): string;
			public onProvideAssistData(param0: android.os.Bundle): void;
			public onProvideAssistContent(param0: android.app.assist.AssistContent): void;
			public showAssist(param0: android.os.Bundle): boolean;
			public onStop(): void;
			public onDestroy(): void;
			public reportFullyDrawn(): void;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public getChangingConfigurations(): number;
			public getLastNonConfigurationInstance(): java.lang.Object;
			public onRetainNonConfigurationInstance(): java.lang.Object;
			public onLowMemory(): void;
			public onTrimMemory(param0: number): void;
			public getFragmentManager(): android.app.FragmentManager;
			public onAttachFragment(param0: android.app.Fragment): void;
			public managedQuery(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;
			public startManagingCursor(param0: android.database.Cursor): void;
			public stopManagingCursor(param0: android.database.Cursor): void;
			public findViewById(param0: number): android.view.View;
			public getActionBar(): android.app.ActionBar;
			public setActionBar(param0: android.widget.Toolbar): void;
			public setContentView(param0: number): void;
			public setContentView(param0: android.view.View): void;
			public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public getContentTransitionManager(): android.transition.TransitionManager;
			public setContentTransitionManager(param0: android.transition.TransitionManager): void;
			public getContentScene(): android.transition.Scene;
			public setFinishOnTouchOutside(param0: boolean): void;
			public setDefaultKeyMode(param0: number): void;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public onBackPressed(): void;
			public onKeyShortcut(param0: number, param1: android.view.KeyEvent): boolean;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public onTrackballEvent(param0: android.view.MotionEvent): boolean;
			public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onUserInteraction(): void;
			public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
			public onContentChanged(): void;
			public onWindowFocusChanged(param0: boolean): void;
			public onAttachedToWindow(): void;
			public onDetachedFromWindow(): void;
			public hasWindowFocus(): boolean;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
			public onCreatePanelView(param0: number): android.view.View;
			public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
			public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
			public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
			public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
			public onPanelClosed(param0: number, param1: android.view.Menu): void;
			public invalidateOptionsMenu(): void;
			public onCreateOptionsMenu(param0: android.view.Menu): boolean;
			public onPrepareOptionsMenu(param0: android.view.Menu): boolean;
			public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
			public onNavigateUp(): boolean;
			public onNavigateUpFromChild(param0: android.app.Activity): boolean;
			public onCreateNavigateUpTaskStack(param0: android.app.TaskStackBuilder): void;
			public onPrepareNavigateUpTaskStack(param0: android.app.TaskStackBuilder): void;
			public onOptionsMenuClosed(param0: android.view.Menu): void;
			public openOptionsMenu(): void;
			public closeOptionsMenu(): void;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public registerForContextMenu(param0: android.view.View): void;
			public unregisterForContextMenu(param0: android.view.View): void;
			public openContextMenu(param0: android.view.View): void;
			public closeContextMenu(): void;
			public onContextItemSelected(param0: android.view.MenuItem): boolean;
			public onContextMenuClosed(param0: android.view.Menu): void;
			public onCreateDialog(param0: number): android.app.Dialog;
			public onCreateDialog(param0: number, param1: android.os.Bundle): android.app.Dialog;
			public onPrepareDialog(param0: number, param1: android.app.Dialog): void;
			public onPrepareDialog(param0: number, param1: android.app.Dialog, param2: android.os.Bundle): void;
			public showDialog(param0: number): void;
			public showDialog(param0: number, param1: android.os.Bundle): boolean;
			public dismissDialog(param0: number): void;
			public removeDialog(param0: number): void;
			public onSearchRequested(param0: android.view.SearchEvent): boolean;
			public onSearchRequested(): boolean;
			public getSearchEvent(): android.view.SearchEvent;
			public startSearch(param0: string, param1: boolean, param2: android.os.Bundle, param3: boolean): void;
			public triggerSearch(param0: string, param1: android.os.Bundle): void;
			public takeKeyEvents(param0: boolean): void;
			public requestWindowFeature(param0: number): boolean;
			public setFeatureDrawableResource(param0: number, param1: number): void;
			public setFeatureDrawableUri(param0: number, param1: android.net.Uri): void;
			public setFeatureDrawable(param0: number, param1: android.graphics.drawable.Drawable): void;
			public setFeatureDrawableAlpha(param0: number, param1: number): void;
			public getLayoutInflater(): android.view.LayoutInflater;
			public getMenuInflater(): android.view.MenuInflater;
			public onApplyThemeResource(param0: android.content.res.Resources.Theme, param1: number, param2: boolean): void;
			public requestPermissions(param0: native.Array<string>, param1: number): void;
			public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
			public shouldShowRequestPermissionRationale(param0: string): boolean;
			public startActivityForResult(param0: android.content.Intent, param1: number): void;
			public startActivityForResult(param0: android.content.Intent, param1: number, param2: android.os.Bundle): void;
			public startIntentSenderForResult(param0: android.content.IntentSender, param1: number, param2: android.content.Intent, param3: number, param4: number, param5: number): void;
			public startIntentSenderForResult(param0: android.content.IntentSender, param1: number, param2: android.content.Intent, param3: number, param4: number, param5: number, param6: android.os.Bundle): void;
			public startActivity(param0: android.content.Intent, param1: android.os.Bundle): void;
			public startActivity(param0: android.content.Intent): void;
			public startActivity(param0: android.content.Intent, param1: android.os.Bundle): void;
			public startActivities(param0: native.Array<android.content.Intent>, param1: android.os.Bundle): void;
			public startActivities(param0: native.Array<android.content.Intent>): void;
			public startActivities(param0: native.Array<android.content.Intent>, param1: android.os.Bundle): void;
			public startIntentSender(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: number, param4: number, param5: android.os.Bundle): void;
			public startIntentSender(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: number, param4: number): void;
			public startIntentSender(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: number, param4: number, param5: android.os.Bundle): void;
			public startActivityIfNeeded(param0: android.content.Intent, param1: number): boolean;
			public startActivityIfNeeded(param0: android.content.Intent, param1: number, param2: android.os.Bundle): boolean;
			public startNextMatchingActivity(param0: android.content.Intent): boolean;
			public startNextMatchingActivity(param0: android.content.Intent, param1: android.os.Bundle): boolean;
			public startActivityFromChild(param0: android.app.Activity, param1: android.content.Intent, param2: number): void;
			public startActivityFromChild(param0: android.app.Activity, param1: android.content.Intent, param2: number, param3: android.os.Bundle): void;
			public startActivityFromFragment(param0: android.app.Fragment, param1: android.content.Intent, param2: number): void;
			public startActivityFromFragment(param0: android.app.Fragment, param1: android.content.Intent, param2: number, param3: android.os.Bundle): void;
			public startIntentSenderFromChild(param0: android.app.Activity, param1: android.content.IntentSender, param2: number, param3: android.content.Intent, param4: number, param5: number, param6: number): void;
			public startIntentSenderFromChild(param0: android.app.Activity, param1: android.content.IntentSender, param2: number, param3: android.content.Intent, param4: number, param5: number, param6: number, param7: android.os.Bundle): void;
			public overridePendingTransition(param0: number, param1: number): void;
			public setResult(param0: number): void;
			public setResult(param0: number, param1: android.content.Intent): void;
			public getReferrer(): android.net.Uri;
			public onProvideReferrer(): android.net.Uri;
			public getCallingPackage(): string;
			public getCallingActivity(): android.content.ComponentName;
			public setVisible(param0: boolean): void;
			public isFinishing(): boolean;
			public isDestroyed(): boolean;
			public isChangingConfigurations(): boolean;
			public recreate(): void;
			public finish(): void;
			public finishAffinity(): void;
			public finishFromChild(param0: android.app.Activity): void;
			public finishAfterTransition(): void;
			public finishActivity(param0: number): void;
			public finishActivityFromChild(param0: android.app.Activity, param1: number): void;
			public finishAndRemoveTask(): void;
			public releaseInstance(): boolean;
			public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
			public onActivityReenter(param0: number, param1: android.content.Intent): void;
			public createPendingResult(param0: number, param1: android.content.Intent, param2: number): android.app.PendingIntent;
			public setRequestedOrientation(param0: number): void;
			public getRequestedOrientation(): number;
			public getTaskId(): number;
			public isTaskRoot(): boolean;
			public moveTaskToBack(param0: boolean): boolean;
			public getLocalClassName(): string;
			public getComponentName(): android.content.ComponentName;
			public getPreferences(param0: number): android.content.SharedPreferences;
			public getSystemService(param0: java.lang.Class): java.lang.Object;
			public getSystemService(param0: string): java.lang.Object;
			public setTitle(param0: string): void;
			public setTitle(param0: number): void;
			public setTitleColor(param0: number): void;
			public getTitle(): string;
			public getTitleColor(): number;
			public onTitleChanged(param0: string, param1: number): void;
			public onChildTitleChanged(param0: android.app.Activity, param1: string): void;
			public setTaskDescription(param0: android.app.ActivityManager.TaskDescription): void;
			public setProgressBarVisibility(param0: boolean): void;
			public setProgressBarIndeterminateVisibility(param0: boolean): void;
			public setProgressBarIndeterminate(param0: boolean): void;
			public setProgress(param0: number): void;
			public setSecondaryProgress(param0: number): void;
			public setVolumeControlStream(param0: number): void;
			public getVolumeControlStream(): number;
			public setMediaController(param0: android.media.session.MediaController): void;
			public getMediaController(): android.media.session.MediaController;
			public runOnUiThread(param0: java.lang.Runnable): void;
			public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
			public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
			public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
			public isImmersive(): boolean;
			public requestVisibleBehind(param0: boolean): boolean;
			public onVisibleBehindCanceled(): void;
			public onEnterAnimationComplete(): void;
			public setImmersive(param0: boolean): void;
			public startActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
			public startActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
			public onActionModeStarted(param0: android.view.ActionMode): void;
			public onActionModeFinished(param0: android.view.ActionMode): void;
			public shouldUpRecreateTask(param0: android.content.Intent): boolean;
			public navigateUpTo(param0: android.content.Intent): boolean;
			public navigateUpToFromChild(param0: android.app.Activity, param1: android.content.Intent): boolean;
			public getParentActivityIntent(): android.content.Intent;
			public setEnterSharedElementCallback(param0: android.app.SharedElementCallback): void;
			public setExitSharedElementCallback(param0: android.app.SharedElementCallback): void;
			public postponeEnterTransition(): void;
			public startPostponedEnterTransition(): void;
			public startLockTask(): void;
			public stopLockTask(): void;
			public showLockTaskEscapeMessage(): void;
			public static DEFAULT_KEYS_DIALER: number;
			public static DEFAULT_KEYS_DISABLE: number;
			public static DEFAULT_KEYS_SEARCH_GLOBAL: number;
			public static DEFAULT_KEYS_SEARCH_LOCAL: number;
			public static DEFAULT_KEYS_SHORTCUT: number;
			public static FOCUSED_STATE_SET: native.Array<number>;
			public static RESULT_CANCELED: number;
			public static RESULT_FIRST_USER: number;
			public static RESULT_OK: number;
		}
	}
}
