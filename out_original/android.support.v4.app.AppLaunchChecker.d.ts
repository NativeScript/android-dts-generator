/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class AppLaunchChecker {
					public constructor();
					public static hasStartedFromLauncher(param0: android.content.Context): boolean;
					public static onActivityCreate(param0: android.app.Activity): void;
				}
			}
		}
	}
}
