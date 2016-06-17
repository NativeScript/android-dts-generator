/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export class BitmapCompatJellybeanMR2 {
					public static hasMipMap(param0: android.graphics.Bitmap): boolean;
					public static setHasMipMap(param0: android.graphics.Bitmap, param1: boolean): void;
				}
			}
		}
	}
}
