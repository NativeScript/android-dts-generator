/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class LauncherActivityInfo {
				public getComponentName(): android.content.ComponentName;
				public getUser(): android.os.UserHandle;
				public getLabel(): string;
				public getIcon(param0: number): android.graphics.drawable.Drawable;
				public getApplicationInfo(): android.content.pm.ApplicationInfo;
				public getFirstInstallTime(): number;
				public getName(): string;
				public getBadgedIcon(param0: number): android.graphics.drawable.Drawable;
			}
		}
	}
}
