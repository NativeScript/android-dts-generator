/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />

declare module android {
	export module graphics {
		export class YuvImage {
			public constructor();
			public constructor(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: native.Array<number>);
			public compressToJpeg(param0: android.graphics.Rect, param1: number, param2: java.io.OutputStream): boolean;
			public getYuvData(): native.Array<number>;
			public getYuvFormat(): number;
			public getStrides(): native.Array<number>;
			public getWidth(): number;
			public getHeight(): number;
		}
	}
}
