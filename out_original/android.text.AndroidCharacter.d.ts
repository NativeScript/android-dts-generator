/// <reference path="./_helpers.d.ts" />

declare module android {
	export module text {
		export class AndroidCharacter {
			public constructor();
			public static getDirectionalities(param0: native.Array<string>, param1: native.Array<number>, param2: number): void;
			public static getEastAsianWidth(param0: string): number;
			public static getEastAsianWidths(param0: native.Array<string>, param1: number, param2: number, param3: native.Array<number>): void;
			public static mirror(param0: native.Array<string>, param1: number, param2: number): boolean;
			public static getMirror(param0: string): string;
			public static EAST_ASIAN_WIDTH_AMBIGUOUS: number;
			public static EAST_ASIAN_WIDTH_FULL_WIDTH: number;
			public static EAST_ASIAN_WIDTH_HALF_WIDTH: number;
			public static EAST_ASIAN_WIDTH_NARROW: number;
			public static EAST_ASIAN_WIDTH_NEUTRAL: number;
			public static EAST_ASIAN_WIDTH_WIDE: number;
		}
	}
}
