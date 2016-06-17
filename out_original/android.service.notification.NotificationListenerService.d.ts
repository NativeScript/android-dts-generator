/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.service.notification.StatusBarNotification.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module service {
		export module notification {
			export class NotificationListenerService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onNotificationPosted(param0: android.service.notification.StatusBarNotification): void;
				public onNotificationPosted(param0: android.service.notification.StatusBarNotification, param1: android.service.notification.NotificationListenerService.RankingMap): void;
				public onNotificationRemoved(param0: android.service.notification.StatusBarNotification): void;
				public onNotificationRemoved(param0: android.service.notification.StatusBarNotification, param1: android.service.notification.NotificationListenerService.RankingMap): void;
				public onListenerConnected(): void;
				public onNotificationRankingUpdate(param0: android.service.notification.NotificationListenerService.RankingMap): void;
				public onListenerHintsChanged(param0: number): void;
				public onInterruptionFilterChanged(param0: number): void;
				public cancelNotification(param0: string, param1: string, param2: number): void;
				public cancelNotification(param0: string): void;
				public cancelAllNotifications(): void;
				public cancelNotifications(param0: native.Array<string>): void;
				public setNotificationsShown(param0: native.Array<string>): void;
				public getActiveNotifications(): native.Array<android.service.notification.StatusBarNotification>;
				public getActiveNotifications(param0: native.Array<string>): native.Array<android.service.notification.StatusBarNotification>;
				public getCurrentListenerHints(): number;
				public getCurrentInterruptionFilter(): number;
				public requestListenerHints(param0: number): void;
				public requestInterruptionFilter(param0: number): void;
				public getCurrentRanking(): android.service.notification.NotificationListenerService.RankingMap;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public static HINT_HOST_DISABLE_EFFECTS: number;
				public static INTERRUPTION_FILTER_ALARMS: number;
				public static INTERRUPTION_FILTER_ALL: number;
				public static INTERRUPTION_FILTER_NONE: number;
				public static INTERRUPTION_FILTER_PRIORITY: number;
				public static INTERRUPTION_FILTER_UNKNOWN: number;
				public static SERVICE_INTERFACE: string;
			}
			export module NotificationListenerService {
				export class Ranking {
					public constructor();
					public getKey(): string;
					public getRank(): number;
					public isAmbient(): boolean;
					public matchesInterruptionFilter(): boolean;
				}
				export class RankingMap {
					public getOrderedKeys(): native.Array<string>;
					public getRanking(param0: string, param1: android.service.notification.NotificationListenerService.Ranking): boolean;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public static CREATOR: android.os.Parcelable.Creator;
				}
			}
		}
	}
}
