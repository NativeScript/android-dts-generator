/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class Loader {
			public constructor();
			public constructor(param0: android.content.Context);
			public deliverResult(param0: java.lang.Object): void;
			public deliverCancellation(): void;
			public getContext(): android.content.Context;
			public getId(): number;
			public registerListener(param0: number, param1: android.content.Loader.OnLoadCompleteListener): void;
			public unregisterListener(param0: android.content.Loader.OnLoadCompleteListener): void;
			public registerOnLoadCanceledListener(param0: android.content.Loader.OnLoadCanceledListener): void;
			public unregisterOnLoadCanceledListener(param0: android.content.Loader.OnLoadCanceledListener): void;
			public isStarted(): boolean;
			public isAbandoned(): boolean;
			public isReset(): boolean;
			public startLoading(): void;
			public onStartLoading(): void;
			public cancelLoad(): boolean;
			public onCancelLoad(): boolean;
			public forceLoad(): void;
			public onForceLoad(): void;
			public stopLoading(): void;
			public onStopLoading(): void;
			public abandon(): void;
			public onAbandon(): void;
			public reset(): void;
			public onReset(): void;
			public takeContentChanged(): boolean;
			public commitContentChanged(): void;
			public rollbackContentChanged(): void;
			public onContentChanged(): void;
			public dataToString(param0: java.lang.Object): string;
			public toString(): string;
			public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
		}
		export module Loader {
			export class ForceLoadContentObserver {
				public constructor(param0: android.os.Handler);
				public constructor();
				public constructor(param0: android.content.Loader);
				public deliverSelfNotifications(): boolean;
				public onChange(param0: boolean, param1: android.net.Uri): void;
				public onChange(param0: boolean): void;
			}
			export class OnLoadCanceledListener {
				public onLoadCanceled(param0: android.content.Loader): void;
			}
			export class OnLoadCompleteListener {
				public onLoadComplete(param0: android.content.Loader, param1: java.lang.Object): void;
			}
		}
	}
}
