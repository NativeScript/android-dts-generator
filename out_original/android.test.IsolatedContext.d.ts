/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.BroadcastReceiver.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.content.ServiceConnection.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module test {
		export class IsolatedContext {
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: android.content.ContentResolver, param1: android.content.Context);
			public getAndClearBroadcastIntents(): java.util.List;
			public getContentResolver(): android.content.ContentResolver;
			public bindService(param0: android.content.Intent, param1: android.content.ServiceConnection, param2: number): boolean;
			public registerReceiver(param0: android.content.BroadcastReceiver, param1: android.content.IntentFilter, param2: string, param3: android.os.Handler): android.content.Intent;
			public registerReceiver(param0: android.content.BroadcastReceiver, param1: android.content.IntentFilter): android.content.Intent;
			public unregisterReceiver(param0: android.content.BroadcastReceiver): void;
			public sendBroadcast(param0: android.content.Intent, param1: string): void;
			public sendBroadcast(param0: android.content.Intent): void;
			public sendOrderedBroadcast(param0: android.content.Intent, param1: string, param2: android.content.BroadcastReceiver, param3: android.os.Handler, param4: number, param5: string, param6: android.os.Bundle): void;
			public sendOrderedBroadcast(param0: android.content.Intent, param1: string): void;
			public checkUriPermission(param0: android.net.Uri, param1: number, param2: number, param3: number): number;
			public checkUriPermission(param0: android.net.Uri, param1: string, param2: string, param3: number, param4: number, param5: number): number;
			public checkUriPermission(param0: android.net.Uri, param1: number, param2: number, param3: number): number;
			public getSystemService(param0: java.lang.Class): java.lang.Object;
			public getSystemService(param0: string): java.lang.Object;
			public getFilesDir(): java.io.File;
		}
	}
}
