/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module util {
		export class DisplayMetrics {
			public constructor();
			public setTo(param0: android.util.DisplayMetrics): void;
			public setToDefaults(): void;
			public equals(param0: java.lang.Object): boolean;
			public equals(param0: android.util.DisplayMetrics): boolean;
			public hashCode(): number;
			public toString(): string;
			public static DENSITY_280: number;
			public static DENSITY_360: number;
			public static DENSITY_400: number;
			public static DENSITY_420: number;
			public static DENSITY_560: number;
			public static DENSITY_DEFAULT: number;
			public static DENSITY_HIGH: number;
			public static DENSITY_LOW: number;
			public static DENSITY_MEDIUM: number;
			public static DENSITY_TV: number;
			public static DENSITY_XHIGH: number;
			public static DENSITY_XXHIGH: number;
			public static DENSITY_XXXHIGH: number;
			public density: number;
			public densityDpi: number;
			public heightPixels: number;
			public scaledDensity: number;
			public widthPixels: number;
			public xdpi: number;
			public ydpi: number;
		}
	}
}
