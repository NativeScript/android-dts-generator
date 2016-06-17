/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.pm.ActivityInfo.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class NavUtils {
					public static shouldUpRecreateTask(param0: android.app.Activity, param1: android.content.Intent): boolean;
					public static navigateUpFromSameTask(param0: android.app.Activity): void;
					public static navigateUpTo(param0: android.app.Activity, param1: android.content.Intent): void;
					public static getParentActivityIntent(param0: android.app.Activity): android.content.Intent;
					public static getParentActivityIntent(param0: android.content.Context, param1: java.lang.Class): android.content.Intent;
					public static getParentActivityIntent(param0: android.content.Context, param1: android.content.ComponentName): android.content.Intent;
					public static getParentActivityName(param0: android.app.Activity): string;
					public static getParentActivityName(param0: android.content.Context, param1: android.content.ComponentName): string;
					public static PARENT_ACTIVITY: string;
				}
				export module NavUtils {
					export class NavUtilsImpl {
						public getParentActivityIntent(param0: android.app.Activity): android.content.Intent;
						public shouldUpRecreateTask(param0: android.app.Activity, param1: android.content.Intent): boolean;
						public navigateUpTo(param0: android.app.Activity, param1: android.content.Intent): void;
						public getParentActivityName(param0: android.content.Context, param1: android.content.pm.ActivityInfo): string;
					}
					export class NavUtilsImplBase {
						public getParentActivityIntent(param0: android.app.Activity): android.content.Intent;
						public shouldUpRecreateTask(param0: android.app.Activity, param1: android.content.Intent): boolean;
						public navigateUpTo(param0: android.app.Activity, param1: android.content.Intent): void;
						public getParentActivityName(param0: android.content.Context, param1: android.content.pm.ActivityInfo): string;
					}
					export class NavUtilsImplJB {
						public getParentActivityIntent(param0: android.app.Activity): android.content.Intent;
						public shouldUpRecreateTask(param0: android.app.Activity, param1: android.content.Intent): boolean;
						public navigateUpTo(param0: android.app.Activity, param1: android.content.Intent): void;
						public getParentActivityName(param0: android.content.Context, param1: android.content.pm.ActivityInfo): string;
					}
				}
			}
		}
	}
}
