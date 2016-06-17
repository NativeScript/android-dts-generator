/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />

declare module android {
	export module media {
		export class Image {
			public getFormat(): number;
			public getWidth(): number;
			public getHeight(): number;
			public getTimestamp(): number;
			public setTimestamp(param0: number): void;
			public getCropRect(): android.graphics.Rect;
			public setCropRect(param0: android.graphics.Rect): void;
			public getPlanes(): native.Array<android.media.Image.Plane>;
			public close(): void;
		}
		export module Image {
			export class Plane {
				public getRowStride(): number;
				public getPixelStride(): number;
				public getBuffer(): java.nio.ByteBuffer;
			}
		}
	}
}
