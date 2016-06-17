/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class ActivityCompatApi23 {
					public static requestPermissions(param0: android.app.Activity, param1: native.Array<string>, param2: number): void;
					public static shouldShowRequestPermissionRationale(param0: android.app.Activity, param1: string): boolean;
				}
				export module ActivityCompatApi23 {
					export class RequestPermissionsRequestCodeValidator {
						public validateRequestPermissionsRequestCode(param0: number): void;
					}
				}
			}
		}
	}
}
