/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export class MediaMetadataEditor {
			public apply(): void;
			public clear(): void;
			public addEditableKey(param0: number): void;
			public removeEditableKeys(): void;
			public getEditableKeys(): native.Array<number>;
			public putString(param0: number, param1: string): android.media.MediaMetadataEditor;
			public putLong(param0: number, param1: number): android.media.MediaMetadataEditor;
			public putBitmap(param0: number, param1: android.graphics.Bitmap): android.media.MediaMetadataEditor;
			public putObject(param0: number, param1: java.lang.Object): android.media.MediaMetadataEditor;
			public getLong(param0: number, param1: number): number;
			public getString(param0: number, param1: string): string;
			public getBitmap(param0: number, param1: android.graphics.Bitmap): android.graphics.Bitmap;
			public getObject(param0: number, param1: java.lang.Object): java.lang.Object;
			public static BITMAP_KEY_ARTWORK: number;
			public static RATING_KEY_BY_OTHERS: number;
			public static RATING_KEY_BY_USER: number;
		}
	}
}
