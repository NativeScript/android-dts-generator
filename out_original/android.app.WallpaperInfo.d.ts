/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />
/// <reference path="./android.content.pm.ServiceInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class WallpaperInfo {
			public constructor();
			public constructor(param0: android.content.Context, param1: android.content.pm.ResolveInfo);
			public getPackageName(): string;
			public getServiceName(): string;
			public getServiceInfo(): android.content.pm.ServiceInfo;
			public getComponent(): android.content.ComponentName;
			public loadLabel(param0: android.content.pm.PackageManager): string;
			public loadIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;
			public loadThumbnail(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;
			public loadAuthor(param0: android.content.pm.PackageManager): string;
			public loadDescription(param0: android.content.pm.PackageManager): string;
			public getSettingsActivity(): string;
			public dump(param0: android.util.Printer, param1: string): void;
			public toString(): string;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public describeContents(): number;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
