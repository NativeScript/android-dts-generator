/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module math {
		export class RoundingMode {
			public static values(): native.Array<java.math.RoundingMode>;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public static valueOf(param0: string): java.math.RoundingMode;
			public static valueOf(param0: number): java.math.RoundingMode;
			public static CEILING: java.math.RoundingMode;
			public static DOWN: java.math.RoundingMode;
			public static FLOOR: java.math.RoundingMode;
			public static HALF_DOWN: java.math.RoundingMode;
			public static HALF_EVEN: java.math.RoundingMode;
			public static HALF_UP: java.math.RoundingMode;
			public static UNNECESSARY: java.math.RoundingMode;
			public static UP: java.math.RoundingMode;
		}
	}
}
