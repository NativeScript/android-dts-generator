/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.math.MathContext.d.ts" />
/// <reference path="./java.math.RoundingMode.d.ts" />

declare module java {
	export module math {
		export class BigDecimal {
			public constructor();
			public constructor(param0: native.Array<string>, param1: number, param2: number);
			public constructor(param0: native.Array<string>, param1: number, param2: number, param3: java.math.MathContext);
			public constructor(param0: native.Array<string>);
			public constructor(param0: native.Array<string>, param1: java.math.MathContext);
			public constructor(param0: string);
			public constructor(param0: string, param1: java.math.MathContext);
			public constructor(param0: number);
			public constructor(param0: number, param1: java.math.MathContext);
			public constructor(param0: java.math.BigInteger);
			public constructor(param0: java.math.BigInteger, param1: java.math.MathContext);
			public constructor(param0: java.math.BigInteger, param1: number);
			public constructor(param0: java.math.BigInteger, param1: number, param2: java.math.MathContext);
			public constructor(param0: number);
			public constructor(param0: number, param1: java.math.MathContext);
			public constructor(param0: number);
			public constructor(param0: number, param1: java.math.MathContext);
			public static valueOf(param0: number, param1: number): java.math.BigDecimal;
			public static valueOf(param0: number): java.math.BigDecimal;
			public static valueOf(param0: number): java.math.BigDecimal;
			public add(param0: java.math.BigDecimal): java.math.BigDecimal;
			public add(param0: java.math.BigDecimal, param1: java.math.MathContext): java.math.BigDecimal;
			public subtract(param0: java.math.BigDecimal): java.math.BigDecimal;
			public subtract(param0: java.math.BigDecimal, param1: java.math.MathContext): java.math.BigDecimal;
			public multiply(param0: java.math.BigDecimal): java.math.BigDecimal;
			public multiply(param0: java.math.BigDecimal, param1: java.math.MathContext): java.math.BigDecimal;
			public divide(param0: java.math.BigDecimal, param1: number, param2: number): java.math.BigDecimal;
			public divide(param0: java.math.BigDecimal, param1: number, param2: java.math.RoundingMode): java.math.BigDecimal;
			public divide(param0: java.math.BigDecimal, param1: number): java.math.BigDecimal;
			public divide(param0: java.math.BigDecimal, param1: java.math.RoundingMode): java.math.BigDecimal;
			public divide(param0: java.math.BigDecimal): java.math.BigDecimal;
			public divide(param0: java.math.BigDecimal, param1: java.math.MathContext): java.math.BigDecimal;
			public divideToIntegralValue(param0: java.math.BigDecimal): java.math.BigDecimal;
			public divideToIntegralValue(param0: java.math.BigDecimal, param1: java.math.MathContext): java.math.BigDecimal;
			public remainder(param0: java.math.BigDecimal): java.math.BigDecimal;
			public remainder(param0: java.math.BigDecimal, param1: java.math.MathContext): java.math.BigDecimal;
			public divideAndRemainder(param0: java.math.BigDecimal): native.Array<java.math.BigDecimal>;
			public divideAndRemainder(param0: java.math.BigDecimal, param1: java.math.MathContext): native.Array<java.math.BigDecimal>;
			public pow(param0: number): java.math.BigDecimal;
			public pow(param0: number, param1: java.math.MathContext): java.math.BigDecimal;
			public abs(): java.math.BigDecimal;
			public abs(param0: java.math.MathContext): java.math.BigDecimal;
			public negate(): java.math.BigDecimal;
			public negate(param0: java.math.MathContext): java.math.BigDecimal;
			public plus(): java.math.BigDecimal;
			public plus(param0: java.math.MathContext): java.math.BigDecimal;
			public signum(): number;
			public scale(): number;
			public precision(): number;
			public unscaledValue(): java.math.BigInteger;
			public round(param0: java.math.MathContext): java.math.BigDecimal;
			public setScale(param0: number, param1: java.math.RoundingMode): java.math.BigDecimal;
			public setScale(param0: number, param1: number): java.math.BigDecimal;
			public setScale(param0: number): java.math.BigDecimal;
			public movePointLeft(param0: number): java.math.BigDecimal;
			public movePointRight(param0: number): java.math.BigDecimal;
			public scaleByPowerOfTen(param0: number): java.math.BigDecimal;
			public stripTrailingZeros(): java.math.BigDecimal;
			public compareTo(param0: java.math.BigDecimal): number;
			public equals(param0: java.lang.Object): boolean;
			public min(param0: java.math.BigDecimal): java.math.BigDecimal;
			public max(param0: java.math.BigDecimal): java.math.BigDecimal;
			public hashCode(): number;
			public toString(): string;
			public toEngineeringString(): string;
			public toPlainString(): string;
			public toBigInteger(): java.math.BigInteger;
			public toBigIntegerExact(): java.math.BigInteger;
			public longValue(): number;
			public longValueExact(): number;
			public intValue(): number;
			public intValueExact(): number;
			public shortValueExact(): number;
			public byteValueExact(): number;
			public floatValue(): number;
			public doubleValue(): number;
			public ulp(): java.math.BigDecimal;
			public static ONE: java.math.BigDecimal;
			public static ROUND_CEILING: number;
			public static ROUND_DOWN: number;
			public static ROUND_FLOOR: number;
			public static ROUND_HALF_DOWN: number;
			public static ROUND_HALF_EVEN: number;
			public static ROUND_HALF_UP: number;
			public static ROUND_UNNECESSARY: number;
			public static ROUND_UP: number;
			public static TEN: java.math.BigDecimal;
			public static ZERO: java.math.BigDecimal;
		}
	}
}
