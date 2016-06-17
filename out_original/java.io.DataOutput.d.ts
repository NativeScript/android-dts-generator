/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module io {
		export class DataOutput {
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
