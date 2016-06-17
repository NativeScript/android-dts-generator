/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.RoundingMode.d.ts" />

declare module java {
	export module math {
		export class MathContext {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: number, param1: java.math.RoundingMode);
			public constructor(param0: string);
			public getPrecision(): number;
			public getRoundingMode(): java.math.RoundingMode;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public static DECIMAL128: java.math.MathContext;
			public static DECIMAL32: java.math.MathContext;
			public static DECIMAL64: java.math.MathContext;
			public static UNLIMITED: java.math.MathContext;
		}
	}
}
