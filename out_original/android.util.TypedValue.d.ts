/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />

declare module android {
	export module util {
		export class TypedValue {
			public constructor();
			public getFloat(): number;
			public static complexToFloat(param0: number): number;
			public static complexToDimension(param0: number, param1: android.util.DisplayMetrics): number;
			public static complexToDimensionPixelOffset(param0: number, param1: android.util.DisplayMetrics): number;
			public static complexToDimensionPixelSize(param0: number, param1: android.util.DisplayMetrics): number;
			public getComplexUnit(): number;
			public static applyDimension(param0: number, param1: number, param2: android.util.DisplayMetrics): number;
			public getDimension(param0: android.util.DisplayMetrics): number;
			public static complexToFraction(param0: number, param1: number, param2: number): number;
			public getFraction(param0: number, param1: number): number;
			public coerceToString(): string;
			public static coerceToString(param0: number, param1: number): string;
			public setTo(param0: android.util.TypedValue): void;
			public toString(): string;
			public static COMPLEX_MANTISSA_MASK: number;
			public static COMPLEX_MANTISSA_SHIFT: number;
			public static COMPLEX_RADIX_0p23: number;
			public static COMPLEX_RADIX_16p7: number;
			public static COMPLEX_RADIX_23p0: number;
			public static COMPLEX_RADIX_8p15: number;
			public static COMPLEX_RADIX_MASK: number;
			public static COMPLEX_RADIX_SHIFT: number;
			public static COMPLEX_UNIT_DIP: number;
			public static COMPLEX_UNIT_FRACTION: number;
			public static COMPLEX_UNIT_FRACTION_PARENT: number;
			public static COMPLEX_UNIT_IN: number;
			public static COMPLEX_UNIT_MASK: number;
			public static COMPLEX_UNIT_MM: number;
			public static COMPLEX_UNIT_PT: number;
			public static COMPLEX_UNIT_PX: number;
			public static COMPLEX_UNIT_SHIFT: number;
			public static COMPLEX_UNIT_SP: number;
			public static DATA_NULL_EMPTY: number;
			public static DATA_NULL_UNDEFINED: number;
			public static DENSITY_DEFAULT: number;
			public static DENSITY_NONE: number;
			public static TYPE_ATTRIBUTE: number;
			public static TYPE_DIMENSION: number;
			public static TYPE_FIRST_COLOR_INT: number;
			public static TYPE_FIRST_INT: number;
			public static TYPE_FLOAT: number;
			public static TYPE_FRACTION: number;
			public static TYPE_INT_BOOLEAN: number;
			public static TYPE_INT_COLOR_ARGB4: number;
			public static TYPE_INT_COLOR_ARGB8: number;
			public static TYPE_INT_COLOR_RGB4: number;
			public static TYPE_INT_COLOR_RGB8: number;
			public static TYPE_INT_DEC: number;
			public static TYPE_INT_HEX: number;
			public static TYPE_LAST_COLOR_INT: number;
			public static TYPE_LAST_INT: number;
			public static TYPE_NULL: number;
			public static TYPE_REFERENCE: number;
			public static TYPE_STRING: number;
			public assetCookie: number;
			public changingConfigurations: number;
			public data: number;
			public density: number;
			public resourceId: number;
			public string: string;
			public type: number;
		}
	}
}
