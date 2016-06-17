/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class KeyEventCompat {
					public static normalizeMetaState(param0: number): number;
					public static metaStateHasModifiers(param0: number, param1: number): boolean;
					public static metaStateHasNoModifiers(param0: number): boolean;
					public static hasModifiers(param0: android.view.KeyEvent, param1: number): boolean;
					public static hasNoModifiers(param0: android.view.KeyEvent): boolean;
					public static startTracking(param0: android.view.KeyEvent): void;
					public static isTracking(param0: android.view.KeyEvent): boolean;
					public static getKeyDispatcherState(param0: android.view.View): java.lang.Object;
					public static dispatch(param0: android.view.KeyEvent, param1: android.view.KeyEvent.Callback, param2: java.lang.Object, param3: java.lang.Object): boolean;
				}
				export module KeyEventCompat {
					export class BaseKeyEventVersionImpl {
						public normalizeMetaState(param0: number): number;
						public metaStateHasModifiers(param0: number, param1: number): boolean;
						public metaStateHasNoModifiers(param0: number): boolean;
						public startTracking(param0: android.view.KeyEvent): void;
						public isTracking(param0: android.view.KeyEvent): boolean;
						public getKeyDispatcherState(param0: android.view.View): java.lang.Object;
						public dispatch(param0: android.view.KeyEvent, param1: android.view.KeyEvent.Callback, param2: java.lang.Object, param3: java.lang.Object): boolean;
					}
					export class EclairKeyEventVersionImpl {
						public startTracking(param0: android.view.KeyEvent): void;
						public isTracking(param0: android.view.KeyEvent): boolean;
						public getKeyDispatcherState(param0: android.view.View): java.lang.Object;
						public dispatch(param0: android.view.KeyEvent, param1: android.view.KeyEvent.Callback, param2: java.lang.Object, param3: java.lang.Object): boolean;
					}
					export class HoneycombKeyEventVersionImpl {
						public normalizeMetaState(param0: number): number;
						public metaStateHasModifiers(param0: number, param1: number): boolean;
						public metaStateHasNoModifiers(param0: number): boolean;
					}
					export class KeyEventVersionImpl {
						public normalizeMetaState(param0: number): number;
						public metaStateHasModifiers(param0: number, param1: number): boolean;
						public metaStateHasNoModifiers(param0: number): boolean;
						public startTracking(param0: android.view.KeyEvent): void;
						public isTracking(param0: android.view.KeyEvent): boolean;
						public getKeyDispatcherState(param0: android.view.View): java.lang.Object;
						public dispatch(param0: android.view.KeyEvent, param1: android.view.KeyEvent.Callback, param2: java.lang.Object, param3: java.lang.Object): boolean;
					}
				}
			}
		}
	}
}
