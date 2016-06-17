/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class ContextCompatKitKat {
					public static getExternalCacheDirs(param0: android.content.Context): native.Array<java.io.File>;
					public static getExternalFilesDirs(param0: android.content.Context, param1: string): native.Array<java.io.File>;
					public static getObbDirs(param0: android.content.Context): native.Array<java.io.File>;
				}
			}
		}
	}
}
