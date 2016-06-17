/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./android.print.PrintDocumentInfo.d.ts" />

declare module android {
	export module printservice {
		export class PrintDocument {
			public getInfo(): android.print.PrintDocumentInfo;
			public getData(): android.os.ParcelFileDescriptor;
		}
	}
}
