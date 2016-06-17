/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.print.PrinterId.d.ts" />
/// <reference path="./android.printservice.PrintJob.d.ts" />
/// <reference path="./android.printservice.PrinterDiscoverySession.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module printservice {
		export class PrintService {
			public constructor(param0: android.content.Context);
			public constructor();
			public attachBaseContext(param0: android.content.Context): void;
			public onConnected(): void;
			public onDisconnected(): void;
			public onCreatePrinterDiscoverySession(): android.printservice.PrinterDiscoverySession;
			public onRequestCancelPrintJob(param0: android.printservice.PrintJob): void;
			public onPrintJobQueued(param0: android.printservice.PrintJob): void;
			public getActivePrintJobs(): java.util.List;
			public generatePrinterId(param0: string): android.print.PrinterId;
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public static EXTRA_PRINTER_INFO: string;
			public static EXTRA_PRINT_DOCUMENT_INFO: string;
			public static EXTRA_PRINT_JOB_INFO: string;
			public static SERVICE_INTERFACE: string;
			public static SERVICE_META_DATA: string;
		}
	}
}
