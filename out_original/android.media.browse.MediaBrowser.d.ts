/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.MediaDescription.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module media {
		export module browse {
			export class MediaBrowser {
				public constructor();
				public constructor(param0: android.content.Context, param1: android.content.ComponentName, param2: android.media.browse.MediaBrowser.ConnectionCallback, param3: android.os.Bundle);
				public connect(): void;
				public disconnect(): void;
				public isConnected(): boolean;
				public getServiceComponent(): android.content.ComponentName;
				public getRoot(): string;
				public getExtras(): android.os.Bundle;
				public getSessionToken(): android.media.session.MediaSession.Token;
				public subscribe(param0: string, param1: android.media.browse.MediaBrowser.SubscriptionCallback): void;
				public unsubscribe(param0: string): void;
				public getItem(param0: string, param1: android.media.browse.MediaBrowser.ItemCallback): void;
			}
			export module MediaBrowser {
				export class ConnectionCallback {
					public constructor();
					public onConnected(): void;
					public onConnectionSuspended(): void;
					public onConnectionFailed(): void;
				}
				export class ItemCallback {
					public constructor();
					public onItemLoaded(param0: android.media.browse.MediaBrowser.MediaItem): void;
					public onError(param0: string): void;
				}
				export class MediaItem {
					public constructor();
					public constructor(param0: android.media.MediaDescription, param1: number);
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public toString(): string;
					public getFlags(): number;
					public isBrowsable(): boolean;
					public isPlayable(): boolean;
					public getDescription(): android.media.MediaDescription;
					public getMediaId(): string;
					public static CREATOR: android.os.Parcelable.Creator;
					public static FLAG_BROWSABLE: number;
					public static FLAG_PLAYABLE: number;
				}
				export class SubscriptionCallback {
					public constructor();
					public onChildrenLoaded(param0: string, param1: java.util.List): void;
					public onError(param0: string): void;
				}
			}
		}
	}
}
