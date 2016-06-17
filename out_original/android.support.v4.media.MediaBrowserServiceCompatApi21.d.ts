/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class MediaBrowserServiceCompatApi21 {
					public static createService(): java.lang.Object;
					public static onCreate(param0: java.lang.Object, param1: android.support.v4.media.MediaBrowserServiceCompatApi21.ServiceImplApi21): void;
					public static onBind(param0: java.lang.Object, param1: android.content.Intent): android.os.IBinder;
				}
				export module MediaBrowserServiceCompatApi21 {
					export class MediaBrowserServiceAdaptorApi21 {
						public onCreate(param0: android.support.v4.media.MediaBrowserServiceCompatApi21.ServiceImplApi21): void;
						public onBind(param0: android.content.Intent): android.os.IBinder;
					}
					export module MediaBrowserServiceAdaptorApi21 {
						export class ServiceBinderProxyApi21 {
							public connect(param0: string, param1: android.os.Bundle, param2: java.lang.Object): void;
							public disconnect(param0: java.lang.Object): void;
							public addSubscription(param0: string, param1: java.lang.Object): void;
							public removeSubscription(param0: string, param1: java.lang.Object): void;
							public getMediaItem(param0: string, param1: android.os.ResultReceiver): void;
						}
					}
					export class ServiceCallbacks {
						public asBinder(): android.os.IBinder;
						public onConnect(param0: string, param1: java.lang.Object, param2: android.os.Bundle): void;
						public onConnectFailed(): void;
						public onLoadChildren(param0: string, param1: java.util.List): void;
					}
					export class ServiceCallbacksApi21 {
						public asBinder(): android.os.IBinder;
						public onConnect(param0: string, param1: java.lang.Object, param2: android.os.Bundle): void;
						public onConnectFailed(): void;
						public onLoadChildren(param0: string, param1: java.util.List): void;
					}
					export class ServiceImplApi21 {
						public connect(param0: string, param1: android.os.Bundle, param2: android.support.v4.media.MediaBrowserServiceCompatApi21.ServiceCallbacks): void;
						public disconnect(param0: android.support.v4.media.MediaBrowserServiceCompatApi21.ServiceCallbacks): void;
						public addSubscription(param0: string, param1: android.support.v4.media.MediaBrowserServiceCompatApi21.ServiceCallbacks): void;
						public removeSubscription(param0: string, param1: android.support.v4.media.MediaBrowserServiceCompatApi21.ServiceCallbacks): void;
					}
				}
			}
		}
	}
}
