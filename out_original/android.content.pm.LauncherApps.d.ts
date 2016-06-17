/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.pm.LauncherActivityInfo.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class LauncherApps {
				public getActivityList(param0: string, param1: android.os.UserHandle): java.util.List;
				public resolveActivity(param0: android.content.Intent, param1: android.os.UserHandle): android.content.pm.LauncherActivityInfo;
				public startMainActivity(param0: android.content.ComponentName, param1: android.os.UserHandle, param2: android.graphics.Rect, param3: android.os.Bundle): void;
				public startAppDetailsActivity(param0: android.content.ComponentName, param1: android.os.UserHandle, param2: android.graphics.Rect, param3: android.os.Bundle): void;
				public isPackageEnabled(param0: string, param1: android.os.UserHandle): boolean;
				public isActivityEnabled(param0: android.content.ComponentName, param1: android.os.UserHandle): boolean;
				public registerCallback(param0: android.content.pm.LauncherApps.Callback): void;
				public registerCallback(param0: android.content.pm.LauncherApps.Callback, param1: android.os.Handler): void;
				public unregisterCallback(param0: android.content.pm.LauncherApps.Callback): void;
			}
			export module LauncherApps {
				export class Callback {
					public constructor();
					public onPackageRemoved(param0: string, param1: android.os.UserHandle): void;
					public onPackageAdded(param0: string, param1: android.os.UserHandle): void;
					public onPackageChanged(param0: string, param1: android.os.UserHandle): void;
					public onPackagesAvailable(param0: native.Array<string>, param1: android.os.UserHandle, param2: boolean): void;
					public onPackagesUnavailable(param0: native.Array<string>, param1: android.os.UserHandle, param2: boolean): void;
				}
			}
		}
	}
}
