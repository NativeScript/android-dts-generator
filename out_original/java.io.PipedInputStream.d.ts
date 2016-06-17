/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.PipedOutputStream.d.ts" />

declare module java {
	export module io {
		export class PipedInputStream {
			public constructor();
			public constructor(param0: java.io.PipedOutputStream);
			public constructor(param0: number);
			public constructor(param0: java.io.PipedOutputStream, param1: number);
			public available(): number;
			public close(): void;
			public connect(param0: java.io.PipedOutputStream): void;
			public read(param0: native.Array<number>): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public read(): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public receive(param0: number): void;
			public static PIPE_SIZE: number;
			public buffer: native.Array<number>;
			public in: number;
			public out: number;
		}
	}
}
