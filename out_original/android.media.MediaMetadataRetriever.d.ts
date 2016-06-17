/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.media.MediaDataSource.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module media {
		export class MediaMetadataRetriever {
			public constructor();
			public setDataSource(param0: string): void;
			public setDataSource(param0: string, param1: java.util.Map): void;
			public setDataSource(param0: java.io.FileDescriptor, param1: number, param2: number): void;
			public setDataSource(param0: java.io.FileDescriptor): void;
			public setDataSource(param0: android.content.Context, param1: android.net.Uri): void;
			public setDataSource(param0: android.media.MediaDataSource): void;
			public extractMetadata(param0: number): string;
			public getFrameAtTime(param0: number, param1: number): android.graphics.Bitmap;
			public getFrameAtTime(param0: number): android.graphics.Bitmap;
			public getFrameAtTime(): android.graphics.Bitmap;
			public getEmbeddedPicture(): native.Array<number>;
			public release(): void;
			public finalize(): void;
			public static METADATA_KEY_ALBUM: number;
			public static METADATA_KEY_ALBUMARTIST: number;
			public static METADATA_KEY_ARTIST: number;
			public static METADATA_KEY_AUTHOR: number;
			public static METADATA_KEY_BITRATE: number;
			public static METADATA_KEY_CAPTURE_FRAMERATE: number;
			public static METADATA_KEY_CD_TRACK_NUMBER: number;
			public static METADATA_KEY_COMPILATION: number;
			public static METADATA_KEY_COMPOSER: number;
			public static METADATA_KEY_DATE: number;
			public static METADATA_KEY_DISC_NUMBER: number;
			public static METADATA_KEY_DURATION: number;
			public static METADATA_KEY_GENRE: number;
			public static METADATA_KEY_HAS_AUDIO: number;
			public static METADATA_KEY_HAS_VIDEO: number;
			public static METADATA_KEY_LOCATION: number;
			public static METADATA_KEY_MIMETYPE: number;
			public static METADATA_KEY_NUM_TRACKS: number;
			public static METADATA_KEY_TITLE: number;
			public static METADATA_KEY_VIDEO_HEIGHT: number;
			public static METADATA_KEY_VIDEO_ROTATION: number;
			public static METADATA_KEY_VIDEO_WIDTH: number;
			public static METADATA_KEY_WRITER: number;
			public static METADATA_KEY_YEAR: number;
			public static OPTION_CLOSEST: number;
			public static OPTION_CLOSEST_SYNC: number;
			public static OPTION_NEXT_SYNC: number;
			public static OPTION_PREVIOUS_SYNC: number;
		}
	}
}
