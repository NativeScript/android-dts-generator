/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class ContextCompatFroyo {
					public static getExternalCacheDir(param0: android.content.Context): java.io.File;
					public static getExternalFilesDir(param0: android.content.Context, param1: string): java.io.File;
				}
			}
		}
	}
}
