/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class WindowCallbackWrapper {
					public constructor();
					public constructor(param0: android.view.Window.Callback);
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
					public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
					public onContentChanged(): void;
					public onWindowFocusChanged(param0: boolean): void;
					public onAttachedToWindow(): void;
					public onDetachedFromWindow(): void;
					public onPanelClosed(param0: number, param1: android.view.Menu): void;
					public onSearchRequested(param0: android.view.SearchEvent): boolean;
					public onSearchRequested(): boolean;
					public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
					public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
					public onActionModeStarted(param0: android.view.ActionMode): void;
					public onActionModeFinished(param0: android.view.ActionMode): void;
				}
			}
		}
	}
}
