/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.channels.FileChannel.d.ts" />

declare module java {
	export module io {
		export class RandomAccessFile {
			public constructor();
			public constructor(param0: java.io.File, param1: string);
			public constructor(param0: string, param1: string);
			public close(): void;
			public finalize(): void;
			public getChannel(): java.nio.channels.FileChannel;
			public getFD(): java.io.FileDescriptor;
			public getFilePointer(): number;
			public length(): number;
			public read(): number;
			public read(param0: native.Array<number>): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public readBoolean(): boolean;
			public readByte(): number;
			public readChar(): string;
			public readDouble(): number;
			public readFloat(): number;
			public readFully(param0: native.Array<number>): void;
			public readFully(param0: native.Array<number>, param1: number, param2: number): void;
			public readInt(): number;
			public readLine(): string;
			public readLong(): number;
			public readShort(): number;
			public readUnsignedByte(): number;
			public readUnsignedShort(): number;
			public readUTF(): string;
			public seek(param0: number): void;
			public setLength(param0: number): void;
			public skipBytes(param0: number): number;
			public write(param0: native.Array<number>): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: number): void;
			public writeBoolean(param0: boolean): void;
			public writeByte(param0: number): void;
			public writeBytes(param0: string): void;
			public writeChar(param0: number): void;
			public writeChars(param0: string): void;
			public writeDouble(param0: number): void;
			public writeFloat(param0: number): void;
			public writeInt(param0: number): void;
			public writeLong(param0: number): void;
			public writeShort(param0: number): void;
			public writeUTF(param0: string): void;
		}
	}
}
