/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class INotificationSideChannel {
					public notify(): void;
					public notify(param0: string, param1: number, param2: string, param3: android.app.Notification): void;
					public cancel(param0: string, param1: number, param2: string): void;
					public cancelAll(param0: string): void;
				}
				export module INotificationSideChannel {
					export class Stub {
						public constructor();
						public static asInterface(param0: android.os.IBinder): android.support.v4.app.INotificationSideChannel;
						public asBinder(): android.os.IBinder;
						public onTransact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
					}
					export module Stub {
						export class Proxy {
							public asBinder(): android.os.IBinder;
							public getInterfaceDescriptor(): string;
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
}
