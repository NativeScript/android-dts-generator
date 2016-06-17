/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.ByteOrder.d.ts" />
/// <reference path="./java.nio.CharBuffer.d.ts" />
/// <reference path="./java.nio.DoubleBuffer.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />
/// <reference path="./java.nio.LongBuffer.d.ts" />
/// <reference path="./java.nio.ShortBuffer.d.ts" />

declare module java {
	export module nio {
		export class ByteBuffer {
			public static allocate(param0: number): java.nio.ByteBuffer;
			public static allocateDirect(param0: number): java.nio.ByteBuffer;
			public static wrap(param0: native.Array<number>): java.nio.ByteBuffer;
			public static wrap(param0: native.Array<number>, param1: number, param2: number): java.nio.ByteBuffer;
			public array(): java.lang.Object;
			public array(): native.Array<number>;
			public arrayOffset(): number;
			public asCharBuffer(): java.nio.CharBuffer;
			public asDoubleBuffer(): java.nio.DoubleBuffer;
			public asFloatBuffer(): java.nio.FloatBuffer;
			public asIntBuffer(): java.nio.IntBuffer;
			public asLongBuffer(): java.nio.LongBuffer;
			public asReadOnlyBuffer(): java.nio.ByteBuffer;
			public asShortBuffer(): java.nio.ShortBuffer;
			public compact(): java.nio.ByteBuffer;
			public compareTo(param0: java.nio.ByteBuffer): number;
			public duplicate(): java.nio.ByteBuffer;
			public equals(param0: java.lang.Object): boolean;
			public get(): number;
			public get(param0: native.Array<number>): java.nio.ByteBuffer;
			public get(param0: native.Array<number>, param1: number, param2: number): java.nio.ByteBuffer;
			public get(param0: number): number;
			public getChar(): string;
			public getChar(param0: number): string;
			public getDouble(): number;
			public getDouble(param0: number): number;
			public getFloat(): number;
			public getFloat(param0: number): number;
			public getInt(): number;
			public getInt(param0: number): number;
			public getLong(): number;
			public getLong(param0: number): number;
			public getShort(): number;
			public getShort(param0: number): number;
			public hasArray(): boolean;
			public hashCode(): number;
			public isDirect(): boolean;
			public order(): java.nio.ByteOrder;
			public order(param0: java.nio.ByteOrder): java.nio.ByteBuffer;
			public put(param0: number): java.nio.ByteBuffer;
			public put(param0: native.Array<number>): java.nio.ByteBuffer;
			public put(param0: native.Array<number>, param1: number, param2: number): java.nio.ByteBuffer;
			public put(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
			public put(param0: number, param1: number): java.nio.ByteBuffer;
			public putChar(param0: string): java.nio.ByteBuffer;
			public putChar(param0: number, param1: string): java.nio.ByteBuffer;
			public putDouble(param0: number): java.nio.ByteBuffer;
			public putDouble(param0: number, param1: number): java.nio.ByteBuffer;
			public putFloat(param0: number): java.nio.ByteBuffer;
			public putFloat(param0: number, param1: number): java.nio.ByteBuffer;
			public putInt(param0: number): java.nio.ByteBuffer;
			public putInt(param0: number, param1: number): java.nio.ByteBuffer;
			public putLong(param0: number): java.nio.ByteBuffer;
			public putLong(param0: number, param1: number): java.nio.ByteBuffer;
			public putShort(param0: number): java.nio.ByteBuffer;
			public putShort(param0: number, param1: number): java.nio.ByteBuffer;
			public slice(): java.nio.ByteBuffer;
		}
	}
}
