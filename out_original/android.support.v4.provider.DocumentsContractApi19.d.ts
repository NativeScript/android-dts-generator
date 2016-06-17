/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module provider {
				export class DocumentsContractApi19 {
					public static isDocumentUri(param0: android.content.Context, param1: android.net.Uri): boolean;
					public static getName(param0: android.content.Context, param1: android.net.Uri): string;
					public static getType(param0: android.content.Context, param1: android.net.Uri): string;
					public static isDirectory(param0: android.content.Context, param1: android.net.Uri): boolean;
					public static isFile(param0: android.content.Context, param1: android.net.Uri): boolean;
					public static lastModified(param0: android.content.Context, param1: android.net.Uri): number;
					public static length(param0: android.content.Context, param1: android.net.Uri): number;
					public static canRead(param0: android.content.Context, param1: android.net.Uri): boolean;
					public static canWrite(param0: android.content.Context, param1: android.net.Uri): boolean;
					public static delete(param0: android.content.Context, param1: android.net.Uri): boolean;
					public static exists(param0: android.content.Context, param1: android.net.Uri): boolean;
				}
			}
		}
	}
}
