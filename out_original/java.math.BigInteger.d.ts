/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Random.d.ts" />

declare module java {
	export module math {
		export class BigInteger {
			public constructor();
			public constructor(param0: number, param1: java.util.Random);
			public constructor(param0: number, param1: number, param2: java.util.Random);
			public constructor(param0: string);
			public constructor(param0: string, param1: number);
			public constructor(param0: number, param1: native.Array<number>);
			public constructor(param0: native.Array<number>);
			public static valueOf(param0: number): java.math.BigInteger;
			public toByteArray(): native.Array<number>;
			public abs(): java.math.BigInteger;
			public negate(): java.math.BigInteger;
			public add(param0: java.math.BigInteger): java.math.BigInteger;
			public subtract(param0: java.math.BigInteger): java.math.BigInteger;
			public signum(): number;
			public shiftRight(param0: number): java.math.BigInteger;
			public shiftLeft(param0: number): java.math.BigInteger;
			public bitLength(): number;
			public testBit(param0: number): boolean;
			public setBit(param0: number): java.math.BigInteger;
			public clearBit(param0: number): java.math.BigInteger;
			public flipBit(param0: number): java.math.BigInteger;
			public getLowestSetBit(): number;
			public bitCount(): number;
			public not(): java.math.BigInteger;
			public and(param0: java.math.BigInteger): java.math.BigInteger;
			public or(param0: java.math.BigInteger): java.math.BigInteger;
			public xor(param0: java.math.BigInteger): java.math.BigInteger;
			public andNot(param0: java.math.BigInteger): java.math.BigInteger;
			public intValue(): number;
			public longValue(): number;
			public floatValue(): number;
			public doubleValue(): number;
			public compareTo(param0: java.math.BigInteger): number;
			public min(param0: java.math.BigInteger): java.math.BigInteger;
			public max(param0: java.math.BigInteger): java.math.BigInteger;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public toString(param0: number): string;
			public gcd(param0: java.math.BigInteger): java.math.BigInteger;
			public multiply(param0: java.math.BigInteger): java.math.BigInteger;
			public pow(param0: number): java.math.BigInteger;
			public divideAndRemainder(param0: java.math.BigInteger): native.Array<java.math.BigInteger>;
			public divide(param0: java.math.BigInteger): java.math.BigInteger;
			public remainder(param0: java.math.BigInteger): java.math.BigInteger;
			public modInverse(param0: java.math.BigInteger): java.math.BigInteger;
			public modPow(param0: java.math.BigInteger, param1: java.math.BigInteger): java.math.BigInteger;
			public mod(param0: java.math.BigInteger): java.math.BigInteger;
			public isProbablePrime(param0: number): boolean;
			public nextProbablePrime(): java.math.BigInteger;
			public static probablePrime(param0: number, param1: java.util.Random): java.math.BigInteger;
			public static ONE: java.math.BigInteger;
			public static TEN: java.math.BigInteger;
			public static ZERO: java.math.BigInteger;
		}
	}
}
