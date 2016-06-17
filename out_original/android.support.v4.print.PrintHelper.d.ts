/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module print {
				export class PrintHelper {
					public static systemSupportsPrint(): boolean;
					public constructor();
					public constructor(param0: android.content.Context);
					public setScaleMode(param0: number): void;
					public getScaleMode(): number;
					public setColorMode(param0: number): void;
					public getColorMode(): number;
					public setOrientation(param0: number): void;
					public getOrientation(): number;
					public printBitmap(param0: string, param1: android.graphics.Bitmap): void;
					public printBitmap(param0: string, param1: android.graphics.Bitmap, param2: android.support.v4.print.PrintHelper.OnPrintFinishCallback): void;
					public printBitmap(param0: string, param1: android.net.Uri): void;
					public printBitmap(param0: string, param1: android.net.Uri, param2: android.support.v4.print.PrintHelper.OnPrintFinishCallback): void;
					public static SCALE_MODE_FIT: number;
					public static SCALE_MODE_FILL: number;
					public static COLOR_MODE_MONOCHROME: number;
					public static COLOR_MODE_COLOR: number;
					public static ORIENTATION_LANDSCAPE: number;
					public static ORIENTATION_PORTRAIT: number;
				}
				export module PrintHelper {
					export class OnPrintFinishCallback {
						public onFinish(): void;
					}
					export class PrintHelperKitkatImpl {
						public setScaleMode(param0: number): void;
						public getScaleMode(): number;
						public setColorMode(param0: number): void;
						public getColorMode(): number;
						public setOrientation(param0: number): void;
						public getOrientation(): number;
						public printBitmap(param0: string, param1: android.graphics.Bitmap, param2: android.support.v4.print.PrintHelper.OnPrintFinishCallback): void;
						public printBitmap(param0: string, param1: android.net.Uri, param2: android.support.v4.print.PrintHelper.OnPrintFinishCallback): void;
					}
					export class PrintHelperStubImpl {
						public setScaleMode(param0: number): void;
						public getColorMode(): number;
						public setColorMode(param0: number): void;
						public setOrientation(param0: number): void;
						public getOrientation(): number;
						public getScaleMode(): number;
						public printBitmap(param0: string, param1: android.graphics.Bitmap, param2: android.support.v4.print.PrintHelper.OnPrintFinishCallback): void;
						public printBitmap(param0: string, param1: android.net.Uri, param2: android.support.v4.print.PrintHelper.OnPrintFinishCallback): void;
					}
					export class PrintHelperVersionImpl {
						public setScaleMode(param0: number): void;
						public getScaleMode(): number;
						public setColorMode(param0: number): void;
						public getColorMode(): number;
						public setOrientation(param0: number): void;
						public getOrientation(): number;
						public printBitmap(param0: string, param1: android.graphics.Bitmap, param2: android.support.v4.print.PrintHelper.OnPrintFinishCallback): void;
						public printBitmap(param0: string, param1: android.net.Uri, param2: android.support.v4.print.PrintHelper.OnPrintFinishCallback): void;
					}
				}
			}
		}
	}
}
