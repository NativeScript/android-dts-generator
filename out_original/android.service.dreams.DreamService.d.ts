/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.Window.d.ts" />
/// <reference path="./android.view.WindowManager.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />

declare module android {
	export module service {
		export module dreams {
			export class DreamService {
				public constructor(param0: android.content.Context);
				public constructor();
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
				public getWindowManager(): android.view.WindowManager;
				public getWindow(): android.view.Window;
				public setContentView(param0: number): void;
				public setContentView(param0: android.view.View): void;
				public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public findViewById(param0: number): android.view.View;
				public setInteractive(param0: boolean): void;
				public isInteractive(): boolean;
				public setFullscreen(param0: boolean): void;
				public isFullscreen(): boolean;
				public setScreenBright(param0: boolean): void;
				public isScreenBright(): boolean;
				public onCreate(): void;
				public onDreamingStarted(): void;
				public onDreamingStopped(): void;
				public onWakeUp(): void;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public finish(): void;
				public wakeUp(): void;
				public onDestroy(): void;
				public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
				public static DREAM_META_DATA: string;
				public static SERVICE_INTERFACE: string;
			}
		}
	}
}
