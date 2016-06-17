/// <reference path="./_helpers.d.ts" />

declare module java {
	export module io {
		export class DataInput {
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
			public skipBytes(param0: number): number;
		}
	}
}
