/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class BroadcastReceiver {
			public constructor();
			public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
			public goAsync(): android.content.BroadcastReceiver.PendingResult;
			public peekService(param0: android.content.Context, param1: android.content.Intent): android.os.IBinder;
			public setResultCode(param0: number): void;
			public getResultCode(): number;
			public setResultData(param0: string): void;
			public getResultData(): string;
			public setResultExtras(param0: android.os.Bundle): void;
			public getResultExtras(param0: boolean): android.os.Bundle;
			public setResult(param0: number, param1: string, param2: android.os.Bundle): void;
			public getAbortBroadcast(): boolean;
			public abortBroadcast(): void;
			public clearAbortBroadcast(): void;
			public isOrderedBroadcast(): boolean;
			public isInitialStickyBroadcast(): boolean;
			public setOrderedHint(param0: boolean): void;
			public setDebugUnregister(param0: boolean): void;
			public getDebugUnregister(): boolean;
		}
		export module BroadcastReceiver {
			export class PendingResult {
				public setResultCode(param0: number): void;
				public getResultCode(): number;
				public setResultData(param0: string): void;
				public getResultData(): string;
				public setResultExtras(param0: android.os.Bundle): void;
				public getResultExtras(param0: boolean): android.os.Bundle;
				public setResult(param0: number, param1: string, param2: android.os.Bundle): void;
				public getAbortBroadcast(): boolean;
				public abortBroadcast(): void;
				public clearAbortBroadcast(): void;
				public finish(): void;
			}
		}
	}
}
