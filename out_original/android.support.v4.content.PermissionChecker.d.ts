/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class PermissionChecker {
					public static checkPermission(param0: android.content.Context, param1: string, param2: number, param3: number, param4: string): number;
					public static checkSelfPermission(param0: android.content.Context, param1: string): number;
					public static checkCallingPermission(param0: android.content.Context, param1: string, param2: string): number;
					public static checkCallingOrSelfPermission(param0: android.content.Context, param1: string): number;
					public static PERMISSION_GRANTED: number;
					public static PERMISSION_DENIED: number;
					public static PERMISSION_DENIED_APP_OP: number;
				}
				export module PermissionChecker {
					export class PermissionResult {
					}
				}
			}
		}
	}
}
