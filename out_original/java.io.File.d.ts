/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.FileFilter.d.ts" />
/// <reference path="./java.io.FilenameFilter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.net.URL.d.ts" />

declare module java {
	export module io {
		export class File {
			public constructor();
			public constructor(param0: java.io.File, param1: string);
			public constructor(param0: string);
			public constructor(param0: string, param1: string);
			public constructor(param0: java.net.URI);
			public static listRoots(): native.Array<java.io.File>;
			public canExecute(): boolean;
			public canRead(): boolean;
			public canWrite(): boolean;
			public compareTo(param0: java.io.File): number;
			public delete(): boolean;
			public deleteOnExit(): void;
			public equals(param0: java.lang.Object): boolean;
			public exists(): boolean;
			public getAbsolutePath(): string;
			public getAbsoluteFile(): java.io.File;
			public getCanonicalPath(): string;
			public getCanonicalFile(): java.io.File;
			public getName(): string;
			public getParent(): string;
			public getParentFile(): java.io.File;
			public getPath(): string;
			public hashCode(): number;
			public isAbsolute(): boolean;
			public isDirectory(): boolean;
			public isFile(): boolean;
			public isHidden(): boolean;
			public lastModified(): number;
			public setLastModified(param0: number): boolean;
			public setReadOnly(): boolean;
			public setExecutable(param0: boolean, param1: boolean): boolean;
			public setExecutable(param0: boolean): boolean;
			public setReadable(param0: boolean, param1: boolean): boolean;
			public setReadable(param0: boolean): boolean;
			public setWritable(param0: boolean, param1: boolean): boolean;
			public setWritable(param0: boolean): boolean;
			public length(): number;
			public list(): native.Array<string>;
			public list(param0: java.io.FilenameFilter): native.Array<string>;
			public listFiles(): native.Array<java.io.File>;
			public listFiles(param0: java.io.FilenameFilter): native.Array<java.io.File>;
			public listFiles(param0: java.io.FileFilter): native.Array<java.io.File>;
			public mkdir(): boolean;
			public mkdirs(): boolean;
			public createNewFile(): boolean;
			public static createTempFile(param0: string, param1: string): java.io.File;
			public static createTempFile(param0: string, param1: string, param2: java.io.File): java.io.File;
			public renameTo(param0: java.io.File): boolean;
			public toString(): string;
			public toURI(): java.net.URI;
			public toURL(): java.net.URL;
			public getTotalSpace(): number;
			public getUsableSpace(): number;
			public getFreeSpace(): number;
			public static pathSeparator: string;
			public static pathSeparatorChar: string;
			public static separator: string;
			public static separatorChar: string;
		}
	}
}
