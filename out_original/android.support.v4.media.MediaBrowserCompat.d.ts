/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.os.Messenger.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.support.v4.media.MediaDescriptionCompat.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class MediaBrowserCompat {
					public constructor();
					public constructor(param0: android.content.Context, param1: android.content.ComponentName, param2: android.support.v4.media.MediaBrowserCompat.ConnectionCallback, param3: android.os.Bundle);
					public connect(): void;
					public disconnect(): void;
					public isConnected(): boolean;
					public getServiceComponent(): android.content.ComponentName;
					public getRoot(): string;
					public getExtras(): android.os.Bundle;
					public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
					public subscribe(param0: string, param1: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
					public subscribe(param0: string, param1: android.os.Bundle, param2: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
					public unsubscribe(param0: string): void;
					public unsubscribe(param0: string, param1: android.os.Bundle): void;
					public getItem(param0: string, param1: android.support.v4.media.MediaBrowserCompat.ItemCallback): void;
					public static EXTRA_PAGE: string;
					public static EXTRA_PAGE_SIZE: string;
				}
				export module MediaBrowserCompat {
					export class CallbackHandler {
						public handleMessage(param0: android.os.Message): void;
					}
					export class ConnectionCallback {
						public constructor();
						public onConnected(): void;
						public onConnectionSuspended(): void;
						public onConnectionFailed(): void;
					}
					export module ConnectionCallback {
						export class ConnectionCallbackInternal {
							public onConnected(): void;
							public onConnectionSuspended(): void;
							public onConnectionFailed(): void;
						}
						export class StubApi21 {
							public onConnected(): void;
							public onConnectionSuspended(): void;
							public onConnectionFailed(): void;
						}
					}
					export class ItemCallback {
						public constructor();
						public onItemLoaded(param0: android.support.v4.media.MediaBrowserCompat.MediaItem): void;
						public onError(param0: string): void;
					}
					export module ItemCallback {
						export class StubApi23 {
							public onItemLoaded(param0: android.os.Parcel): void;
							public onError(param0: string): void;
						}
					}
					export class ItemReceiver {
						public onReceiveResult(param0: number, param1: android.os.Bundle): void;
					}
					export class MediaBrowserImpl {
						public connect(): void;
						public disconnect(): void;
						public isConnected(): boolean;
						public getServiceComponent(): android.content.ComponentName;
						public getRoot(): string;
						public getExtras(): android.os.Bundle;
						public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
						public subscribe(param0: string, param1: android.os.Bundle, param2: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
						public unsubscribe(param0: string, param1: android.os.Bundle): void;
						public getItem(param0: string, param1: android.support.v4.media.MediaBrowserCompat.ItemCallback): void;
					}
					export class MediaBrowserImplApi21 {
						public constructor();
						public constructor(param0: android.content.Context, param1: android.content.ComponentName, param2: android.support.v4.media.MediaBrowserCompat.ConnectionCallback, param3: android.os.Bundle);
						public connect(): void;
						public disconnect(): void;
						public isConnected(): boolean;
						public getServiceComponent(): android.content.ComponentName;
						public getRoot(): string;
						public getExtras(): android.os.Bundle;
						public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
						public subscribe(param0: string, param1: android.os.Bundle, param2: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
						public unsubscribe(param0: string, param1: android.os.Bundle): void;
						public getItem(param0: string, param1: android.support.v4.media.MediaBrowserCompat.ItemCallback): void;
						public onConnected(): void;
						public onConnectionSuspended(): void;
						public onConnectionFailed(): void;
						public onServiceConnected(param0: android.os.Messenger, param1: string, param2: android.support.v4.media.session.MediaSessionCompat.Token, param3: android.os.Bundle): void;
						public onConnectionFailed(param0: android.os.Messenger): void;
						public onLoadChildren(param0: android.os.Messenger, param1: string, param2: java.util.List, param3: android.os.Bundle): void;
						public mBrowserObj: java.lang.Object;
					}
					export class MediaBrowserImplApi23 {
						public constructor();
						public constructor(param0: android.content.Context, param1: android.content.ComponentName, param2: android.support.v4.media.MediaBrowserCompat.ConnectionCallback, param3: android.os.Bundle);
						public getItem(param0: string, param1: android.support.v4.media.MediaBrowserCompat.ItemCallback): void;
					}
					export class MediaBrowserImplBase {
						public constructor();
						public constructor(param0: android.content.Context, param1: android.content.ComponentName, param2: android.support.v4.media.MediaBrowserCompat.ConnectionCallback, param3: android.os.Bundle);
						public connect(): void;
						public disconnect(): void;
						public isConnected(): boolean;
						public getServiceComponent(): android.content.ComponentName;
						public getRoot(): string;
						public getExtras(): android.os.Bundle;
						public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
						public subscribe(param0: string, param1: android.os.Bundle, param2: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback): void;
						public unsubscribe(param0: string, param1: android.os.Bundle): void;
						public getItem(param0: string, param1: android.support.v4.media.MediaBrowserCompat.ItemCallback): void;
						public onServiceConnected(param0: android.os.Messenger, param1: string, param2: android.support.v4.media.session.MediaSessionCompat.Token, param3: android.os.Bundle): void;
						public onConnectionFailed(param0: android.os.Messenger): void;
						public onLoadChildren(param0: android.os.Messenger, param1: string, param2: java.util.List, param3: android.os.Bundle): void;
					}
					export module MediaBrowserImplBase {
						export class MediaServiceConnection {
							public onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
							public onServiceDisconnected(param0: android.content.ComponentName): void;
						}
					}
					export class MediaBrowserServiceCallbackImpl {
						public onServiceConnected(param0: android.os.Messenger, param1: string, param2: android.support.v4.media.session.MediaSessionCompat.Token, param3: android.os.Bundle): void;
						public onConnectionFailed(param0: android.os.Messenger): void;
						public onLoadChildren(param0: android.os.Messenger, param1: string, param2: java.util.List, param3: android.os.Bundle): void;
					}
					export class MediaItem {
						public constructor();
						public constructor(param0: android.support.v4.media.MediaDescriptionCompat, param1: number);
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public toString(): string;
						public getFlags(): number;
						public isBrowsable(): boolean;
						public isPlayable(): boolean;
						public getDescription(): android.support.v4.media.MediaDescriptionCompat;
						public getMediaId(): string;
						public static FLAG_BROWSABLE: number;
						public static FLAG_PLAYABLE: number;
						public static CREATOR: android.os.Parcelable.Creator;
					}
					export module MediaItem {
						export class Flags {
						}
					}
					export class ServiceBinderWrapper {
						public constructor();
						public constructor(param0: android.os.IBinder);
					}
					export class Subscription {
						public constructor();
						public isEmpty(): boolean;
						public getOptionsList(): java.util.List;
						public getCallbacks(): java.util.List;
						public setCallbackForOptions(param0: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback, param1: android.os.Bundle): void;
						public remove(param0: android.os.Bundle): boolean;
						public getCallback(param0: android.os.Bundle): android.support.v4.media.MediaBrowserCompat.SubscriptionCallback;
					}
					export class SubscriptionCallback {
						public constructor();
						public onChildrenLoaded(param0: string, param1: java.util.List): void;
						public onChildrenLoaded(param0: string, param1: java.util.List, param2: android.os.Bundle): void;
						public onError(param0: string): void;
						public onError(param0: string, param1: android.os.Bundle): void;
					}
					export class SubscriptionCallbackApi21 {
						public constructor();
						public constructor(param0: android.support.v4.media.MediaBrowserCompat.SubscriptionCallback, param1: android.os.Bundle);
						public onChildrenLoaded(param0: string, param1: java.util.List, param2: android.os.Bundle): void;
						public onChildrenLoaded(param0: string, param1: java.util.List): void;
						public onChildrenLoaded(param0: string, param1: java.util.List, param2: android.os.Bundle): void;
						public onError(param0: string, param1: android.os.Bundle): void;
						public onError(param0: string): void;
						public onError(param0: string, param1: android.os.Bundle): void;
					}
					export module SubscriptionCallbackApi21 {
						export class StubApi21 {
							public onChildrenLoaded(param0: string, param1: java.util.List): void;
							public onError(param0: string): void;
						}
					}
				}
			}
		}
	}
}
