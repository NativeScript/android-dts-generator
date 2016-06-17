/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.telephony.SubscriptionInfo.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module telephony {
		export class SubscriptionManager {
			public static from(param0: android.content.Context): android.telephony.SubscriptionManager;
			public addOnSubscriptionsChangedListener(param0: android.telephony.SubscriptionManager.OnSubscriptionsChangedListener): void;
			public removeOnSubscriptionsChangedListener(param0: android.telephony.SubscriptionManager.OnSubscriptionsChangedListener): void;
			public getActiveSubscriptionInfo(param0: number): android.telephony.SubscriptionInfo;
			public getActiveSubscriptionInfoForSimSlotIndex(param0: number): android.telephony.SubscriptionInfo;
			public getActiveSubscriptionInfoList(): java.util.List;
			public getActiveSubscriptionInfoCount(): number;
			public getActiveSubscriptionInfoCountMax(): number;
			public isNetworkRoaming(param0: number): boolean;
			public static DATA_ROAMING_DISABLE: number;
			public static DATA_ROAMING_ENABLE: number;
		}
		export module SubscriptionManager {
			export class OnSubscriptionsChangedListener {
				public constructor();
				public onSubscriptionsChanged(): void;
			}
		}
	}
}
