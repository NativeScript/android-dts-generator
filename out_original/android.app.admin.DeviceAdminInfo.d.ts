/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.ActivityInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export module admin {
			export class DeviceAdminInfo {
				public constructor();
				public constructor(param0: android.content.Context, param1: android.content.pm.ResolveInfo);
				public getPackageName(): string;
				public getReceiverName(): string;
				public getActivityInfo(): android.content.pm.ActivityInfo;
				public getComponent(): android.content.ComponentName;
				public loadLabel(param0: android.content.pm.PackageManager): string;
				public loadDescription(param0: android.content.pm.PackageManager): string;
				public loadIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;
				public isVisible(): boolean;
				public usesPolicy(param0: number): boolean;
				public getTagForPolicy(param0: number): string;
				public dump(param0: android.util.Printer, param1: string): void;
				public toString(): string;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public static CREATOR: android.os.Parcelable.Creator;
				public static USES_ENCRYPTED_STORAGE: number;
				public static USES_POLICY_DISABLE_CAMERA: number;
				public static USES_POLICY_DISABLE_KEYGUARD_FEATURES: number;
				public static USES_POLICY_EXPIRE_PASSWORD: number;
				public static USES_POLICY_FORCE_LOCK: number;
				public static USES_POLICY_LIMIT_PASSWORD: number;
				public static USES_POLICY_RESET_PASSWORD: number;
				public static USES_POLICY_WATCH_LOGIN: number;
				public static USES_POLICY_WIPE_DATA: number;
			}
		}
	}
}
