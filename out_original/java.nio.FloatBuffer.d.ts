/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.ByteOrder.d.ts" />

declare module java {
	export module nio {
		export class FloatBuffer {
			public static allocate(param0: number): java.nio.FloatBuffer;
			public static wrap(param0: native.Array<number>): java.nio.FloatBuffer;
			public static wrap(param0: native.Array<number>, param1: number, param2: number): java.nio.FloatBuffer;
			public array(): java.lang.Object;
			public array(): native.Array<number>;
			public arrayOffset(): number;
			public asReadOnlyBuffer(): java.nio.FloatBuffer;
			public compact(): java.nio.FloatBuffer;
			public compareTo(param0: java.nio.FloatBuffer): number;
			public duplicate(): java.nio.FloatBuffer;
			public equals(param0: java.lang.Object): boolean;
			public get(): number;
			public get(param0: native.Array<number>): java.nio.FloatBuffer;
			public get(param0: native.Array<number>, param1: number, param2: number): java.nio.FloatBuffer;
			public get(param0: number): number;
			public hasArray(): boolean;
			public hashCode(): number;
			public isDirect(): boolean;
			public order(): java.nio.ByteOrder;
			public put(param0: number): java.nio.FloatBuffer;
			public put(param0: native.Array<number>): java.nio.FloatBuffer;
			public put(param0: native.Array<number>, param1: number, param2: number): java.nio.FloatBuffer;
			public put(param0: java.nio.FloatBuffer): java.nio.FloatBuffer;
			public put(param0: number, param1: number): java.nio.FloatBuffer;
			public slice(): java.nio.FloatBuffer;
		}
	}
}
