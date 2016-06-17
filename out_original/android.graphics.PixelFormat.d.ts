/// <reference path="./_helpers.d.ts" />

declare module android {
	export module graphics {
		export class PixelFormat {
			public constructor();
			public static getPixelFormatInfo(param0: number, param1: android.graphics.PixelFormat): void;
			public static formatHasAlpha(param0: number): boolean;
			public static A_8: number;
			public static JPEG: number;
			public static LA_88: number;
			public static L_8: number;
			public static OPAQUE: number;
			public static RGBA_4444: number;
			public static RGBA_5551: number;
			public static RGBA_8888: number;
			public static RGBX_8888: number;
			public static RGB_332: number;
			public static RGB_565: number;
			public static RGB_888: number;
			public static TRANSLUCENT: number;
			public static TRANSPARENT: number;
			public static UNKNOWN: number;
			public static YCbCr_420_SP: number;
			public static YCbCr_422_I: number;
			public static YCbCr_422_SP: number;
			public bitsPerPixel: number;
			public bytesPerPixel: number;
		}
	}
}
