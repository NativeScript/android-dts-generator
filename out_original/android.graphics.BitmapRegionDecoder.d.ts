/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class BitmapRegionDecoder {
			public static newInstance(param0: native.Array<number>, param1: number, param2: number, param3: boolean): android.graphics.BitmapRegionDecoder;
			public static newInstance(param0: java.io.FileDescriptor, param1: boolean): android.graphics.BitmapRegionDecoder;
			public static newInstance(param0: java.io.InputStream, param1: boolean): android.graphics.BitmapRegionDecoder;
			public static newInstance(param0: string, param1: boolean): android.graphics.BitmapRegionDecoder;
			public decodeRegion(param0: android.graphics.Rect, param1: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
			public getWidth(): number;
			public getHeight(): number;
			public recycle(): void;
			public isRecycled(): boolean;
			public finalize(): void;
		}
	}
}
