/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.widget.RemoteViews.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class NotificationCompatApi20 {
					public static addAction(param0: android.app.Notification.Builder, param1: android.support.v4.app.NotificationCompatBase.Action): void;
					public static getAction(param0: android.app.Notification, param1: number, param2: android.support.v4.app.NotificationCompatBase.Action.Factory, param3: android.support.v4.app.RemoteInputCompatBase.RemoteInput.Factory): android.support.v4.app.NotificationCompatBase.Action;
					public static getActionsFromParcelableArrayList(param0: java.util.ArrayList, param1: android.support.v4.app.NotificationCompatBase.Action.Factory, param2: android.support.v4.app.RemoteInputCompatBase.RemoteInput.Factory): native.Array<android.support.v4.app.NotificationCompatBase.Action>;
					public static getParcelableArrayListForActions(param0: native.Array<android.support.v4.app.NotificationCompatBase.Action>): java.util.ArrayList;
					public static getLocalOnly(param0: android.app.Notification): boolean;
					public static getGroup(param0: android.app.Notification): string;
					public static isGroupSummary(param0: android.app.Notification): boolean;
					public static getSortKey(param0: android.app.Notification): string;
				}
				export module NotificationCompatApi20 {
					export class Builder {
						public constructor();
						public constructor(param0: android.content.Context, param1: android.app.Notification, param2: string, param3: string, param4: string, param5: android.widget.RemoteViews, param6: number, param7: android.app.PendingIntent, param8: android.app.PendingIntent, param9: android.graphics.Bitmap, param10: number, param11: number, param12: boolean, param13: boolean, param14: boolean, param15: number, param16: string, param17: boolean, param18: java.util.ArrayList, param19: android.os.Bundle, param20: string, param21: boolean, param22: string);
						public addAction(param0: android.support.v4.app.NotificationCompatBase.Action): void;
						public getBuilder(): android.app.Notification.Builder;
						public build(): android.app.Notification;
					}
				}
			}
		}
	}
}
