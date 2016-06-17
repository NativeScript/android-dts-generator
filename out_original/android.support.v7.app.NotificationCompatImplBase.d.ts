/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.support.v4.app.NotificationBuilderWithBuilderAccessor.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class NotificationCompatImplBase {
					public static overrideContentView(param0: android.support.v4.app.NotificationBuilderWithBuilderAccessor, param1: android.content.Context, param2: string, param3: string, param4: string, param5: number, param6: android.graphics.Bitmap, param7: string, param8: boolean, param9: number, param10: java.util.List, param11: native.Array<number>, param12: boolean, param13: android.app.PendingIntent): void;
					public static overrideBigContentView(param0: android.app.Notification, param1: android.content.Context, param2: string, param3: string, param4: string, param5: number, param6: android.graphics.Bitmap, param7: string, param8: boolean, param9: number, param10: java.util.List, param11: boolean, param12: android.app.PendingIntent): void;
				}
			}
		}
	}
}
