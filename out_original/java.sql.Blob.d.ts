/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />

declare module java {
	export module sql {
		export class Blob {
			public getBinaryStream(): java.io.InputStream;
			public getBinaryStream(param0: number, param1: number): java.io.InputStream;
			public getBytes(param0: number, param1: number): native.Array<number>;
			public length(): number;
			public position(param0: java.sql.Blob, param1: number): number;
			public position(param0: native.Array<number>, param1: number): number;
			public setBinaryStream(param0: number): java.io.OutputStream;
			public setBytes(param0: number, param1: native.Array<number>): number;
			public setBytes(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
			public truncate(param0: number): void;
			public free(): void;
		}
	}
}
