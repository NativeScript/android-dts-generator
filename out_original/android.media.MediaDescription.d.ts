/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export class MediaDescription {
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
			public static CREATOR: android.os.Parcelable.Creator;
		}
		export module MediaDescription {
			export class Builder {
				public constructor();
				public setMediaId(param0: string): android.media.MediaDescription.Builder;
				public setTitle(param0: string): android.media.MediaDescription.Builder;
				public setSubtitle(param0: string): android.media.MediaDescription.Builder;
				public setDescription(param0: string): android.media.MediaDescription.Builder;
				public setIconBitmap(param0: android.graphics.Bitmap): android.media.MediaDescription.Builder;
				public setIconUri(param0: android.net.Uri): android.media.MediaDescription.Builder;
				public setExtras(param0: android.os.Bundle): android.media.MediaDescription.Builder;
				public setMediaUri(param0: android.net.Uri): android.media.MediaDescription.Builder;
				public build(): android.media.MediaDescription;
			}
		}
	}
}
