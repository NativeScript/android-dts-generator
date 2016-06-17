/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export class BitmapCompat {
					public static hasMipMap(param0: android.graphics.Bitmap): boolean;
					public static setHasMipMap(param0: android.graphics.Bitmap, param1: boolean): void;
					public static getAllocationByteCount(param0: android.graphics.Bitmap): number;
				}
				export module BitmapCompat {
					export class BaseBitmapImpl {
						public hasMipMap(param0: android.graphics.Bitmap): boolean;
						public setHasMipMap(param0: android.graphics.Bitmap, param1: boolean): void;
						public getAllocationByteCount(param0: android.graphics.Bitmap): number;
					}
					export class BitmapImpl {
						public hasMipMap(param0: android.graphics.Bitmap): boolean;
						public setHasMipMap(param0: android.graphics.Bitmap, param1: boolean): void;
						public getAllocationByteCount(param0: android.graphics.Bitmap): number;
					}
					export class HcMr1BitmapCompatImpl {
						public getAllocationByteCount(param0: android.graphics.Bitmap): number;
					}
					export class JbMr2BitmapCompatImpl {
						public hasMipMap(param0: android.graphics.Bitmap): boolean;
						public setHasMipMap(param0: android.graphics.Bitmap, param1: boolean): void;
					}
					export class KitKatBitmapCompatImpl {
						public getAllocationByteCount(param0: android.graphics.Bitmap): number;
					}
				}
			}
		}
	}
}
