/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class AppOpsManagerCompat23 {
					public static permissionToOp(param0: string): string;
					public static noteOp(param0: android.content.Context, param1: string, param2: number, param3: string): number;
					public static noteProxyOp(param0: android.content.Context, param1: string, param2: string): number;
				}
			}
		}
	}
}
