/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class NotificationCompatBase {
					public constructor();
					public static add(param0: android.app.Notification, param1: android.content.Context, param2: string, param3: string, param4: android.app.PendingIntent): android.app.Notification;
				}
				export module NotificationCompatBase {
					export class Action {
						public constructor();
						public getIcon(): number;
						public getTitle(): string;
						public getActionIntent(): android.app.PendingIntent;
						public getExtras(): android.os.Bundle;
						public getRemoteInputs(): native.Array<android.support.v4.app.RemoteInputCompatBase.RemoteInput>;
					}
					export module Action {
						export class Factory {
							public build(param0: number, param1: string, param2: android.app.PendingIntent, param3: android.os.Bundle, param4: native.Array<android.support.v4.app.RemoteInputCompatBase.RemoteInput>): android.support.v4.app.NotificationCompatBase.Action;
							public newArray(param0: number): native.Array<android.support.v4.app.NotificationCompatBase.Action>;
						}
					}
					export class UnreadConversation {
						public constructor();
					}
					export module UnreadConversation {
						export class Factory {
							public build(param0: native.Array<string>, param1: android.support.v4.app.RemoteInputCompatBase.RemoteInput, param2: android.app.PendingIntent, param3: android.app.PendingIntent, param4: native.Array<string>, param5: number): android.support.v4.app.NotificationCompatBase.UnreadConversation;
						}
					}
				}
			}
		}
	}
}
