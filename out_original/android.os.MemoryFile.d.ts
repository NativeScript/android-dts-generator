/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class MemoryFile {
			public constructor();
			public constructor(param0: string, param1: number);
			public close(): void;
			public finalize(): void;
			public length(): number;
			public isPurgingAllowed(): boolean;
			public allowPurging(param0: boolean): boolean;
			public getInputStream(): java.io.InputStream;
			public getOutputStream(): java.io.OutputStream;
			public readBytes(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
			public writeBytes(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
		}
	}
}
