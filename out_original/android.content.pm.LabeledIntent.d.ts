/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class LabeledIntent {
				public constructor();
				public constructor(param0: android.content.Intent);
				public constructor(param0: string);
				public constructor(param0: string, param1: android.net.Uri);
				public constructor(param0: android.content.Context, param1: java.lang.Class);
				public constructor(param0: string, param1: android.net.Uri, param2: android.content.Context, param3: java.lang.Class);
				public constructor(param0: android.content.Intent, param1: string, param2: number, param3: number);
				public constructor(param0: android.content.Intent, param1: string, param2: string, param3: number);
				public constructor(param0: string, param1: number, param2: number);
				public constructor(param0: string, param1: string, param2: number);
				public getSourcePackage(): string;
				public getLabelResource(): number;
				public getNonLocalizedLabel(): string;
				public getIconResource(): number;
				public loadLabel(param0: android.content.pm.PackageManager): string;
				public loadIcon(param0: android.content.pm.PackageManager): android.graphics.drawable.Drawable;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public readFromParcel(param0: android.os.Parcel): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
