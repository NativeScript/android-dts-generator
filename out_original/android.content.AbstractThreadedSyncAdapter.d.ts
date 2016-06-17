/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.content.ContentProviderClient.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.SyncResult.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />

declare module android {
	export module content {
		export class AbstractThreadedSyncAdapter {
			public constructor();
			public constructor(param0: android.content.Context, param1: boolean);
			public constructor(param0: android.content.Context, param1: boolean, param2: boolean);
			public getContext(): android.content.Context;
			public getSyncAdapterBinder(): android.os.IBinder;
			public onPerformSync(param0: android.accounts.Account, param1: android.os.Bundle, param2: string, param3: android.content.ContentProviderClient, param4: android.content.SyncResult): void;
			public onSecurityException(param0: android.accounts.Account, param1: android.os.Bundle, param2: string, param3: android.content.SyncResult): void;
			public onSyncCanceled(): void;
			public onSyncCanceled(param0: java.lang.Thread): void;
			public static LOG_SYNC_DETAILS: number;
		}
	}
}
