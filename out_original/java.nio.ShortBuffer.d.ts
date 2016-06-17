/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.ByteOrder.d.ts" />

declare module java {
	export module nio {
		export class ShortBuffer {
			public static allocate(param0: number): java.nio.ShortBuffer;
			public static wrap(param0: native.Array<number>): java.nio.ShortBuffer;
			public static wrap(param0: native.Array<number>, param1: number, param2: number): java.nio.ShortBuffer;
			public array(): java.lang.Object;
			public array(): native.Array<number>;
			public arrayOffset(): number;
			public asReadOnlyBuffer(): java.nio.ShortBuffer;
			public compact(): java.nio.ShortBuffer;
			public compareTo(param0: java.nio.ShortBuffer): number;
			public duplicate(): java.nio.ShortBuffer;
			public equals(param0: java.lang.Object): boolean;
			public get(): number;
			public get(param0: native.Array<number>): java.nio.ShortBuffer;
			public get(param0: native.Array<number>, param1: number, param2: number): java.nio.ShortBuffer;
			public get(param0: number): number;
			public hasArray(): boolean;
			public hashCode(): number;
			public isDirect(): boolean;
			public order(): java.nio.ByteOrder;
			public put(param0: number): java.nio.ShortBuffer;
			public put(param0: native.Array<number>): java.nio.ShortBuffer;
			public put(param0: native.Array<number>, param1: number, param2: number): java.nio.ShortBuffer;
			public put(param0: java.nio.ShortBuffer): java.nio.ShortBuffer;
			public put(param0: number, param1: number): java.nio.ShortBuffer;
			public slice(): java.nio.ShortBuffer;
		}
	}
}
