/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module print {
				export class PrintHelperKitkat {
					public setScaleMode(param0: number): void;
					public getScaleMode(): number;
					public setColorMode(param0: number): void;
					public setOrientation(param0: number): void;
					public getOrientation(): number;
					public getColorMode(): number;
					public printBitmap(param0: string, param1: android.graphics.Bitmap, param2: android.support.v4.print.PrintHelperKitkat.OnPrintFinishCallback): void;
					public printBitmap(param0: string, param1: android.net.Uri, param2: android.support.v4.print.PrintHelperKitkat.OnPrintFinishCallback): void;
					public static SCALE_MODE_FIT: number;
					public static SCALE_MODE_FILL: number;
					public static ORIENTATION_LANDSCAPE: number;
					public static ORIENTATION_PORTRAIT: number;
					public static COLOR_MODE_MONOCHROME: number;
					public static COLOR_MODE_COLOR: number;
				}
				export module PrintHelperKitkat {
					export class OnPrintFinishCallback {
						public onFinish(): void;
					}
				}
			}
		}
	}
}
