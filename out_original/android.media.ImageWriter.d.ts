/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.Image.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />

declare module android {
	export module media {
		export class ImageWriter {
			public static newInstance(param0: android.view.Surface, param1: number): android.media.ImageWriter;
			public getMaxImages(): number;
			public dequeueInputImage(): android.media.Image;
			public queueInputImage(param0: android.media.Image): void;
			public getFormat(): number;
			public setOnImageReleasedListener(param0: android.media.ImageWriter.OnImageReleasedListener, param1: android.os.Handler): void;
			public close(): void;
			public finalize(): void;
		}
		export module ImageWriter {
			export class OnImageReleasedListener {
				public onImageReleased(param0: android.media.ImageWriter): void;
			}
		}
	}
}
