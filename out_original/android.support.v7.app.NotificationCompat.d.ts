/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v4.app.NotificationBuilderWithBuilderAccessor.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class NotificationCompat {
					public constructor();
				}
				export module NotificationCompat {
					export class Builder {
						public constructor();
						public constructor(param0: android.content.Context);
						public getExtender(): android.support.v4.app.NotificationCompat.BuilderExtender;
					}
					export class IceCreamSandwichExtender {
						public build(param0: android.support.v4.app.NotificationCompat.Builder, param1: android.support.v4.app.NotificationBuilderWithBuilderAccessor): android.app.Notification;
					}
					export class JellybeanExtender {
						public build(param0: android.support.v4.app.NotificationCompat.Builder, param1: android.support.v4.app.NotificationBuilderWithBuilderAccessor): android.app.Notification;
					}
					export class LollipopExtender {
						public build(param0: android.support.v4.app.NotificationCompat.Builder, param1: android.support.v4.app.NotificationBuilderWithBuilderAccessor): android.app.Notification;
					}
					export class MediaStyle {
						public constructor();
						public constructor(param0: android.support.v4.app.NotificationCompat.Builder);
						public setShowActionsInCompactView(param0: native.Array<number>): android.support.v7.app.NotificationCompat.MediaStyle;
						public setMediaSession(param0: android.support.v4.media.session.MediaSessionCompat.Token): android.support.v7.app.NotificationCompat.MediaStyle;
						public setShowCancelButton(param0: boolean): android.support.v7.app.NotificationCompat.MediaStyle;
						public setCancelButtonIntent(param0: android.app.PendingIntent): android.support.v7.app.NotificationCompat.MediaStyle;
					}
				}
			}
		}
	}
}
