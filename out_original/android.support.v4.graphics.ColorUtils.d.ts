/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export class ColorUtils {
					public static compositeColors(param0: number, param1: number): number;
					public static calculateLuminance(param0: number): number;
					public static calculateContrast(param0: number, param1: number): number;
					public static calculateMinimumAlpha(param0: number, param1: number, param2: number): number;
					public static RGBToHSL(param0: number, param1: number, param2: number, param3: native.Array<number>): void;
					public static colorToHSL(param0: number, param1: native.Array<number>): void;
					public static HSLToColor(param0: native.Array<number>): number;
					public static setAlphaComponent(param0: number, param1: number): number;
					public static colorToLAB(param0: number, param1: native.Array<number>): void;
					public static RGBToLAB(param0: number, param1: number, param2: number, param3: native.Array<number>): void;
					public static colorToXYZ(param0: number, param1: native.Array<number>): void;
					public static RGBToXYZ(param0: number, param1: number, param2: number, param3: native.Array<number>): void;
					public static XYZToLAB(param0: number, param1: number, param2: number, param3: native.Array<number>): void;
					public static LABToXYZ(param0: number, param1: number, param2: number, param3: native.Array<number>): void;
					public static XYZToColor(param0: number, param1: number, param2: number): number;
					public static LABToColor(param0: number, param1: number, param2: number): number;
					public static distanceEuclidean(param0: native.Array<number>, param1: native.Array<number>): number;
					public static blendARGB(param0: number, param1: number, param2: number): number;
					public static blendHSL(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: native.Array<number>): void;
					public static blendLAB(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: native.Array<number>): void;
				}
			}
		}
	}
}
