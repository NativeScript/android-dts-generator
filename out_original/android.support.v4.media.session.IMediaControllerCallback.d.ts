/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.support.v4.media.MediaMetadataCompat.d.ts" />
/// <reference path="./android.support.v4.media.session.ParcelableVolumeInfo.d.ts" />
/// <reference path="./android.support.v4.media.session.PlaybackStateCompat.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class IMediaControllerCallback {
						public onEvent(param0: string, param1: android.os.Bundle): void;
						public onSessionDestroyed(): void;
						public onPlaybackStateChanged(param0: android.support.v4.media.session.PlaybackStateCompat): void;
						public onMetadataChanged(param0: android.support.v4.media.MediaMetadataCompat): void;
						public onQueueChanged(param0: java.util.List): void;
						public onQueueTitleChanged(param0: string): void;
						public onExtrasChanged(param0: android.os.Bundle): void;
						public onVolumeInfoChanged(param0: android.support.v4.media.session.ParcelableVolumeInfo): void;
					}
					export module IMediaControllerCallback {
						export class Stub {
							public constructor();
							public static asInterface(param0: android.os.IBinder): android.support.v4.media.session.IMediaControllerCallback;
							public asBinder(): android.os.IBinder;
							public onTransact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						}
						export module Stub {
							export class Proxy {
								public asBinder(): android.os.IBinder;
								public getInterfaceDescriptor(): string;
								public onEvent(param0: string, param1: android.os.Bundle): void;
								public onSessionDestroyed(): void;
								public onPlaybackStateChanged(param0: android.support.v4.media.session.PlaybackStateCompat): void;
								public onMetadataChanged(param0: android.support.v4.media.MediaMetadataCompat): void;
								public onQueueChanged(param0: java.util.List): void;
								public onQueueTitleChanged(param0: string): void;
								public onExtrasChanged(param0: android.os.Bundle): void;
								public onVolumeInfoChanged(param0: android.support.v4.media.session.ParcelableVolumeInfo): void;
							}
						}
					}
				}
			}
		}
	}
}
