/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class MediaBrowserCompatApi21 {
					public static createConnectionCallback(param0: android.support.v4.media.MediaBrowserCompatApi21.ConnectionCallback): java.lang.Object;
					public static createBrowser(param0: android.content.Context, param1: android.content.ComponentName, param2: java.lang.Object, param3: android.os.Bundle): java.lang.Object;
					public static connect(param0: java.lang.Object): void;
					public static disconnect(param0: java.lang.Object): void;
					public static isConnected(param0: java.lang.Object): boolean;
					public static getServiceComponent(param0: java.lang.Object): android.content.ComponentName;
					public static getRoot(param0: java.lang.Object): string;
					public static getExtras(param0: java.lang.Object): android.os.Bundle;
					public static getSessionToken(param0: java.lang.Object): java.lang.Object;
					public static createSubscriptionCallback(param0: android.support.v4.media.MediaBrowserCompatApi21.SubscriptionCallback): java.lang.Object;
					public static subscribe(param0: java.lang.Object, param1: string, param2: java.lang.Object): void;
					public static unsubscribe(param0: java.lang.Object, param1: string): void;
				}
				export module MediaBrowserCompatApi21 {
					export class ConnectionCallback {
						public onConnected(): void;
						public onConnectionSuspended(): void;
						public onConnectionFailed(): void;
					}
					export class ConnectionCallbackProxy {
						public constructor();
						public constructor(param0: android.support.v4.media.MediaBrowserCompatApi21.ConnectionCallback);
						public onConnected(): void;
						public onConnectionSuspended(): void;
						public onConnectionFailed(): void;
						public mConnectionCallback: android.support.v4.media.MediaBrowserCompatApi21.ConnectionCallback;
					}
					export class SubscriptionCallback {
						public onChildrenLoaded(param0: string, param1: java.util.List): void;
						public onError(param0: string): void;
					}
					export class SubscriptionCallbackProxy {
						public constructor();
						public constructor(param0: android.support.v4.media.MediaBrowserCompatApi21.SubscriptionCallback);
						public onChildrenLoaded(param0: string, param1: java.util.List): void;
						public onError(param0: string): void;
						public mSubscriptionCallback: android.support.v4.media.MediaBrowserCompatApi21.SubscriptionCallback;
					}
				}
			}
		}
	}
}
