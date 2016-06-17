/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />

declare module android {
	export module graphics {
		export class Picture {
			public constructor();
			public constructor(param0: android.graphics.Picture);
			public finalize(): void;
			public beginRecording(param0: number, param1: number): android.graphics.Canvas;
			public endRecording(): void;
			public getWidth(): number;
			public getHeight(): number;
			public draw(param0: android.graphics.Canvas): void;
			public static createFromStream(param0: java.io.InputStream): android.graphics.Picture;
			public writeToStream(param0: java.io.OutputStream): void;
		}
	}
}
