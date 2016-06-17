/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class KeyEventCompatEclair {
					public static getKeyDispatcherState(param0: android.view.View): java.lang.Object;
					public static dispatch(param0: android.view.KeyEvent, param1: android.view.KeyEvent.Callback, param2: java.lang.Object, param3: java.lang.Object): boolean;
					public static startTracking(param0: android.view.KeyEvent): void;
					public static isTracking(param0: android.view.KeyEvent): boolean;
				}
			}
		}
	}
}
