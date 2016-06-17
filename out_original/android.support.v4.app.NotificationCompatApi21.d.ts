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
				export class NotificationCompatApi21 {
					public static getCategory(param0: android.app.Notification): string;
					public static CATEGORY_CALL: string;
					public static CATEGORY_MESSAGE: string;
					public static CATEGORY_EMAIL: string;
					public static CATEGORY_EVENT: string;
					public static CATEGORY_PROMO: string;
					public static CATEGORY_ALARM: string;
					public static CATEGORY_PROGRESS: string;
					public static CATEGORY_SOCIAL: string;
					public static CATEGORY_ERROR: string;
					public static CATEGORY_TRANSPORT: string;
					public static CATEGORY_SYSTEM: string;
					public static CATEGORY_SERVICE: string;
					public static CATEGORY_RECOMMENDATION: string;
					public static CATEGORY_STATUS: string;
				}
				export module NotificationCompatApi21 {
					export class Builder {
						public constructor();
						public constructor(param0: android.content.Context, param1: android.app.Notification, param2: string, param3: string, param4: string, param5: android.widget.RemoteViews, param6: number, param7: android.app.PendingIntent, param8: android.app.PendingIntent, param9: android.graphics.Bitmap, param10: number, param11: number, param12: boolean, param13: boolean, param14: boolean, param15: number, param16: string, param17: boolean, param18: string, param19: java.util.ArrayList, param20: android.os.Bundle, param21: number, param22: number, param23: android.app.Notification, param24: string, param25: boolean, param26: string);
						public addAction(param0: android.support.v4.app.NotificationCompatBase.Action): void;
						public getBuilder(): android.app.Notification.Builder;
						public build(): android.app.Notification;
					}
				}
			}
		}
	}
}
