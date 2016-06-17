/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.support.v4.media.MediaMetadataCompat.d.ts" />
/// <reference path="./android.support.v4.media.RatingCompat.d.ts" />
/// <reference path="./android.support.v4.media.session.IMediaControllerCallback.d.ts" />
/// <reference path="./android.support.v4.media.session.ParcelableVolumeInfo.d.ts" />
/// <reference path="./android.support.v4.media.session.PlaybackStateCompat.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class IMediaSession {
						public sendCommand(param0: string, param1: android.os.Bundle, param2: android.support.v4.media.session.MediaSessionCompat.ResultReceiverWrapper): void;
						public sendMediaButton(param0: android.view.KeyEvent): boolean;
						public registerCallbackListener(param0: android.support.v4.media.session.IMediaControllerCallback): void;
						public unregisterCallbackListener(param0: android.support.v4.media.session.IMediaControllerCallback): void;
						public isTransportControlEnabled(): boolean;
						public getPackageName(): string;
						public getTag(): string;
						public getLaunchPendingIntent(): android.app.PendingIntent;
						public getFlags(): number;
						public getVolumeAttributes(): android.support.v4.media.session.ParcelableVolumeInfo;
						public adjustVolume(param0: number, param1: number, param2: string): void;
						public setVolumeTo(param0: number, param1: number, param2: string): void;
						public play(): void;
						public playFromMediaId(param0: string, param1: android.os.Bundle): void;
						public playFromSearch(param0: string, param1: android.os.Bundle): void;
						public playFromUri(param0: android.net.Uri, param1: android.os.Bundle): void;
						public skipToQueueItem(param0: number): void;
						public pause(): void;
						public stop(): void;
						public next(): void;
						public previous(): void;
						public fastForward(): void;
						public rewind(): void;
						public seekTo(param0: number): void;
						public rate(param0: android.support.v4.media.RatingCompat): void;
						public sendCustomAction(param0: string, param1: android.os.Bundle): void;
						public getMetadata(): android.support.v4.media.MediaMetadataCompat;
						public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
						public getQueue(): java.util.List;
						public getQueueTitle(): string;
						public getExtras(): android.os.Bundle;
						public getRatingType(): number;
					}
					export module IMediaSession {
						export class Stub {
							public constructor();
							public static asInterface(param0: android.os.IBinder): android.support.v4.media.session.IMediaSession;
							public asBinder(): android.os.IBinder;
							public onTransact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						}
						export module Stub {
							export class Proxy {
								public asBinder(): android.os.IBinder;
								public getInterfaceDescriptor(): string;
								public sendCommand(param0: string, param1: android.os.Bundle, param2: android.support.v4.media.session.MediaSessionCompat.ResultReceiverWrapper): void;
								public sendMediaButton(param0: android.view.KeyEvent): boolean;
								public registerCallbackListener(param0: android.support.v4.media.session.IMediaControllerCallback): void;
								public unregisterCallbackListener(param0: android.support.v4.media.session.IMediaControllerCallback): void;
								public isTransportControlEnabled(): boolean;
								public getPackageName(): string;
								public getTag(): string;
								public getLaunchPendingIntent(): android.app.PendingIntent;
								public getFlags(): number;
								public getVolumeAttributes(): android.support.v4.media.session.ParcelableVolumeInfo;
								public adjustVolume(param0: number, param1: number, param2: string): void;
								public setVolumeTo(param0: number, param1: number, param2: string): void;
								public play(): void;
								public playFromMediaId(param0: string, param1: android.os.Bundle): void;
								public playFromSearch(param0: string, param1: android.os.Bundle): void;
								public playFromUri(param0: android.net.Uri, param1: android.os.Bundle): void;
								public skipToQueueItem(param0: number): void;
								public pause(): void;
								public stop(): void;
								public next(): void;
								public previous(): void;
								public fastForward(): void;
								public rewind(): void;
								public seekTo(param0: number): void;
								public rate(param0: android.support.v4.media.RatingCompat): void;
								public sendCustomAction(param0: string, param1: android.os.Bundle): void;
								public getMetadata(): android.support.v4.media.MediaMetadataCompat;
								public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
								public getQueue(): java.util.List;
								public getQueueTitle(): string;
								public getExtras(): android.os.Bundle;
								public getRatingType(): number;
							}
						}
					}
				}
			}
		}
	}
}
