/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.support.v4.os.ResultReceiver.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class MediaBrowserServiceCompat {
					public constructor(param0: android.content.Context);
					public constructor();
					public onCreate(): void;
					public onBind(param0: android.content.Intent): android.os.IBinder;
					public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
					public onGetRoot(param0: string, param1: number, param2: android.os.Bundle): android.support.v4.media.MediaBrowserServiceCompat.BrowserRoot;
					public onLoadChildren(param0: string, param1: android.support.v4.media.MediaBrowserServiceCompat.Result): void;
					public onLoadChildren(param0: string, param1: android.support.v4.media.MediaBrowserServiceCompat.Result, param2: android.os.Bundle): void;
					public onLoadItem(param0: string, param1: android.support.v4.media.MediaBrowserServiceCompat.Result): void;
					public setSessionToken(param0: android.support.v4.media.session.MediaSessionCompat.Token): void;
					public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
					public notifyChildrenChanged(param0: string): void;
					public notifyChildrenChanged(param0: string, param1: android.os.Bundle): void;
					public static SERVICE_INTERFACE: string;
					public static KEY_MEDIA_ITEM: string;
				}
				export module MediaBrowserServiceCompat {
					export class BrowserRoot {
						public constructor();
						public constructor(param0: string, param1: android.os.Bundle);
						public getRootId(): string;
						public getExtras(): android.os.Bundle;
						public static EXTRA_RECENT: string;
						public static EXTRA_OFFLINE: string;
						public static EXTRA_SUGGESTED: string;
					}
					export class ConnectionRecord {
					}
					export class MediaBrowserServiceImpl {
						public onCreate(): void;
						public onBind(param0: android.content.Intent): android.os.IBinder;
					}
					export class MediaBrowserServiceImplApi21 {
						public onCreate(): void;
						public onBind(param0: android.content.Intent): android.os.IBinder;
					}
					export class MediaBrowserServiceImplApi23 {
						public onCreate(): void;
						public onBind(param0: android.content.Intent): android.os.IBinder;
					}
					export class MediaBrowserServiceImplBase {
						public onCreate(): void;
						public onBind(param0: android.content.Intent): android.os.IBinder;
					}
					export class Result {
						public sendResult(param0: java.lang.Object): void;
						public detach(): void;
					}
					export class ServiceCallbacks {
						public asBinder(): android.os.IBinder;
						public onConnect(param0: string, param1: android.support.v4.media.session.MediaSessionCompat.Token, param2: android.os.Bundle): void;
						public onConnectFailed(): void;
						public onLoadChildren(param0: string, param1: java.util.List, param2: android.os.Bundle): void;
					}
					export class ServiceCallbacksApi21 {
						public asBinder(): android.os.IBinder;
						public onConnect(param0: string, param1: android.support.v4.media.session.MediaSessionCompat.Token, param2: android.os.Bundle): void;
						public onConnectFailed(): void;
						public onLoadChildren(param0: string, param1: java.util.List, param2: android.os.Bundle): void;
					}
					export class ServiceCallbacksCompat {
						public asBinder(): android.os.IBinder;
						public onConnect(param0: string, param1: android.support.v4.media.session.MediaSessionCompat.Token, param2: android.os.Bundle): void;
						public onConnectFailed(): void;
						public onLoadChildren(param0: string, param1: java.util.List, param2: android.os.Bundle): void;
					}
					export class ServiceHandler {
						public handleMessage(param0: android.os.Message): void;
						public sendMessageAtTime(param0: android.os.Message, param1: number): boolean;
						public postOrRun(param0: java.lang.Runnable): void;
						public getServiceImpl(): android.support.v4.media.MediaBrowserServiceCompat.ServiceImpl;
					}
					export class ServiceImpl {
						public connect(param0: string, param1: number, param2: android.os.Bundle, param3: android.support.v4.media.MediaBrowserServiceCompat.ServiceCallbacks): void;
						public disconnect(param0: android.support.v4.media.MediaBrowserServiceCompat.ServiceCallbacks): void;
						public addSubscription(param0: string, param1: android.os.Bundle, param2: android.support.v4.media.MediaBrowserServiceCompat.ServiceCallbacks): void;
						public removeSubscription(param0: string, param1: android.os.Bundle, param2: android.support.v4.media.MediaBrowserServiceCompat.ServiceCallbacks): void;
						public getMediaItem(param0: string, param1: android.support.v4.os.ResultReceiver): void;
						public registerCallbacks(param0: android.support.v4.media.MediaBrowserServiceCompat.ServiceCallbacks): void;
						public unregisterCallbacks(param0: android.support.v4.media.MediaBrowserServiceCompat.ServiceCallbacks): void;
					}
					export class ServiceImplApi21 {
						public connect(param0: string, param1: android.os.Bundle, param2: android.support.v4.media.MediaBrowserServiceCompatApi21.ServiceCallbacks): void;
						public disconnect(param0: android.support.v4.media.MediaBrowserServiceCompatApi21.ServiceCallbacks): void;
						public addSubscription(param0: string, param1: android.support.v4.media.MediaBrowserServiceCompatApi21.ServiceCallbacks): void;
						public removeSubscription(param0: string, param1: android.support.v4.media.MediaBrowserServiceCompatApi21.ServiceCallbacks): void;
					}
					export class ServiceImplApi23 {
						public getMediaItem(param0: string, param1: android.support.v4.media.MediaBrowserServiceCompatApi23.ItemCallback): void;
					}
				}
			}
		}
	}
}
