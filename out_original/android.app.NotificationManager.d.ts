/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.service.notification.StatusBarNotification.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class NotificationManager {
			public notify(): void;
			public notify(param0: number, param1: android.app.Notification): void;
			public notify(param0: string, param1: number, param2: android.app.Notification): void;
			public cancel(param0: number): void;
			public cancel(param0: string, param1: number): void;
			public cancelAll(): void;
			public isNotificationPolicyAccessGranted(): boolean;
			public getNotificationPolicy(): android.app.NotificationManager.Policy;
			public setNotificationPolicy(param0: android.app.NotificationManager.Policy): void;
			public getActiveNotifications(): native.Array<android.service.notification.StatusBarNotification>;
			public getCurrentInterruptionFilter(): number;
			public setInterruptionFilter(param0: number): void;
			public static ACTION_INTERRUPTION_FILTER_CHANGED: string;
			public static ACTION_NOTIFICATION_POLICY_ACCESS_GRANTED_CHANGED: string;
			public static ACTION_NOTIFICATION_POLICY_CHANGED: string;
			public static INTERRUPTION_FILTER_ALARMS: number;
			public static INTERRUPTION_FILTER_ALL: number;
			public static INTERRUPTION_FILTER_NONE: number;
			public static INTERRUPTION_FILTER_PRIORITY: number;
			public static INTERRUPTION_FILTER_UNKNOWN: number;
		}
		export module NotificationManager {
			export class Policy {
				public constructor();
				public constructor(param0: number, param1: number, param2: number);
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public toString(): string;
				public static priorityCategoriesToString(param0: number): string;
				public static prioritySendersToString(param0: number): string;
				public static CREATOR: android.os.Parcelable.Creator;
				public static PRIORITY_CATEGORY_CALLS: number;
				public static PRIORITY_CATEGORY_EVENTS: number;
				public static PRIORITY_CATEGORY_MESSAGES: number;
				public static PRIORITY_CATEGORY_REMINDERS: number;
				public static PRIORITY_CATEGORY_REPEAT_CALLERS: number;
				public static PRIORITY_SENDERS_ANY: number;
				public static PRIORITY_SENDERS_CONTACTS: number;
				public static PRIORITY_SENDERS_STARRED: number;
				public priorityCallSenders: number;
				public priorityCategories: number;
				public priorityMessageSenders: number;
			}
		}
	}
}
