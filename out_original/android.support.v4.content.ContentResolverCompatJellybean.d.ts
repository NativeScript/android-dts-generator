/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class ContentResolverCompatJellybean {
					public static query(param0: android.content.ContentResolver, param1: android.net.Uri, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string, param6: java.lang.Object): android.database.Cursor;
				}
			}
		}
	}
}
