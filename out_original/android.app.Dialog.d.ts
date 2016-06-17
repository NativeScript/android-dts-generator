/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.ActionBar.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.Window.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module app {
		export class Dialog {
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);
			public getContext(): android.content.Context;
			public getActionBar(): android.app.ActionBar;
			public setOwnerActivity(param0: android.app.Activity): void;
			public getOwnerActivity(): android.app.Activity;
			public isShowing(): boolean;
			public create(): void;
			public show(): void;
			public hide(): void;
			public dismiss(): void;
			public onCreate(param0: android.os.Bundle): void;
			public onStart(): void;
			public onStop(): void;
			public onSaveInstanceState(): android.os.Bundle;
			public onRestoreInstanceState(param0: android.os.Bundle): void;
			public getWindow(): android.view.Window;
			public getCurrentFocus(): android.view.View;
			public findViewById(param0: number): android.view.View;
			public setContentView(param0: number): void;
			public setContentView(param0: android.view.View): void;
			public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public setTitle(param0: string): void;
			public setTitle(param0: number): void;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public onBackPressed(): void;
			public onKeyShortcut(param0: number, param1: android.view.KeyEvent): boolean;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public onTrackballEvent(param0: android.view.MotionEvent): boolean;
			public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
			public onContentChanged(): void;
			public onWindowFocusChanged(param0: boolean): void;
			public onAttachedToWindow(): void;
			public onDetachedFromWindow(): void;
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
			public onCreateOptionsMenu(param0: android.view.Menu): boolean;
			public onPrepareOptionsMenu(param0: android.view.Menu): boolean;
			public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
			public onOptionsMenuClosed(param0: android.view.Menu): void;
			public openOptionsMenu(): void;
			public closeOptionsMenu(): void;
			public invalidateOptionsMenu(): void;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public registerForContextMenu(param0: android.view.View): void;
			public unregisterForContextMenu(param0: android.view.View): void;
			public openContextMenu(param0: android.view.View): void;
			public onContextItemSelected(param0: android.view.MenuItem): boolean;
			public onContextMenuClosed(param0: android.view.Menu): void;
			public onSearchRequested(param0: android.view.SearchEvent): boolean;
			public onSearchRequested(): boolean;
			public getSearchEvent(): android.view.SearchEvent;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
			public onActionModeStarted(param0: android.view.ActionMode): void;
			public onActionModeFinished(param0: android.view.ActionMode): void;
			public takeKeyEvents(param0: boolean): void;
			public requestWindowFeature(param0: number): boolean;
			public setFeatureDrawableResource(param0: number, param1: number): void;
			public setFeatureDrawableUri(param0: number, param1: android.net.Uri): void;
			public setFeatureDrawable(param0: number, param1: android.graphics.drawable.Drawable): void;
			public setFeatureDrawableAlpha(param0: number, param1: number): void;
			public getLayoutInflater(): android.view.LayoutInflater;
			public setCancelable(param0: boolean): void;
			public setCanceledOnTouchOutside(param0: boolean): void;
			public cancel(): void;
			public setOnCancelListener(param0: android.content.DialogInterface.OnCancelListener): void;
			public setCancelMessage(param0: android.os.Message): void;
			public setOnDismissListener(param0: android.content.DialogInterface.OnDismissListener): void;
			public setOnShowListener(param0: android.content.DialogInterface.OnShowListener): void;
			public setDismissMessage(param0: android.os.Message): void;
			public setVolumeControlStream(param0: number): void;
			public getVolumeControlStream(): number;
			public setOnKeyListener(param0: android.content.DialogInterface.OnKeyListener): void;
		}
	}
}
