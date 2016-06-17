/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module provider {
				export class DocumentsContractApi21 {
					public static createFile(param0: android.content.Context, param1: android.net.Uri, param2: string, param3: string): android.net.Uri;
					public static createDirectory(param0: android.content.Context, param1: android.net.Uri, param2: string): android.net.Uri;
					public static prepareTreeUri(param0: android.net.Uri): android.net.Uri;
					public static listFiles(param0: android.content.Context, param1: android.net.Uri): native.Array<android.net.Uri>;
					public static renameTo(param0: android.content.Context, param1: android.net.Uri, param2: string): android.net.Uri;
				}
			}
		}
	}
}
