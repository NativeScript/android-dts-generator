/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.content.res.XmlResourceParser.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class PackageItemInfo {
				public constructor();
				public constructor(param0: android.content.pm.PackageItemInfo);
				public constructor(param0: android.os.Parcel);
				public loadLabel(param0: android.content.pm.PackageManager): string;
				public loadIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;
				public loadUnbadgedIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;
				public loadBanner(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;
				public loadLogo(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;
				public loadXmlMetaData(param0: android.content.pm.PackageManager, param1: string): android.content.res.XmlResourceParser;
				public dumpFront(param0: android.util.Printer, param1: string): void;
				public dumpBack(param0: android.util.Printer, param1: string): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public banner: number;
				public icon: number;
				public labelRes: number;
				public logo: number;
				public metaData: android.os.Bundle;
				public name: string;
				public nonLocalizedLabel: string;
				public packageName: string;
			}
			export module PackageItemInfo {
				export class DisplayNameComparator {
					public constructor();
					public constructor(param0: android.content.pm.PackageManager);
					public compare(param0: android.content.pm.PackageItemInfo, param1: android.content.pm.PackageItemInfo): number;
				}
			}
		}
	}
}
