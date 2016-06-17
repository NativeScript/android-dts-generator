/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.content.pm.ActivityInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.pm.ProviderInfo.d.ts" />
/// <reference path="./android.content.pm.ServiceInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class ResolveInfo {
				public constructor();
				public constructor(param0: android.content.pm.ResolveInfo);
				public loadLabel(param0: android.content.pm.PackageManager): string;
				public loadIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;
				public getIconResource(): number;
				public dump(param0: android.util.Printer, param1: string): void;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public activityInfo: android.content.pm.ActivityInfo;
				public filter: android.content.IntentFilter;
				public icon: number;
				public isDefault: boolean;
				public labelRes: number;
				public match: number;
				public nonLocalizedLabel: string;
				public preferredOrder: number;
				public priority: number;
				public providerInfo: android.content.pm.ProviderInfo;
				public resolvePackageName: string;
				public serviceInfo: android.content.pm.ServiceInfo;
				public specificIndex: number;
			}
			export module ResolveInfo {
				export class DisplayNameComparator {
					public constructor();
					public constructor(param0: android.content.pm.PackageManager);
					public compare(param0: android.content.pm.ResolveInfo, param1: android.content.pm.ResolveInfo): number;
				}
			}
		}
	}
}
