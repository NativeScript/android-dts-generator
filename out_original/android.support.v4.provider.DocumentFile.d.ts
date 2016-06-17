/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module provider {
				export class DocumentFile {
					public static fromFile(param0: java.io.File): android.support.v4.provider.DocumentFile;
					public static fromSingleUri(param0: android.content.Context, param1: android.net.Uri): android.support.v4.provider.DocumentFile;
					public static fromTreeUri(param0: android.content.Context, param1: android.net.Uri): android.support.v4.provider.DocumentFile;
					public static isDocumentUri(param0: android.content.Context, param1: android.net.Uri): boolean;
					public createFile(param0: string, param1: string): android.support.v4.provider.DocumentFile;
					public createDirectory(param0: string): android.support.v4.provider.DocumentFile;
					public getUri(): android.net.Uri;
					public getName(): string;
					public getType(): string;
					public getParentFile(): android.support.v4.provider.DocumentFile;
					public isDirectory(): boolean;
					public isFile(): boolean;
					public lastModified(): number;
					public length(): number;
					public canRead(): boolean;
					public canWrite(): boolean;
					public delete(): boolean;
					public exists(): boolean;
					public listFiles(): native.Array<android.support.v4.provider.DocumentFile>;
					public findFile(param0: string): android.support.v4.provider.DocumentFile;
					public renameTo(param0: string): boolean;
				}
			}
		}
	}
}
