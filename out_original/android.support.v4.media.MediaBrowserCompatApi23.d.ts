/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class MediaBrowserCompatApi23 {
					public static createItemCallback(param0: android.support.v4.media.MediaBrowserCompatApi23.ItemCallback): java.lang.Object;
					public static getItem(param0: java.lang.Object, param1: string, param2: java.lang.Object): void;
				}
				export module MediaBrowserCompatApi23 {
					export class ItemCallback {
						public onItemLoaded(param0: android.os.Parcel): void;
						public onError(param0: string): void;
					}
					export class ItemCallbackProxy {
						public constructor();
						public constructor(param0: android.support.v4.media.MediaBrowserCompatApi23.ItemCallback);
						public onItemLoaded(param0: android.media.browse.MediaBrowser.MediaItem): void;
						public onError(param0: string): void;
						public mItemCallback: android.support.v4.media.MediaBrowserCompatApi23.ItemCallback;
					}
				}
			}
		}
	}
}
