/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class MimeTypeMap {
			public static getFileExtensionFromUrl(param0: string): string;
			public hasMimeType(param0: string): boolean;
			public getMimeTypeFromExtension(param0: string): string;
			public hasExtension(param0: string): boolean;
			public getExtensionFromMimeType(param0: string): string;
			public static getSingleton(): android.webkit.MimeTypeMap;
		}
	}
}
