/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.nio.LongBuffer.d.ts" />

declare module java {
	export module util {
		export class BitSet {
			public constructor();
			public constructor(param0: number);
			public clone(): java.lang.Object;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public get(param0: number): boolean;
			public set(param0: number): void;
			public clear(param0: number): void;
			public flip(param0: number): void;
			public get(param0: number, param1: number): java.util.BitSet;
			public set(param0: number, param1: boolean): void;
			public set(param0: number, param1: number, param2: boolean): void;
			public clear(): void;
			public set(param0: number, param1: number): void;
			public clear(param0: number, param1: number): void;
			public flip(param0: number, param1: number): void;
			public intersects(param0: java.util.BitSet): boolean;
			public and(param0: java.util.BitSet): void;
			public andNot(param0: java.util.BitSet): void;
			public or(param0: java.util.BitSet): void;
			public xor(param0: java.util.BitSet): void;
			public size(): number;
			public length(): number;
			public toString(): string;
			public nextSetBit(param0: number): number;
			public nextClearBit(param0: number): number;
			public previousSetBit(param0: number): number;
			public previousClearBit(param0: number): number;
			public isEmpty(): boolean;
			public cardinality(): number;
			public static valueOf(param0: native.Array<number>): java.util.BitSet;
			public static valueOf(param0: java.nio.LongBuffer): java.util.BitSet;
			public static valueOf(param0: native.Array<number>): java.util.BitSet;
			public static valueOf(param0: java.nio.ByteBuffer): java.util.BitSet;
			public toLongArray(): native.Array<number>;
			public toByteArray(): native.Array<number>;
		}
	}
}
