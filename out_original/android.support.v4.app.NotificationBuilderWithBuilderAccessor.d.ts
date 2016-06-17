/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class NotificationBuilderWithBuilderAccessor {
					public getBuilder(): android.app.Notification.Builder;
					public build(): android.app.Notification;
				}
			}
		}
	}
}
