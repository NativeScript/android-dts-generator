/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />

declare module android {
	export module graphics {
		export module pdf {
			export class PdfRenderer {
				public constructor();
				public constructor(param0: android.os.ParcelFileDescriptor);
				public close(): void;
				public getPageCount(): number;
				public shouldScaleForPrinting(): boolean;
				public openPage(param0: number): android.graphics.pdf.PdfRenderer.Page;
				public finalize(): void;
			}
			export module PdfRenderer {
				export class Page {
					public getIndex(): number;
					public getWidth(): number;
					public getHeight(): number;
					public render(param0: android.graphics.Bitmap, param1: android.graphics.Rect, param2: android.graphics.Matrix, param3: number): void;
					public close(): void;
					public finalize(): void;
					public static RENDER_MODE_FOR_DISPLAY: number;
					public static RENDER_MODE_FOR_PRINT: number;
				}
			}
		}
	}
}
