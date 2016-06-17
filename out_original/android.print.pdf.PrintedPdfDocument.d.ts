/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.print.PrintAttributes.d.ts" />

declare module android {
	export module print {
		export module pdf {
			export class PrintedPdfDocument {
				public constructor();
				public constructor(param0: android.content.Context, param1: android.print.PrintAttributes);
				public startPage(param0: android.graphics.pdf.PdfDocument.PageInfo): android.graphics.pdf.PdfDocument.Page;
				public startPage(param0: number): android.graphics.pdf.PdfDocument.Page;
				public getPageWidth(): number;
				public getPageHeight(): number;
				public getPageContentRect(): android.graphics.Rect;
			}
		}
	}
}
