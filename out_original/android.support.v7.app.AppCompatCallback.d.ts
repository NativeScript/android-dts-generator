/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v7.view.ActionMode.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatCallback {
					public onSupportActionModeStarted(param0: android.support.v7.view.ActionMode): void;
					public onSupportActionModeFinished(param0: android.support.v7.view.ActionMode): void;
					public onWindowStartingSupportActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
				}
			}
		}
	}
}
