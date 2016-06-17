/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.ByteOrder.d.ts" />

declare module java {
	export module nio {
		export class DoubleBuffer {
			public static allocate(param0: number): java.nio.DoubleBuffer;
			public static wrap(param0: native.Array<number>): java.nio.DoubleBuffer;
			public static wrap(param0: native.Array<number>, param1: number, param2: number): java.nio.DoubleBuffer;
			public array(): java.lang.Object;
			public array(): native.Array<number>;
			public arrayOffset(): number;
			public asReadOnlyBuffer(): java.nio.DoubleBuffer;
			public compact(): java.nio.DoubleBuffer;
			public compareTo(param0: java.nio.DoubleBuffer): number;
			public duplicate(): java.nio.DoubleBuffer;
			public equals(param0: java.lang.Object): boolean;
			public get(): number;
			public get(param0: native.Array<number>): java.nio.DoubleBuffer;
			public get(param0: native.Array<number>, param1: number, param2: number): java.nio.DoubleBuffer;
			public get(param0: number): number;
			public hasArray(): boolean;
			public hashCode(): number;
			public isDirect(): boolean;
			public order(): java.nio.ByteOrder;
			public put(param0: number): java.nio.DoubleBuffer;
			public put(param0: native.Array<number>): java.nio.DoubleBuffer;
			public put(param0: native.Array<number>, param1: number, param2: number): java.nio.DoubleBuffer;
			public put(param0: java.nio.DoubleBuffer): java.nio.DoubleBuffer;
			public put(param0: number, param1: number): java.nio.DoubleBuffer;
			public slice(): java.nio.DoubleBuffer;
		}
	}
}
