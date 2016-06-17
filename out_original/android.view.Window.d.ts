/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.media.session.MediaController.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.transition.Scene.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.transition.TransitionManager.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.InputEvent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SearchEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.WindowManager.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module view {
		export class Window {
			public constructor();
			public constructor(param0: android.content.Context);
			public getContext(): android.content.Context;
			public getWindowStyle(): android.content.res.TypedArray;
			public setContainer(param0: android.view.Window): void;
			public getContainer(): android.view.Window;
			public hasChildren(): boolean;
			public setWindowManager(param0: android.view.WindowManager, param1: android.os.IBinder, param2: string): void;
			public setWindowManager(param0: android.view.WindowManager, param1: android.os.IBinder, param2: string, param3: boolean): void;
			public getWindowManager(): android.view.WindowManager;
			public setCallback(param0: android.view.Window.Callback): void;
			public getCallback(): android.view.Window.Callback;
			public takeSurface(param0: android.view.SurfaceHolder.Callback2): void;
			public takeInputQueue(param0: android.view.InputQueue.Callback): void;
			public isFloating(): boolean;
			public setLayout(param0: number, param1: number): void;
			public setGravity(param0: number): void;
			public setType(param0: number): void;
			public setFormat(param0: number): void;
			public setWindowAnimations(param0: number): void;
			public setSoftInputMode(param0: number): void;
			public addFlags(param0: number): void;
			public clearFlags(param0: number): void;
			public setFlags(param0: number, param1: number): void;
			public setDimAmount(param0: number): void;
			public setAttributes(param0: android.view.WindowManager.LayoutParams): void;
			public getAttributes(): android.view.WindowManager.LayoutParams;
			public getForcedWindowFlags(): number;
			public hasSoftInputMode(): boolean;
			public requestFeature(param0: number): boolean;
			public makeActive(): void;
			public isActive(): boolean;
			public findViewById(param0: number): android.view.View;
			public setContentView(param0: number): void;
			public setContentView(param0: android.view.View): void;
			public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public getCurrentFocus(): android.view.View;
			public getLayoutInflater(): android.view.LayoutInflater;
			public setTitle(param0: string): void;
			public setTitleColor(param0: number): void;
			public openPanel(param0: number, param1: android.view.KeyEvent): void;
			public closePanel(param0: number): void;
			public togglePanel(param0: number, param1: android.view.KeyEvent): void;
			public invalidatePanelMenu(param0: number): void;
			public performPanelShortcut(param0: number, param1: number, param2: android.view.KeyEvent, param3: number): boolean;
			public performPanelIdentifierAction(param0: number, param1: number, param2: number): boolean;
			public closeAllPanels(): void;
			public performContextMenuIdentifierAction(param0: number, param1: number): boolean;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public setElevation(param0: number): void;
			public setClipToOutline(param0: boolean): void;
			public setBackgroundDrawableResource(param0: number): void;
			public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
			public setFeatureDrawableResource(param0: number, param1: number): void;
			public setFeatureDrawableUri(param0: number, param1: android.net.Uri): void;
			public setFeatureDrawable(param0: number, param1: android.graphics.drawable.Drawable): void;
			public setFeatureDrawableAlpha(param0: number, param1: number): void;
			public setFeatureInt(param0: number, param1: number): void;
			public takeKeyEvents(param0: boolean): void;
			public superDispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public superDispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public superDispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public superDispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public superDispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public getDecorView(): android.view.View;
			public peekDecorView(): android.view.View;
			public saveHierarchyState(): android.os.Bundle;
			public restoreHierarchyState(param0: android.os.Bundle): void;
			public onActive(): void;
			public getFeatures(): number;
			public static getDefaultFeatures(param0: android.content.Context): number;
			public hasFeature(param0: number): boolean;
			public getLocalFeatures(): number;
			public setDefaultWindowFormat(param0: number): void;
			public setChildDrawable(param0: number, param1: android.graphics.drawable.Drawable): void;
			public setChildInt(param0: number, param1: number): void;
			public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
			public setVolumeControlStream(param0: number): void;
			public getVolumeControlStream(): number;
			public setMediaController(param0: android.media.session.MediaController): void;
			public getMediaController(): android.media.session.MediaController;
			public setUiOptions(param0: number): void;
			public setUiOptions(param0: number, param1: number): void;
			public setIcon(param0: number): void;
			public setLogo(param0: number): void;
			public setLocalFocus(param0: boolean, param1: boolean): void;
			public injectInputEvent(param0: android.view.InputEvent): void;
			public getTransitionManager(): android.transition.TransitionManager;
			public setTransitionManager(param0: android.transition.TransitionManager): void;
			public getContentScene(): android.transition.Scene;
			public setEnterTransition(param0: android.transition.Transition): void;
			public setReturnTransition(param0: android.transition.Transition): void;
			public setExitTransition(param0: android.transition.Transition): void;
			public setReenterTransition(param0: android.transition.Transition): void;
			public getEnterTransition(): android.transition.Transition;
			public getReturnTransition(): android.transition.Transition;
			public getExitTransition(): android.transition.Transition;
			public getReenterTransition(): android.transition.Transition;
			public setSharedElementEnterTransition(param0: android.transition.Transition): void;
			public setSharedElementReturnTransition(param0: android.transition.Transition): void;
			public getSharedElementEnterTransition(): android.transition.Transition;
			public getSharedElementReturnTransition(): android.transition.Transition;
			public setSharedElementExitTransition(param0: android.transition.Transition): void;
			public setSharedElementReenterTransition(param0: android.transition.Transition): void;
			public getSharedElementExitTransition(): android.transition.Transition;
			public getSharedElementReenterTransition(): android.transition.Transition;
			public setAllowEnterTransitionOverlap(param0: boolean): void;
			public getAllowEnterTransitionOverlap(): boolean;
			public setAllowReturnTransitionOverlap(param0: boolean): void;
			public getAllowReturnTransitionOverlap(): boolean;
			public getTransitionBackgroundFadeDuration(): number;
			public setTransitionBackgroundFadeDuration(param0: number): void;
			public getSharedElementsUseOverlay(): boolean;
			public setSharedElementsUseOverlay(param0: boolean): void;
			public getStatusBarColor(): number;
			public setStatusBarColor(param0: number): void;
			public getNavigationBarColor(): number;
			public setNavigationBarColor(param0: number): void;
			public static DEFAULT_FEATURES: number;
			public static FEATURE_ACTION_BAR: number;
			public static FEATURE_ACTION_BAR_OVERLAY: number;
			public static FEATURE_ACTION_MODE_OVERLAY: number;
			public static FEATURE_ACTIVITY_TRANSITIONS: number;
			public static FEATURE_CONTENT_TRANSITIONS: number;
			public static FEATURE_CONTEXT_MENU: number;
			public static FEATURE_CUSTOM_TITLE: number;
			public static FEATURE_INDETERMINATE_PROGRESS: number;
			public static FEATURE_LEFT_ICON: number;
			public static FEATURE_NO_TITLE: number;
			public static FEATURE_OPTIONS_PANEL: number;
			public static FEATURE_PROGRESS: number;
			public static FEATURE_RIGHT_ICON: number;
			public static FEATURE_SWIPE_TO_DISMISS: number;
			public static ID_ANDROID_CONTENT: number;
			public static NAVIGATION_BAR_BACKGROUND_TRANSITION_NAME: string;
			public static PROGRESS_END: number;
			public static PROGRESS_INDETERMINATE_OFF: number;
			public static PROGRESS_INDETERMINATE_ON: number;
			public static PROGRESS_SECONDARY_END: number;
			public static PROGRESS_SECONDARY_START: number;
			public static PROGRESS_START: number;
			public static PROGRESS_VISIBILITY_OFF: number;
			public static PROGRESS_VISIBILITY_ON: number;
			public static STATUS_BAR_BACKGROUND_TRANSITION_NAME: string;
		}
		export module Window {
			export class Callback {
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
				public onSearchRequested(): boolean;
				public onSearchRequested(param0: android.view.SearchEvent): boolean;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
				public onActionModeStarted(param0: android.view.ActionMode): void;
				public onActionModeFinished(param0: android.view.ActionMode): void;
			}
		}
	}
}
