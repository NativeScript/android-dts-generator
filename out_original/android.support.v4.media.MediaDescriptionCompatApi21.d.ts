/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class MediaDescriptionCompatApi21 {
					public static getMediaId(param0: java.lang.Object): string;
					public static getTitle(param0: java.lang.Object): string;
					public static getSubtitle(param0: java.lang.Object): string;
					public static getDescription(param0: java.lang.Object): string;
					public static getIconBitmap(param0: java.lang.Object): android.graphics.Bitmap;
					public static getIconUri(param0: java.lang.Object): android.net.Uri;
					public static getExtras(param0: java.lang.Object): android.os.Bundle;
					public static writeToParcel(param0: java.lang.Object, param1: android.os.Parcel, param2: number): void;
					public static fromParcel(param0: android.os.Parcel): java.lang.Object;
				}
				export module MediaDescriptionCompatApi21 {
					export class Builder {
						public static newInstance(): java.lang.Object;
						public static setMediaId(param0: java.lang.Object, param1: string): void;
						public static setTitle(param0: java.lang.Object, param1: string): void;
						public static setSubtitle(param0: java.lang.Object, param1: string): void;
						public static setDescription(param0: java.lang.Object, param1: string): void;
						public static setIconBitmap(param0: java.lang.Object, param1: android.graphics.Bitmap): void;
						public static setIconUri(param0: java.lang.Object, param1: android.net.Uri): void;
						public static setExtras(param0: java.lang.Object, param1: android.os.Bundle): void;
						public static build(param0: java.lang.Object): java.lang.Object;
					}
				}
			}
		}
	}
}
