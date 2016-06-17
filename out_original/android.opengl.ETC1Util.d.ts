/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.nio.Buffer.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />

declare module android {
	export module opengl {
		export class ETC1Util {
			public constructor();
			public static loadTexture(param0: number, param1: number, param2: number, param3: number, param4: number, param5: java.io.InputStream): void;
			public static loadTexture(param0: number, param1: number, param2: number, param3: number, param4: number, param5: android.opengl.ETC1Util.ETC1Texture): void;
			public static isETC1Supported(): boolean;
			public static createTexture(param0: java.io.InputStream): android.opengl.ETC1Util.ETC1Texture;
			public static compressTexture(param0: java.nio.Buffer, param1: number, param2: number, param3: number, param4: number): android.opengl.ETC1Util.ETC1Texture;
			public static writeTexture(param0: android.opengl.ETC1Util.ETC1Texture, param1: java.io.OutputStream): void;
		}
		export module ETC1Util {
			export class ETC1Texture {
				public constructor();
				public constructor(param0: number, param1: number, param2: java.nio.ByteBuffer);
				public getWidth(): number;
				public getHeight(): number;
				public getData(): java.nio.ByteBuffer;
			}
		}
	}
}
