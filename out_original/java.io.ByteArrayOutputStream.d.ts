/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module io {
		export class ByteArrayOutputStream {
			public constructor();
			public constructor(param0: number);
			public close(): void;
			public reset(): void;
			public size(): number;
			public toByteArray(): native.Array<number>;
			public toString(): string;
			public toString(param0: number): string;
			public toString(param0: string): string;
			public write(param0: native.Array<number>): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: number): void;
			public writeTo(param0: java.io.OutputStream): void;
			public buf: native.Array<number>;
			public count: number;
		}
	}
}
