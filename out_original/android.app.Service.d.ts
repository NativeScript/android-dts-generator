/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Application.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />

declare module android {
	export module app {
		export class Service {
			public constructor(param0: android.content.Context);
			public constructor();
			public getApplication(): android.app.Application;
			public onCreate(): void;
			public onStart(param0: android.content.Intent, param1: number): void;
			public onStartCommand(param0: android.content.Intent, param1: number, param2: number): number;
			public onDestroy(): void;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public onLowMemory(): void;
			public onTrimMemory(param0: number): void;
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public onUnbind(param0: android.content.Intent): boolean;
			public onRebind(param0: android.content.Intent): void;
			public onTaskRemoved(param0: android.content.Intent): void;
			public stopSelf(): void;
			public stopSelf(param0: number): void;
			public stopSelfResult(param0: number): boolean;
			public startForeground(param0: number, param1: android.app.Notification): void;
			public stopForeground(param0: boolean): void;
			public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
			public static START_CONTINUATION_MASK: number;
			public static START_FLAG_REDELIVERY: number;
			public static START_FLAG_RETRY: number;
			public static START_NOT_STICKY: number;
			public static START_REDELIVER_INTENT: number;
			public static START_STICKY: number;
			public static START_STICKY_COMPATIBILITY: number;
		}
	}
}
