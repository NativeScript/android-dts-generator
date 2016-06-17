/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.app.NotificationManager.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.support.v4.app.INotificationSideChannel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.LinkedList.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class NotificationManagerCompat {
					public static from(param0: android.content.Context): android.support.v4.app.NotificationManagerCompat;
					public cancel(param0: number): void;
					public cancel(param0: string, param1: number): void;
					public cancelAll(): void;
					public notify(): void;
					public notify(param0: number, param1: android.app.Notification): void;
					public notify(param0: string, param1: number, param2: android.app.Notification): void;
					public static getEnabledListenerPackages(param0: android.content.Context): java.util.Set;
					public static EXTRA_USE_SIDE_CHANNEL: string;
					public static ACTION_BIND_SIDE_CHANNEL: string;
				}
				export module NotificationManagerCompat {
					export class CancelTask {
						public constructor();
						public constructor(param0: string);
						public constructor(param0: string, param1: number, param2: string);
						public send(param0: android.support.v4.app.INotificationSideChannel): void;
						public toString(): string;
					}
					export class Impl {
						public cancelNotification(param0: android.app.NotificationManager, param1: string, param2: number): void;
						public postNotification(param0: android.app.NotificationManager, param1: string, param2: number, param3: android.app.Notification): void;
						public getSideChannelBindFlags(): number;
					}
					export class ImplBase {
						public cancelNotification(param0: android.app.NotificationManager, param1: string, param2: number): void;
						public postNotification(param0: android.app.NotificationManager, param1: string, param2: number, param3: android.app.Notification): void;
						public getSideChannelBindFlags(): number;
					}
					export class ImplEclair {
						public cancelNotification(param0: android.app.NotificationManager, param1: string, param2: number): void;
						public postNotification(param0: android.app.NotificationManager, param1: string, param2: number, param3: android.app.Notification): void;
					}
					export class ImplIceCreamSandwich {
						public getSideChannelBindFlags(): number;
					}
					export class NotifyTask {
						public constructor();
						public constructor(param0: string, param1: number, param2: string, param3: android.app.Notification);
						public send(param0: android.support.v4.app.INotificationSideChannel): void;
						public toString(): string;
					}
					export class ServiceConnectedEvent {
						public constructor();
						public constructor(param0: android.content.ComponentName, param1: android.os.IBinder);
					}
					export class SideChannelManager {
						public constructor();
						public constructor(param0: android.content.Context);
						public queueTask(param0: android.support.v4.app.NotificationManagerCompat.Task): void;
						public handleMessage(param0: android.os.Message): boolean;
						public onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
						public onServiceDisconnected(param0: android.content.ComponentName): void;
					}
					export module SideChannelManager {
						export class ListenerRecord {
							public constructor();
							public constructor(param0: android.content.ComponentName);
							public componentName: android.content.ComponentName;
							public bound: boolean;
							public service: android.support.v4.app.INotificationSideChannel;
							public taskQueue: java.util.LinkedList;
							public retryCount: number;
						}
					}
					export class Task {
						public send(param0: android.support.v4.app.INotificationSideChannel): void;
					}
				}
			}
		}
	}
}
