/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.content.ContentProviderClient.d.ts" />
/// <reference path="./android.content.ContentProviderResult.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.SyncAdapterType.d.ts" />
/// <reference path="./android.content.SyncInfo.d.ts" />
/// <reference path="./android.content.SyncRequest.d.ts" />
/// <reference path="./android.content.SyncStatusObserver.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module content {
		export class ContentResolver {
			public constructor();
			public constructor(param0: android.content.Context);
			public getType(param0: android.net.Uri): string;
			public getStreamTypes(param0: android.net.Uri, param1: string): native.Array<string>;
			public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;
			public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: android.os.CancellationSignal): android.database.Cursor;
			public canonicalize(param0: android.net.Uri): android.net.Uri;
			public uncanonicalize(param0: android.net.Uri): android.net.Uri;
			public openInputStream(param0: android.net.Uri): java.io.InputStream;
			public openOutputStream(param0: android.net.Uri): java.io.OutputStream;
			public openOutputStream(param0: android.net.Uri, param1: string): java.io.OutputStream;
			public openFileDescriptor(param0: android.net.Uri, param1: string): android.os.ParcelFileDescriptor;
			public openFileDescriptor(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.os.ParcelFileDescriptor;
			public openAssetFileDescriptor(param0: android.net.Uri, param1: string): android.content.res.AssetFileDescriptor;
			public openAssetFileDescriptor(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;
			public openTypedAssetFileDescriptor(param0: android.net.Uri, param1: string, param2: android.os.Bundle): android.content.res.AssetFileDescriptor;
			public openTypedAssetFileDescriptor(param0: android.net.Uri, param1: string, param2: android.os.Bundle, param3: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;
			public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;
			public applyBatch(param0: string, param1: java.util.ArrayList): native.Array<android.content.ContentProviderResult>;
			public bulkInsert(param0: android.net.Uri, param1: native.Array<android.content.ContentValues>): number;
			public delete(param0: android.net.Uri, param1: string, param2: native.Array<string>): number;
			public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;
			public call(param0: android.net.Uri, param1: string, param2: string, param3: android.os.Bundle): android.os.Bundle;
			public acquireContentProviderClient(param0: android.net.Uri): android.content.ContentProviderClient;
			public acquireContentProviderClient(param0: string): android.content.ContentProviderClient;
			public acquireUnstableContentProviderClient(param0: android.net.Uri): android.content.ContentProviderClient;
			public acquireUnstableContentProviderClient(param0: string): android.content.ContentProviderClient;
			public registerContentObserver(param0: android.net.Uri, param1: boolean, param2: android.database.ContentObserver): void;
			public unregisterContentObserver(param0: android.database.ContentObserver): void;
			public notifyChange(param0: android.net.Uri, param1: android.database.ContentObserver): void;
			public notifyChange(param0: android.net.Uri, param1: android.database.ContentObserver, param2: boolean): void;
			public takePersistableUriPermission(param0: android.net.Uri, param1: number): void;
			public releasePersistableUriPermission(param0: android.net.Uri, param1: number): void;
			public getPersistedUriPermissions(): java.util.List;
			public getOutgoingPersistedUriPermissions(): java.util.List;
			public startSync(param0: android.net.Uri, param1: android.os.Bundle): void;
			public static requestSync(param0: android.accounts.Account, param1: string, param2: android.os.Bundle): void;
			public static requestSync(param0: android.content.SyncRequest): void;
			public static validateSyncExtrasBundle(param0: android.os.Bundle): void;
			public cancelSync(param0: android.net.Uri): void;
			public static cancelSync(param0: android.accounts.Account, param1: string): void;
			public static getSyncAdapterTypes(): native.Array<android.content.SyncAdapterType>;
			public static getSyncAutomatically(param0: android.accounts.Account, param1: string): boolean;
			public static setSyncAutomatically(param0: android.accounts.Account, param1: string, param2: boolean): void;
			public static addPeriodicSync(param0: android.accounts.Account, param1: string, param2: android.os.Bundle, param3: number): void;
			public static removePeriodicSync(param0: android.accounts.Account, param1: string, param2: android.os.Bundle): void;
			public static cancelSync(param0: android.content.SyncRequest): void;
			public static getPeriodicSyncs(param0: android.accounts.Account, param1: string): java.util.List;
			public static getIsSyncable(param0: android.accounts.Account, param1: string): number;
			public static setIsSyncable(param0: android.accounts.Account, param1: string, param2: number): void;
			public static getMasterSyncAutomatically(): boolean;
			public static setMasterSyncAutomatically(param0: boolean): void;
			public static isSyncActive(param0: android.accounts.Account, param1: string): boolean;
			public static getCurrentSync(): android.content.SyncInfo;
			public static getCurrentSyncs(): java.util.List;
			public static isSyncPending(param0: android.accounts.Account, param1: string): boolean;
			public static addStatusChangeListener(param0: number, param1: android.content.SyncStatusObserver): java.lang.Object;
			public static removeStatusChangeListener(param0: java.lang.Object): void;
			public static ANY_CURSOR_ITEM_TYPE: string;
			public static CURSOR_DIR_BASE_TYPE: string;
			public static CURSOR_ITEM_BASE_TYPE: string;
			public static EXTRA_SIZE: string;
			public static SCHEME_ANDROID_RESOURCE: string;
			public static SCHEME_CONTENT: string;
			public static SCHEME_FILE: string;
			public static SYNC_EXTRAS_ACCOUNT: string;
			public static SYNC_EXTRAS_DISCARD_LOCAL_DELETIONS: string;
			public static SYNC_EXTRAS_DO_NOT_RETRY: string;
			public static SYNC_EXTRAS_EXPEDITED: string;
			public static SYNC_EXTRAS_FORCE: string;
			public static SYNC_EXTRAS_IGNORE_BACKOFF: string;
			public static SYNC_EXTRAS_IGNORE_SETTINGS: string;
			public static SYNC_EXTRAS_INITIALIZE: string;
			public static SYNC_EXTRAS_MANUAL: string;
			public static SYNC_EXTRAS_OVERRIDE_TOO_MANY_DELETIONS: string;
			public static SYNC_EXTRAS_UPLOAD: string;
			public static SYNC_OBSERVER_TYPE_ACTIVE: number;
			public static SYNC_OBSERVER_TYPE_PENDING: number;
			public static SYNC_OBSERVER_TYPE_SETTINGS: number;
		}
	}
}
