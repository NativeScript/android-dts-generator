/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.pm.ActivityInfo.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class NavUtilsJB {
					public static getParentActivityIntent(param0: android.app.Activity): android.content.Intent;
					public static shouldUpRecreateTask(param0: android.app.Activity, param1: android.content.Intent): boolean;
					public static navigateUpTo(param0: android.app.Activity, param1: android.content.Intent): void;
					public static getParentActivityName(param0: android.content.pm.ActivityInfo): string;
				}
			}
		}
	}
}
