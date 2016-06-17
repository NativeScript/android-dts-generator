/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.util.TypedValue.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class BitmapFactory {
			public constructor();
			public static decodeFile(param0: string, param1: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
			public static decodeFile(param0: string): android.graphics.Bitmap;
			public static decodeResourceStream(param0: android.content.res.Resources, param1: android.util.TypedValue, param2: java.io.InputStream, param3: android.graphics.Rect, param4: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
			public static decodeResource(param0: android.content.res.Resources, param1: number, param2: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
			public static decodeResource(param0: android.content.res.Resources, param1: number): android.graphics.Bitmap;
			public static decodeByteArray(param0: native.Array<number>, param1: number, param2: number, param3: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
			public static decodeByteArray(param0: native.Array<number>, param1: number, param2: number): android.graphics.Bitmap;
			public static decodeStream(param0: java.io.InputStream, param1: android.graphics.Rect, param2: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
			public static decodeStream(param0: java.io.InputStream): android.graphics.Bitmap;
			public static decodeFileDescriptor(param0: java.io.FileDescriptor, param1: android.graphics.Rect, param2: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
			public static decodeFileDescriptor(param0: java.io.FileDescriptor): android.graphics.Bitmap;
		}
		export module BitmapFactory {
			export class Options {
				public constructor();
				public requestCancelDecode(): void;
				public inBitmap: android.graphics.Bitmap;
				public inDensity: number;
				public inDither: boolean;
				public inInputShareable: boolean;
				public inJustDecodeBounds: boolean;
				public inMutable: boolean;
				public inPreferQualityOverSpeed: boolean;
				public inPreferredConfig: android.graphics.Bitmap.Config;
				public inPremultiplied: boolean;
				public inPurgeable: boolean;
				public inSampleSize: number;
				public inScaled: boolean;
				public inScreenDensity: number;
				public inTargetDensity: number;
				public inTempStorage: native.Array<number>;
				public mCancel: boolean;
				public outHeight: number;
				public outMimeType: string;
				public outWidth: number;
			}
		}
	}
}
