/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.content.pm.PackageItemInfo.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class ComponentInfo {
				public constructor(param0: android.content.pm.PackageItemInfo);
				public constructor(param0: android.os.Parcel);
				public constructor();
				public constructor(param0: android.content.pm.ComponentInfo);
				public constructor(param0: android.os.Parcel);
				public loadLabel(param0: android.content.pm.PackageManager): string;
				public isEnabled(): boolean;
				public getIconResource(): number;
				public getLogoResource(): number;
				public getBannerResource(): number;
				public dumpFront(param0: android.util.Printer, param1: string): void;
				public dumpBack(param0: android.util.Printer, param1: string): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public applicationInfo: android.content.pm.ApplicationInfo;
				public descriptionRes: number;
				public enabled: boolean;
				public exported: boolean;
				public processName: string;
			}
		}
	}
}
