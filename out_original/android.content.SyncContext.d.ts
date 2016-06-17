/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.SyncResult.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />

declare module android {
	export module content {
		export class SyncContext {
			public onFinished(param0: android.content.SyncResult): void;
			public getSyncContextBinder(): android.os.IBinder;
		}
	}
}
