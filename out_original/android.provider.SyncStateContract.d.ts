/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.content.ContentProviderClient.d.ts" />
/// <reference path="./android.content.ContentProviderOperation.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.util.Pair.d.ts" />

declare module android {
	export module provider {
		export class SyncStateContract {
			public constructor();
		}
		export module SyncStateContract {
			export class Columns {
				public static ACCOUNT_NAME: string;
				public static ACCOUNT_TYPE: string;
				public static DATA: string;
			}
			export class Constants {
				public constructor();
				public static CONTENT_DIRECTORY: string;
			}
			export class Helpers {
				public constructor();
				public static get(param0: android.content.ContentProviderClient, param1: android.net.Uri, param2: android.accounts.Account): native.Array<number>;
				public static set(param0: android.content.ContentProviderClient, param1: android.net.Uri, param2: android.accounts.Account, param3: native.Array<number>): void;
				public static insert(param0: android.content.ContentProviderClient, param1: android.net.Uri, param2: android.accounts.Account, param3: native.Array<number>): android.net.Uri;
				public static update(param0: android.content.ContentProviderClient, param1: android.net.Uri, param2: native.Array<number>): void;
				public static getWithUri(param0: android.content.ContentProviderClient, param1: android.net.Uri, param2: android.accounts.Account): android.util.Pair;
				public static newSetOperation(param0: android.net.Uri, param1: android.accounts.Account, param2: native.Array<number>): android.content.ContentProviderOperation;
				public static newUpdateOperation(param0: android.net.Uri, param1: native.Array<number>): android.content.ContentProviderOperation;
			}
		}
	}
}
