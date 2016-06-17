/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.app.NotificationBuilderWithBuilderAccessor.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.widget.RemoteViews.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class NotificationCompatJellybean {
					public static addBigTextStyle(param0: android.support.v4.app.NotificationBuilderWithBuilderAccessor, param1: string, param2: boolean, param3: string, param4: string): void;
					public static addBigPictureStyle(param0: android.support.v4.app.NotificationBuilderWithBuilderAccessor, param1: string, param2: boolean, param3: string, param4: android.graphics.Bitmap, param5: android.graphics.Bitmap, param6: boolean): void;
					public static addInboxStyle(param0: android.support.v4.app.NotificationBuilderWithBuilderAccessor, param1: string, param2: boolean, param3: string, param4: java.util.ArrayList): void;
					public static buildActionExtrasMap(param0: java.util.List): android.util.SparseArray;
					public static getExtras(param0: android.app.Notification): android.os.Bundle;
					public static readAction(param0: android.support.v4.app.NotificationCompatBase.Action.Factory, param1: android.support.v4.app.RemoteInputCompatBase.RemoteInput.Factory, param2: number, param3: string, param4: android.app.PendingIntent, param5: android.os.Bundle): android.support.v4.app.NotificationCompatBase.Action;
					public static writeActionAndGetExtras(param0: android.app.Notification.Builder, param1: android.support.v4.app.NotificationCompatBase.Action): android.os.Bundle;
					public static getActionCount(param0: android.app.Notification): number;
					public static getAction(param0: android.app.Notification, param1: number, param2: android.support.v4.app.NotificationCompatBase.Action.Factory, param3: android.support.v4.app.RemoteInputCompatBase.RemoteInput.Factory): android.support.v4.app.NotificationCompatBase.Action;
					public static getActionsFromParcelableArrayList(param0: java.util.ArrayList, param1: android.support.v4.app.NotificationCompatBase.Action.Factory, param2: android.support.v4.app.RemoteInputCompatBase.RemoteInput.Factory): native.Array<android.support.v4.app.NotificationCompatBase.Action>;
					public static getParcelableArrayListForActions(param0: native.Array<android.support.v4.app.NotificationCompatBase.Action>): java.util.ArrayList;
					public static getLocalOnly(param0: android.app.Notification): boolean;
					public static getGroup(param0: android.app.Notification): string;
					public static isGroupSummary(param0: android.app.Notification): boolean;
					public static getSortKey(param0: android.app.Notification): string;
					public static TAG: string;
				}
				export module NotificationCompatJellybean {
					export class Builder {
						public constructor();
						public constructor(param0: android.content.Context, param1: android.app.Notification, param2: string, param3: string, param4: string, param5: android.widget.RemoteViews, param6: number, param7: android.app.PendingIntent, param8: android.app.PendingIntent, param9: android.graphics.Bitmap, param10: number, param11: number, param12: boolean, param13: boolean, param14: number, param15: string, param16: boolean, param17: android.os.Bundle, param18: string, param19: boolean, param20: string);
						public addAction(param0: android.support.v4.app.NotificationCompatBase.Action): void;
						public getBuilder(): android.app.Notification.Builder;
						public build(): android.app.Notification;
					}
				}
			}
		}
	}
}
