/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class MediaBrowserServiceCompatApi23 {
					public static createService(): java.lang.Object;
					public static onCreate(param0: java.lang.Object, param1: android.support.v4.media.MediaBrowserServiceCompatApi21.ServiceImplApi21): void;
					public static onCreate(param0: java.lang.Object, param1: android.support.v4.media.MediaBrowserServiceCompatApi23.ServiceImplApi23): void;
				}
				export module MediaBrowserServiceCompatApi23 {
					export class ItemCallback {
						public onItemLoaded(param0: number, param1: android.os.Bundle, param2: android.os.Parcel): void;
					}
					export class MediaBrowserServiceAdaptorApi23 {
						public onCreate(param0: android.support.v4.media.MediaBrowserServiceCompatApi21.ServiceImplApi21): void;
						public onCreate(param0: android.support.v4.media.MediaBrowserServiceCompatApi23.ServiceImplApi23): void;
					}
					export module MediaBrowserServiceAdaptorApi23 {
						export class ServiceBinderProxyApi23 {
							public getMediaItem(param0: string, param1: android.os.ResultReceiver): void;
						}
					}
					export class ServiceImplApi23 {
						public getMediaItem(param0: string, param1: android.support.v4.media.MediaBrowserServiceCompatApi23.ItemCallback): void;
					}
				}
			}
		}
	}
}
