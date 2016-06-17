/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module graphics {
		export module pdf {
			export class PdfDocument {
				public constructor();
				public startPage(param0: android.graphics.pdf.PdfDocument.PageInfo): android.graphics.pdf.PdfDocument.Page;
				public finishPage(param0: android.graphics.pdf.PdfDocument.Page): void;
				public writeTo(param0: java.io.OutputStream): void;
				public getPages(): java.util.List;
				public close(): void;
				public finalize(): void;
			}
			export module PdfDocument {
				export class Page {
					public getCanvas(): android.graphics.Canvas;
					public getInfo(): android.graphics.pdf.PdfDocument.PageInfo;
				}
				export class PageInfo {
					public getPageWidth(): number;
					public getPageHeight(): number;
					public getContentRect(): android.graphics.Rect;
					public getPageNumber(): number;
				}
				export module PageInfo {
					export class Builder {
						public constructor();
						public constructor(param0: number, param1: number, param2: number);
						public setContentRect(param0: android.graphics.Rect): android.graphics.pdf.PdfDocument.PageInfo.Builder;
						public create(): android.graphics.pdf.PdfDocument.PageInfo;
					}
				}
			}
		}
	}
}
