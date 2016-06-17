/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./android.print.PageRange.d.ts" />
/// <reference path="./android.print.PrintAttributes.d.ts" />
/// <reference path="./android.print.PrintDocumentInfo.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module print {
		export class PrintDocumentAdapter {
			public constructor();
			public onStart(): void;
			public onLayout(param0: android.print.PrintAttributes, param1: android.print.PrintAttributes, param2: android.os.CancellationSignal, param3: android.print.PrintDocumentAdapter.LayoutResultCallback, param4: android.os.Bundle): void;
			public onWrite(param0: native.Array<android.print.PageRange>, param1: android.os.ParcelFileDescriptor, param2: android.os.CancellationSignal, param3: android.print.PrintDocumentAdapter.WriteResultCallback): void;
			public onFinish(): void;
			public static EXTRA_PRINT_PREVIEW: string;
		}
		export module PrintDocumentAdapter {
			export class LayoutResultCallback {
				public onLayoutFinished(param0: android.print.PrintDocumentInfo, param1: boolean): void;
				public onLayoutFailed(param0: string): void;
				public onLayoutCancelled(): void;
			}
			export class WriteResultCallback {
				public onWriteFinished(param0: native.Array<android.print.PageRange>): void;
				public onWriteFailed(param0: string): void;
				public onWriteCancelled(): void;
			}
		}
	}
}
