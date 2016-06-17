/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.ActivityManager.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class ActivityManagerCompat {
					public static isLowRamDevice(param0: android.app.ActivityManager): boolean;
				}
			}
		}
	}
}
