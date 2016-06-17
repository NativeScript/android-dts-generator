/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.DataInput.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />

declare module java {
	export module io {
		export class DataInputStream {
			public constructor();
			public constructor(param0: java.io.InputStream);
			public read(): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
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
			public static readUTF(param0: java.io.DataInput): string;
			public skipBytes(param0: number): number;
		}
	}
}
