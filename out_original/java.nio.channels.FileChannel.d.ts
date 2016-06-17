/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.nio.MappedByteBuffer.d.ts" />
/// <reference path="./java.nio.channels.FileLock.d.ts" />
/// <reference path="./java.nio.channels.ReadableByteChannel.d.ts" />
/// <reference path="./java.nio.channels.WritableByteChannel.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export class FileChannel {
				public constructor();
				public force(param0: boolean): void;
				public lock(): java.nio.channels.FileLock;
				public lock(param0: number, param1: number, param2: boolean): java.nio.channels.FileLock;
				public map(param0: java.nio.channels.FileChannel.MapMode, param1: number, param2: number): java.nio.MappedByteBuffer;
				public position(): number;
				public position(param0: number): java.nio.channels.FileChannel;
				public read(param0: java.nio.ByteBuffer): number;
				public read(param0: java.nio.ByteBuffer, param1: number): number;
				public read(param0: native.Array<java.nio.ByteBuffer>): number;
				public read(param0: native.Array<java.nio.ByteBuffer>, param1: number, param2: number): number;
				public size(): number;
				public transferFrom(param0: java.nio.channels.ReadableByteChannel, param1: number, param2: number): number;
				public transferTo(param0: number, param1: number, param2: java.nio.channels.WritableByteChannel): number;
				public truncate(param0: number): java.nio.channels.FileChannel;
				public tryLock(): java.nio.channels.FileLock;
				public tryLock(param0: number, param1: number, param2: boolean): java.nio.channels.FileLock;
				public write(param0: java.nio.ByteBuffer): number;
				public write(param0: java.nio.ByteBuffer, param1: number): number;
				public write(param0: native.Array<java.nio.ByteBuffer>): number;
				public write(param0: native.Array<java.nio.ByteBuffer>, param1: number, param2: number): number;
			}
			export module FileChannel {
				export class MapMode {
					public toString(): string;
					public static PRIVATE: java.nio.channels.FileChannel.MapMode;
					public static READ_ONLY: java.nio.channels.FileChannel.MapMode;
					public static READ_WRITE: java.nio.channels.FileChannel.MapMode;
				}
			}
		}
	}
}
