/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class ShareCompatICS {
					public static configureMenuItem(param0: android.view.MenuItem, param1: android.app.Activity, param2: android.content.Intent): void;
				}
			}
		}
	}
}
