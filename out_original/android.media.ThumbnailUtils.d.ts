/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export class ThumbnailUtils {
			public constructor();
			public static createVideoThumbnail(param0: string, param1: number): android.graphics.Bitmap;
			public static extractThumbnail(param0: android.graphics.Bitmap, param1: number, param2: number): android.graphics.Bitmap;
			public static extractThumbnail(param0: android.graphics.Bitmap, param1: number, param2: number, param3: number): android.graphics.Bitmap;
			public static OPTIONS_RECYCLE_INPUT: number;
		}
	}
}
