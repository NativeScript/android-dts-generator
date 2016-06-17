/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.ByteOrder.d.ts" />

declare module java {
	export module nio {
		export class LongBuffer {
			public static allocate(param0: number): java.nio.LongBuffer;
			public static wrap(param0: native.Array<number>): java.nio.LongBuffer;
			public static wrap(param0: native.Array<number>, param1: number, param2: number): java.nio.LongBuffer;
			public array(): java.lang.Object;
			public array(): native.Array<number>;
			public arrayOffset(): number;
			public asReadOnlyBuffer(): java.nio.LongBuffer;
			public compact(): java.nio.LongBuffer;
			public compareTo(param0: java.nio.LongBuffer): number;
			public duplicate(): java.nio.LongBuffer;
			public equals(param0: java.lang.Object): boolean;
			public get(): number;
			public get(param0: native.Array<number>): java.nio.LongBuffer;
			public get(param0: native.Array<number>, param1: number, param2: number): java.nio.LongBuffer;
			public get(param0: number): number;
			public hasArray(): boolean;
			public hashCode(): number;
			public isDirect(): boolean;
			public order(): java.nio.ByteOrder;
			public put(param0: number): java.nio.LongBuffer;
			public put(param0: native.Array<number>): java.nio.LongBuffer;
			public put(param0: native.Array<number>, param1: number, param2: number): java.nio.LongBuffer;
			public put(param0: java.nio.LongBuffer): java.nio.LongBuffer;
			public put(param0: number, param1: number): java.nio.LongBuffer;
			public slice(): java.nio.LongBuffer;
		}
	}
}
