/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class ContextCompat {
					public constructor();
					public static startActivities(param0: android.content.Context, param1: native.Array<android.content.Intent>): boolean;
					public static startActivities(param0: android.content.Context, param1: native.Array<android.content.Intent>, param2: android.os.Bundle): boolean;
					public static getObbDirs(param0: android.content.Context): native.Array<java.io.File>;
					public static getExternalFilesDirs(param0: android.content.Context, param1: string): native.Array<java.io.File>;
					public static getExternalCacheDirs(param0: android.content.Context): native.Array<java.io.File>;
					public static getDrawable(param0: android.content.Context, param1: number): android.graphics.drawable.Drawable;
					public static getColorStateList(param0: android.content.Context, param1: number): android.content.res.ColorStateList;
					public static getColor(param0: android.content.Context, param1: number): number;
					public static checkSelfPermission(param0: android.content.Context, param1: string): number;
					public getNoBackupFilesDir(param0: android.content.Context): java.io.File;
					public static getCodeCacheDir(param0: android.content.Context): java.io.File;
				}
			}
		}
	}
}
