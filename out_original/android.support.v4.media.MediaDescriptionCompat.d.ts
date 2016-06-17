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
				export class MediaDescriptionCompat {
					public getMediaId(): string;
					public getTitle(): string;
					public getSubtitle(): string;
					public getDescription(): string;
					public getIconBitmap(): android.graphics.Bitmap;
					public getIconUri(): android.net.Uri;
					public getExtras(): android.os.Bundle;
					public getMediaUri(): android.net.Uri;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public toString(): string;
					public getMediaDescription(): java.lang.Object;
					public static fromMediaDescription(param0: java.lang.Object): android.support.v4.media.MediaDescriptionCompat;
					public static DESCRIPTION_KEY_MEDIA_URI: string;
					public static DESCRIPTION_KEY_NULL_BUNDLE_FLAG: string;
					public static CREATOR: android.os.Parcelable.Creator;
				}
				export module MediaDescriptionCompat {
					export class Builder {
						public constructor();
						public setMediaId(param0: string): android.support.v4.media.MediaDescriptionCompat.Builder;
						public setTitle(param0: string): android.support.v4.media.MediaDescriptionCompat.Builder;
						public setSubtitle(param0: string): android.support.v4.media.MediaDescriptionCompat.Builder;
						public setDescription(param0: string): android.support.v4.media.MediaDescriptionCompat.Builder;
						public setIconBitmap(param0: android.graphics.Bitmap): android.support.v4.media.MediaDescriptionCompat.Builder;
						public setIconUri(param0: android.net.Uri): android.support.v4.media.MediaDescriptionCompat.Builder;
						public setExtras(param0: android.os.Bundle): android.support.v4.media.MediaDescriptionCompat.Builder;
						public setMediaUri(param0: android.net.Uri): android.support.v4.media.MediaDescriptionCompat.Builder;
						public build(): android.support.v4.media.MediaDescriptionCompat;
					}
				}
			}
		}
	}
}
