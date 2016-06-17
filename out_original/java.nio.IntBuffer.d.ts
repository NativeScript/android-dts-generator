/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.ByteOrder.d.ts" />

declare module java {
	export module nio {
		export class IntBuffer {
			public static allocate(param0: number): java.nio.IntBuffer;
			public static wrap(param0: native.Array<number>): java.nio.IntBuffer;
			public static wrap(param0: native.Array<number>, param1: number, param2: number): java.nio.IntBuffer;
			public array(): java.lang.Object;
			public array(): native.Array<number>;
			public arrayOffset(): number;
			public asReadOnlyBuffer(): java.nio.IntBuffer;
			public compact(): java.nio.IntBuffer;
			public compareTo(param0: java.nio.IntBuffer): number;
			public duplicate(): java.nio.IntBuffer;
			public equals(param0: java.lang.Object): boolean;
			public get(): number;
			public get(param0: native.Array<number>): java.nio.IntBuffer;
			public get(param0: native.Array<number>, param1: number, param2: number): java.nio.IntBuffer;
			public get(param0: number): number;
			public hasArray(): boolean;
			public hashCode(): number;
			public isDirect(): boolean;
			public order(): java.nio.ByteOrder;
			public put(param0: number): java.nio.IntBuffer;
			public put(param0: native.Array<number>): java.nio.IntBuffer;
			public put(param0: native.Array<number>, param1: number, param2: number): java.nio.IntBuffer;
			public put(param0: java.nio.IntBuffer): java.nio.IntBuffer;
			public put(param0: number, param1: number): java.nio.IntBuffer;
			public slice(): java.nio.IntBuffer;
		}
	}
}
