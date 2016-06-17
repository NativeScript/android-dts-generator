/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.widget.RemoteViews.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class NotificationCompatIceCreamSandwich {
				}
				export module NotificationCompatIceCreamSandwich {
					export class Builder {
						public constructor();
						public constructor(param0: android.content.Context, param1: android.app.Notification, param2: string, param3: string, param4: string, param5: android.widget.RemoteViews, param6: number, param7: android.app.PendingIntent, param8: android.app.PendingIntent, param9: android.graphics.Bitmap, param10: number, param11: number, param12: boolean);
						public getBuilder(): android.app.Notification.Builder;
						public build(): android.app.Notification;
					}
				}
			}
		}
	}
}
