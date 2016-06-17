/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.app.NotificationManager.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class NotificationManagerCompatEclair {
					public static postNotification(param0: android.app.NotificationManager, param1: string, param2: number, param3: android.app.Notification): void;
				}
			}
		}
	}
}
