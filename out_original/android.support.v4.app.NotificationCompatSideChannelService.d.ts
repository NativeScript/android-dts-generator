/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class NotificationCompatSideChannelService {
					public constructor(param0: android.content.Context);
					public constructor();
					public onBind(param0: android.content.Intent): android.os.IBinder;
					public notify(): void;
					public notify(param0: string, param1: number, param2: string, param3: android.app.Notification): void;
					public cancel(param0: string, param1: number, param2: string): void;
					public cancelAll(param0: string): void;
				}
				export module NotificationCompatSideChannelService {
					export class NotificationSideChannelStub {
						public notify(): void;
						public notify(param0: string, param1: number, param2: string, param3: android.app.Notification): void;
						public cancel(param0: string, param1: number, param2: string): void;
						public cancelAll(param0: string): void;
					}
				}
			}
		}
	}
}
