/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.print.PrinterId.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module printservice {
		export class PrinterDiscoverySession {
			public constructor();
			public getPrinters(): java.util.List;
			public addPrinters(param0: java.util.List): void;
			public removePrinters(param0: java.util.List): void;
			public onStartPrinterDiscovery(param0: java.util.List): void;
			public onStopPrinterDiscovery(): void;
			public onValidatePrinters(param0: java.util.List): void;
			public onStartPrinterStateTracking(param0: android.print.PrinterId): void;
			public onStopPrinterStateTracking(param0: android.print.PrinterId): void;
			public getTrackedPrinters(): java.util.List;
			public onDestroy(): void;
			public isDestroyed(): boolean;
			public isPrinterDiscoveryStarted(): boolean;
		}
	}
}
