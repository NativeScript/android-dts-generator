/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class ActivityCompat22 {
					public static getReferrer(param0: android.app.Activity): android.net.Uri;
				}
			}
		}
	}
}
