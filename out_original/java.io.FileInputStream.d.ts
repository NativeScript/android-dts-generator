/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.channels.FileChannel.d.ts" />

declare module java {
	export module io {
		export class FileInputStream {
			public constructor();
			public constructor(param0: java.io.File);
			public constructor(param0: java.io.FileDescriptor);
			public constructor(param0: string);
			public available(): number;
			public close(): void;
			public finalize(): void;
			public getChannel(): java.nio.channels.FileChannel;
			public getFD(): java.io.FileDescriptor;
			public read(param0: native.Array<number>): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public read(): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public skip(param0: number): number;
		}
	}
}
