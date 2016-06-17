/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />

declare module android {
	export module content {
		export class ServiceConnection {
			public onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
			public onServiceDisconnected(param0: android.content.ComponentName): void;
		}
	}
}
