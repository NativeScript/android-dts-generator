/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.support.v4.provider.DocumentFile.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module provider {
				export class RawDocumentFile {
					public createFile(param0: string, param1: string): android.support.v4.provider.DocumentFile;
					public createDirectory(param0: string): android.support.v4.provider.DocumentFile;
					public getUri(): android.net.Uri;
					public getName(): string;
					public getType(): string;
					public isDirectory(): boolean;
					public isFile(): boolean;
					public lastModified(): number;
					public length(): number;
					public canRead(): boolean;
					public canWrite(): boolean;
					public delete(): boolean;
					public exists(): boolean;
					public listFiles(): native.Array<android.support.v4.provider.DocumentFile>;
					public renameTo(param0: string): boolean;
				}
			}
		}
	}
}
