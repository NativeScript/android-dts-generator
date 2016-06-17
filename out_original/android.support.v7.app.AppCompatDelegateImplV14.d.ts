/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatDelegateImplV14 {
					public onCreate(param0: android.os.Bundle): void;
					public setHandleNativeActionModesEnabled(param0: boolean): void;
					public isHandleNativeActionModesEnabled(): boolean;
					public applyDayNight(): boolean;
					public setLocalNightMode(param0: number): void;
					public onSaveInstanceState(param0: android.os.Bundle): void;
				}
				export module AppCompatDelegateImplV14 {
					export class AppCompatWindowCallbackV14 {
						public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
						public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
					}
				}
			}
		}
	}
}
