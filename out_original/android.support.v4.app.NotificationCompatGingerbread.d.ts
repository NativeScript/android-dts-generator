/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class NotificationCompatGingerbread {
					public static add(param0: android.app.Notification, param1: android.content.Context, param2: string, param3: string, param4: android.app.PendingIntent, param5: android.app.PendingIntent): android.app.Notification;
				}
			}
		}
	}
}
