/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module util {
		export class UUID {
			public constructor();
			public constructor(param0: number, param1: number);
			public static randomUUID(): java.util.UUID;
			public static nameUUIDFromBytes(param0: native.Array<number>): java.util.UUID;
			public static fromString(param0: string): java.util.UUID;
			public getLeastSignificantBits(): number;
			public getMostSignificantBits(): number;
			public version(): number;
			public variant(): number;
			public timestamp(): number;
			public clockSequence(): number;
			public node(): number;
			public compareTo(param0: java.util.UUID): number;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
		}
	}
}
