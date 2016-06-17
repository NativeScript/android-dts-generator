/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class AppOpsManagerCompat {
					public static permissionToOp(param0: string): string;
					public static noteOp(param0: android.content.Context, param1: string, param2: number, param3: string): number;
					public static noteProxyOp(param0: android.content.Context, param1: string, param2: string): number;
					public static MODE_ALLOWED: number;
					public static MODE_IGNORED: number;
					public static MODE_DEFAULT: number;
				}
				export module AppOpsManagerCompat {
					export class AppOpsManager23 {
						public permissionToOp(param0: string): string;
						public noteOp(param0: android.content.Context, param1: string, param2: number, param3: string): number;
						public noteProxyOp(param0: android.content.Context, param1: string, param2: string): number;
					}
					export class AppOpsManagerImpl {
						public permissionToOp(param0: string): string;
						public noteOp(param0: android.content.Context, param1: string, param2: number, param3: string): number;
						public noteProxyOp(param0: android.content.Context, param1: string, param2: string): number;
					}
				}
			}
		}
	}
}
