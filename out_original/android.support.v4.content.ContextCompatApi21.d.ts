/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./java.io.File.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class ContextCompatApi21 {
					public static getDrawable(param0: android.content.Context, param1: number): android.graphics.drawable.Drawable;
					public static getNoBackupFilesDir(param0: android.content.Context): java.io.File;
					public static getCodeCacheDir(param0: android.content.Context): java.io.File;
				}
			}
		}
	}
}
