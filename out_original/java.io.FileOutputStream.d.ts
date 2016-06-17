/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.channels.FileChannel.d.ts" />

declare module java {
	export module io {
		export class FileOutputStream {
			public constructor();
			public constructor(param0: java.io.File);
			public constructor(param0: java.io.File, param1: boolean);
			public constructor(param0: java.io.FileDescriptor);
			public constructor(param0: string);
			public constructor(param0: string, param1: boolean);
			public close(): void;
			public finalize(): void;
			public getChannel(): java.nio.channels.FileChannel;
			public getFD(): java.io.FileDescriptor;
			public write(param0: native.Array<number>): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: number): void;
		}
	}
}
