/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.print.PrintAttributes.d.ts" />
/// <reference path="./android.print.PrintDocumentAdapter.d.ts" />
/// <reference path="./android.print.PrintJob.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module print {
		export class PrintManager {
			public getPrintJobs(): java.util.List;
			public print(param0: string, param1: android.print.PrintDocumentAdapter, param2: android.print.PrintAttributes): android.print.PrintJob;
		}
	}
}
