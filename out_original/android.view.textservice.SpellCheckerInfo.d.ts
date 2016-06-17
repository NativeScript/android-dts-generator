/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.pm.ServiceInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.textservice.SpellCheckerSubtype.d.ts" />

declare module android {
	export module view {
		export module textservice {
			export class SpellCheckerInfo {
				public getId(): string;
				public getComponent(): android.content.ComponentName;
				public getPackageName(): string;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public loadLabel(param0: android.content.pm.PackageManager): string;
				public loadIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;
				public getServiceInfo(): android.content.pm.ServiceInfo;
				public getSettingsActivity(): string;
				public getSubtypeCount(): number;
				public getSubtypeAt(param0: number): android.view.textservice.SpellCheckerSubtype;
				public describeContents(): number;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
