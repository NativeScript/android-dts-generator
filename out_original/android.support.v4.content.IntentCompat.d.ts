/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class IntentCompat {
					public static makeMainActivity(param0: android.content.ComponentName): android.content.Intent;
					public static makeMainSelectorActivity(param0: string, param1: string): android.content.Intent;
					public static makeRestartActivityTask(param0: android.content.ComponentName): android.content.Intent;
					public static ACTION_EXTERNAL_APPLICATIONS_AVAILABLE: string;
					public static ACTION_EXTERNAL_APPLICATIONS_UNAVAILABLE: string;
					public static EXTRA_CHANGED_PACKAGE_LIST: string;
					public static EXTRA_CHANGED_UID_LIST: string;
					public static EXTRA_HTML_TEXT: string;
					public static CATEGORY_LEANBACK_LAUNCHER: string;
					public static FLAG_ACTIVITY_TASK_ON_HOME: number;
					public static FLAG_ACTIVITY_CLEAR_TASK: number;
				}
				export module IntentCompat {
					export class IntentCompatImpl {
						public makeMainActivity(param0: android.content.ComponentName): android.content.Intent;
						public makeMainSelectorActivity(param0: string, param1: string): android.content.Intent;
						public makeRestartActivityTask(param0: android.content.ComponentName): android.content.Intent;
					}
					export class IntentCompatImplBase {
						public makeMainActivity(param0: android.content.ComponentName): android.content.Intent;
						public makeMainSelectorActivity(param0: string, param1: string): android.content.Intent;
						public makeRestartActivityTask(param0: android.content.ComponentName): android.content.Intent;
					}
					export class IntentCompatImplHC {
						public makeMainActivity(param0: android.content.ComponentName): android.content.Intent;
						public makeRestartActivityTask(param0: android.content.ComponentName): android.content.Intent;
					}
					export class IntentCompatImplIcsMr1 {
						public makeMainSelectorActivity(param0: string, param1: string): android.content.Intent;
					}
				}
			}
		}
	}
}
