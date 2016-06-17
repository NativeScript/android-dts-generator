/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class WakefulBroadcastReceiver {
					public constructor();
					public static startWakefulService(param0: android.content.Context, param1: android.content.Intent): android.content.ComponentName;
					public static completeWakefulIntent(param0: android.content.Intent): boolean;
				}
			}
		}
	}
}
