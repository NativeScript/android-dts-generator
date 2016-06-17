/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.media.MediaDescription.d.ts" />
/// <reference path="./android.media.Rating.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module media {
		export class MediaMetadata {
			public containsKey(param0: string): boolean;
			public getText(param0: string): string;
			public getString(param0: string): string;
			public getLong(param0: string): number;
			public getRating(param0: string): android.media.Rating;
			public getBitmap(param0: string): android.graphics.Bitmap;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public size(): number;
			public keySet(): java.util.Set;
			public getDescription(): android.media.MediaDescription;
			public static CREATOR: android.os.Parcelable.Creator;
			public static METADATA_KEY_ALBUM: string;
			public static METADATA_KEY_ALBUM_ART: string;
			public static METADATA_KEY_ALBUM_ARTIST: string;
			public static METADATA_KEY_ALBUM_ART_URI: string;
			public static METADATA_KEY_ART: string;
			public static METADATA_KEY_ARTIST: string;
			public static METADATA_KEY_ART_URI: string;
			public static METADATA_KEY_AUTHOR: string;
			public static METADATA_KEY_COMPILATION: string;
			public static METADATA_KEY_COMPOSER: string;
			public static METADATA_KEY_DATE: string;
			public static METADATA_KEY_DISC_NUMBER: string;
			public static METADATA_KEY_DISPLAY_DESCRIPTION: string;
			public static METADATA_KEY_DISPLAY_ICON: string;
			public static METADATA_KEY_DISPLAY_ICON_URI: string;
			public static METADATA_KEY_DISPLAY_SUBTITLE: string;
			public static METADATA_KEY_DISPLAY_TITLE: string;
			public static METADATA_KEY_DURATION: string;
			public static METADATA_KEY_GENRE: string;
			public static METADATA_KEY_MEDIA_ID: string;
			public static METADATA_KEY_NUM_TRACKS: string;
			public static METADATA_KEY_RATING: string;
			public static METADATA_KEY_TITLE: string;
			public static METADATA_KEY_TRACK_NUMBER: string;
			public static METADATA_KEY_USER_RATING: string;
			public static METADATA_KEY_WRITER: string;
			public static METADATA_KEY_YEAR: string;
		}
		export module MediaMetadata {
			export class Builder {
				public constructor();
				public constructor(param0: android.media.MediaMetadata);
				public putText(param0: string, param1: string): android.media.MediaMetadata.Builder;
				public putString(param0: string, param1: string): android.media.MediaMetadata.Builder;
				public putLong(param0: string, param1: number): android.media.MediaMetadata.Builder;
				public putRating(param0: string, param1: android.media.Rating): android.media.MediaMetadata.Builder;
				public putBitmap(param0: string, param1: android.graphics.Bitmap): android.media.MediaMetadata.Builder;
				public build(): android.media.MediaMetadata;
			}
		}
	}
}
