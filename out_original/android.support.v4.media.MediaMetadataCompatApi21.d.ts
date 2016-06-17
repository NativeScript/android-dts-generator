/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class MediaMetadataCompatApi21 {
					public static keySet(param0: java.lang.Object): java.util.Set;
					public static getBitmap(param0: java.lang.Object, param1: string): android.graphics.Bitmap;
					public static getLong(param0: java.lang.Object, param1: string): number;
					public static getRating(param0: java.lang.Object, param1: string): java.lang.Object;
					public static getText(param0: java.lang.Object, param1: string): string;
					public static writeToParcel(param0: java.lang.Object, param1: android.os.Parcel, param2: number): void;
					public static createFromParcel(param0: android.os.Parcel): java.lang.Object;
				}
				export module MediaMetadataCompatApi21 {
					export class Builder {
						public constructor();
						public static newInstance(): java.lang.Object;
						public static putBitmap(param0: java.lang.Object, param1: string, param2: android.graphics.Bitmap): void;
						public static putLong(param0: java.lang.Object, param1: string, param2: number): void;
						public static putRating(param0: java.lang.Object, param1: string, param2: java.lang.Object): void;
						public static putText(param0: java.lang.Object, param1: string, param2: string): void;
						public static putString(param0: java.lang.Object, param1: string, param2: string): void;
						public static build(param0: java.lang.Object): java.lang.Object;
					}
				}
			}
		}
	}
}
