/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class Color {
			public constructor();
			public static alpha(param0: number): number;
			public static red(param0: number): number;
			public static green(param0: number): number;
			public static blue(param0: number): number;
			public static rgb(param0: number, param1: number, param2: number): number;
			public static argb(param0: number, param1: number, param2: number, param3: number): number;
			public static parseColor(param0: string): number;
			public static RGBToHSV(param0: number, param1: number, param2: number, param3: native.Array<number>): void;
			public static colorToHSV(param0: number, param1: native.Array<number>): void;
			public static HSVToColor(param0: native.Array<number>): number;
			public static HSVToColor(param0: number, param1: native.Array<number>): number;
			public static BLACK: number;
			public static BLUE: number;
			public static CYAN: number;
			public static DKGRAY: number;
			public static GRAY: number;
			public static GREEN: number;
			public static LTGRAY: number;
			public static MAGENTA: number;
			public static RED: number;
			public static TRANSPARENT: number;
			public static WHITE: number;
			public static YELLOW: number;
		}
	}
}
