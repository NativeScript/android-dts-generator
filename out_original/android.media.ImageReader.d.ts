/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.Image.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />

declare module android {
	export module media {
		export class ImageReader {
			public static newInstance(param0: number, param1: number, param2: number, param3: number): android.media.ImageReader;
			public getWidth(): number;
			public getHeight(): number;
			public getImageFormat(): number;
			public getMaxImages(): number;
			public getSurface(): android.view.Surface;
			public acquireLatestImage(): android.media.Image;
			public acquireNextImage(): android.media.Image;
			public setOnImageAvailableListener(param0: android.media.ImageReader.OnImageAvailableListener, param1: android.os.Handler): void;
			public close(): void;
			public finalize(): void;
		}
		export module ImageReader {
			export class OnImageAvailableListener {
				public onImageAvailable(param0: android.media.ImageReader): void;
			}
		}
	}
}
