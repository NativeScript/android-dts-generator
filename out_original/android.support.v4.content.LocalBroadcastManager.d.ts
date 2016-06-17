/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.BroadcastReceiver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class LocalBroadcastManager {
					public static getInstance(param0: android.content.Context): android.support.v4.content.LocalBroadcastManager;
					public registerReceiver(param0: android.content.BroadcastReceiver, param1: android.content.IntentFilter): void;
					public unregisterReceiver(param0: android.content.BroadcastReceiver): void;
					public sendBroadcast(param0: android.content.Intent): boolean;
					public sendBroadcastSync(param0: android.content.Intent): void;
				}
				export module LocalBroadcastManager {
					export class BroadcastRecord {
					}
					export class ReceiverRecord {
						public toString(): string;
					}
				}
			}
		}
	}
}
