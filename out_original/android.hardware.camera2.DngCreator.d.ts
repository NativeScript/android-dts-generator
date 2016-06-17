/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.hardware.camera2.CameraCharacteristics.d.ts" />
/// <reference path="./android.hardware.camera2.CaptureResult.d.ts" />
/// <reference path="./android.location.Location.d.ts" />
/// <reference path="./android.media.Image.d.ts" />
/// <reference path="./android.util.Size.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export class DngCreator {
				public constructor();
				public constructor(param0: android.hardware.camera2.CameraCharacteristics, param1: android.hardware.camera2.CaptureResult);
				public setOrientation(param0: number): android.hardware.camera2.DngCreator;
				public setThumbnail(param0: android.graphics.Bitmap): android.hardware.camera2.DngCreator;
				public setThumbnail(param0: android.media.Image): android.hardware.camera2.DngCreator;
				public setLocation(param0: android.location.Location): android.hardware.camera2.DngCreator;
				public setDescription(param0: string): android.hardware.camera2.DngCreator;
				public writeInputStream(param0: java.io.OutputStream, param1: android.util.Size, param2: java.io.InputStream, param3: number): void;
				public writeByteBuffer(param0: java.io.OutputStream, param1: android.util.Size, param2: java.nio.ByteBuffer, param3: number): void;
				public writeImage(param0: java.io.OutputStream, param1: android.media.Image): void;
				public close(): void;
				public finalize(): void;
				public static MAX_THUMBNAIL_DIMENSION: number;
			}
		}
	}
}
