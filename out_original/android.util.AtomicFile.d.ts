/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileInputStream.d.ts" />
/// <reference path="./java.io.FileOutputStream.d.ts" />

declare module android {
	export module util {
		export class AtomicFile {
			public constructor();
			public constructor(param0: java.io.File);
			public getBaseFile(): java.io.File;
			public delete(): void;
			public startWrite(): java.io.FileOutputStream;
			public finishWrite(param0: java.io.FileOutputStream): void;
			public failWrite(param0: java.io.FileOutputStream): void;
			public openRead(): java.io.FileInputStream;
			public readFully(): native.Array<number>;
		}
	}
}
