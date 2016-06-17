/// <reference path="./_helpers.d.ts" />

declare module android {
	export module graphics {
		export class ImageFormat {
			public constructor();
			public static getBitsPerPixel(param0: number): number;
			public static DEPTH16: number;
			public static DEPTH_POINT_CLOUD: number;
			public static FLEX_RGBA_8888: number;
			public static FLEX_RGB_888: number;
			public static JPEG: number;
			public static NV16: number;
			public static NV21: number;
			public static PRIVATE: number;
			public static RAW10: number;
			public static RAW12: number;
			public static RAW_SENSOR: number;
			public static RGB_565: number;
			public static UNKNOWN: number;
			public static YUV_420_888: number;
			public static YUV_422_888: number;
			public static YUV_444_888: number;
			public static YUY2: number;
			public static YV12: number;
		}
	}
}
