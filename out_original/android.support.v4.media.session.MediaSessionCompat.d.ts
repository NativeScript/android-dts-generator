/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./android.support.v4.media.MediaDescriptionCompat.d.ts" />
/// <reference path="./android.support.v4.media.MediaMetadataCompat.d.ts" />
/// <reference path="./android.support.v4.media.RatingCompat.d.ts" />
/// <reference path="./android.support.v4.media.VolumeProviderCompat.d.ts" />
/// <reference path="./android.support.v4.media.session.IMediaControllerCallback.d.ts" />
/// <reference path="./android.support.v4.media.session.MediaControllerCompat.d.ts" />
/// <reference path="./android.support.v4.media.session.ParcelableVolumeInfo.d.ts" />
/// <reference path="./android.support.v4.media.session.PlaybackStateCompat.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class MediaSessionCompat {
						public constructor();
						public constructor(param0: android.content.Context, param1: string);
						public constructor(param0: android.content.Context, param1: string, param2: android.content.ComponentName, param3: android.app.PendingIntent);
						public setCallback(param0: android.support.v4.media.session.MediaSessionCompat.Callback): void;
						public setCallback(param0: android.support.v4.media.session.MediaSessionCompat.Callback, param1: android.os.Handler): void;
						public setSessionActivity(param0: android.app.PendingIntent): void;
						public setMediaButtonReceiver(param0: android.app.PendingIntent): void;
						public setFlags(param0: number): void;
						public setPlaybackToLocal(param0: number): void;
						public setPlaybackToRemote(param0: android.support.v4.media.VolumeProviderCompat): void;
						public setActive(param0: boolean): void;
						public isActive(): boolean;
						public sendSessionEvent(param0: string, param1: android.os.Bundle): void;
						public release(): void;
						public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
						public getController(): android.support.v4.media.session.MediaControllerCompat;
						public setPlaybackState(param0: android.support.v4.media.session.PlaybackStateCompat): void;
						public setMetadata(param0: android.support.v4.media.MediaMetadataCompat): void;
						public setQueue(param0: java.util.List): void;
						public setQueueTitle(param0: string): void;
						public setRatingType(param0: number): void;
						public setExtras(param0: android.os.Bundle): void;
						public getMediaSession(): java.lang.Object;
						public getRemoteControlClient(): java.lang.Object;
						public addOnActiveChangeListener(param0: android.support.v4.media.session.MediaSessionCompat.OnActiveChangeListener): void;
						public removeOnActiveChangeListener(param0: android.support.v4.media.session.MediaSessionCompat.OnActiveChangeListener): void;
						public static obtain(param0: android.content.Context, param1: java.lang.Object): android.support.v4.media.session.MediaSessionCompat;
						public static FLAG_HANDLES_MEDIA_BUTTONS: number;
						public static FLAG_HANDLES_TRANSPORT_CONTROLS: number;
						public static ACTION_PLAY_FROM_URI: string;
						public static ACTION_ARGUMENT_URI: string;
						public static ACTION_ARGUMENT_EXTRAS: string;
					}
					export module MediaSessionCompat {
						export class Callback {
							public constructor();
							public onCommand(param0: string, param1: android.os.Bundle, param2: android.os.ResultReceiver): void;
							public onMediaButtonEvent(param0: android.content.Intent): boolean;
							public onPlay(): void;
							public onPlayFromMediaId(param0: string, param1: android.os.Bundle): void;
							public onPlayFromSearch(param0: string, param1: android.os.Bundle): void;
							public onPlayFromUri(param0: android.net.Uri, param1: android.os.Bundle): void;
							public onSkipToQueueItem(param0: number): void;
							public onPause(): void;
							public onSkipToNext(): void;
							public onSkipToPrevious(): void;
							public onFastForward(): void;
							public onRewind(): void;
							public onStop(): void;
							public onSeekTo(param0: number): void;
							public onSetRating(param0: android.support.v4.media.RatingCompat): void;
							public onCustomAction(param0: string, param1: android.os.Bundle): void;
						}
						export module Callback {
							export class StubApi21 {
								public onCommand(param0: string, param1: android.os.Bundle, param2: android.os.ResultReceiver): void;
								public onMediaButtonEvent(param0: android.content.Intent): boolean;
								public onPlay(): void;
								public onPlayFromMediaId(param0: string, param1: android.os.Bundle): void;
								public onPlayFromSearch(param0: string, param1: android.os.Bundle): void;
								public onSkipToQueueItem(param0: number): void;
								public onPause(): void;
								public onSkipToNext(): void;
								public onSkipToPrevious(): void;
								public onFastForward(): void;
								public onRewind(): void;
								public onStop(): void;
								public onSeekTo(param0: number): void;
								public onSetRating(param0: java.lang.Object): void;
								public onCustomAction(param0: string, param1: android.os.Bundle): void;
							}
							export class StubApi23 {
								public onPlayFromUri(param0: android.net.Uri, param1: android.os.Bundle): void;
							}
						}
						export class MediaSessionImpl {
							public setCallback(param0: android.support.v4.media.session.MediaSessionCompat.Callback, param1: android.os.Handler): void;
							public setFlags(param0: number): void;
							public setPlaybackToLocal(param0: number): void;
							public setPlaybackToRemote(param0: android.support.v4.media.VolumeProviderCompat): void;
							public setActive(param0: boolean): void;
							public isActive(): boolean;
							public sendSessionEvent(param0: string, param1: android.os.Bundle): void;
							public release(): void;
							public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
							public setPlaybackState(param0: android.support.v4.media.session.PlaybackStateCompat): void;
							public setMetadata(param0: android.support.v4.media.MediaMetadataCompat): void;
							public setSessionActivity(param0: android.app.PendingIntent): void;
							public setMediaButtonReceiver(param0: android.app.PendingIntent): void;
							public setQueue(param0: java.util.List): void;
							public setQueueTitle(param0: string): void;
							public setRatingType(param0: number): void;
							public setExtras(param0: android.os.Bundle): void;
							public getMediaSession(): java.lang.Object;
							public getRemoteControlClient(): java.lang.Object;
						}
						export class MediaSessionImplApi21 {
							public constructor();
							public constructor(param0: android.content.Context, param1: string);
							public constructor(param0: java.lang.Object);
							public setCallback(param0: android.support.v4.media.session.MediaSessionCompat.Callback, param1: android.os.Handler): void;
							public setFlags(param0: number): void;
							public setPlaybackToLocal(param0: number): void;
							public setPlaybackToRemote(param0: android.support.v4.media.VolumeProviderCompat): void;
							public setActive(param0: boolean): void;
							public isActive(): boolean;
							public sendSessionEvent(param0: string, param1: android.os.Bundle): void;
							public release(): void;
							public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
							public setPlaybackState(param0: android.support.v4.media.session.PlaybackStateCompat): void;
							public setMetadata(param0: android.support.v4.media.MediaMetadataCompat): void;
							public setSessionActivity(param0: android.app.PendingIntent): void;
							public setMediaButtonReceiver(param0: android.app.PendingIntent): void;
							public setQueue(param0: java.util.List): void;
							public setQueueTitle(param0: string): void;
							public setRatingType(param0: number): void;
							public setExtras(param0: android.os.Bundle): void;
							public getMediaSession(): java.lang.Object;
							public getRemoteControlClient(): java.lang.Object;
						}
						export class MediaSessionImplBase {
							public constructor();
							public constructor(param0: android.content.Context, param1: string, param2: android.content.ComponentName, param3: android.app.PendingIntent);
							public setCallback(param0: android.support.v4.media.session.MediaSessionCompat.Callback, param1: android.os.Handler): void;
							public setFlags(param0: number): void;
							public setPlaybackToLocal(param0: number): void;
							public setPlaybackToRemote(param0: android.support.v4.media.VolumeProviderCompat): void;
							public setActive(param0: boolean): void;
							public isActive(): boolean;
							public sendSessionEvent(param0: string, param1: android.os.Bundle): void;
							public release(): void;
							public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
							public setPlaybackState(param0: android.support.v4.media.session.PlaybackStateCompat): void;
							public setMetadata(param0: android.support.v4.media.MediaMetadataCompat): void;
							public setSessionActivity(param0: android.app.PendingIntent): void;
							public setMediaButtonReceiver(param0: android.app.PendingIntent): void;
							public setQueue(param0: java.util.List): void;
							public setQueueTitle(param0: string): void;
							public getMediaSession(): java.lang.Object;
							public getRemoteControlClient(): java.lang.Object;
							public setRatingType(param0: number): void;
							public setExtras(param0: android.os.Bundle): void;
						}
						export module MediaSessionImplBase {
							export class Command {
								public constructor();
								public constructor(param0: string, param1: android.os.Bundle, param2: android.os.ResultReceiver);
								public command: string;
								public extras: android.os.Bundle;
								public stub: android.os.ResultReceiver;
							}
							export class MediaSessionStub {
								public sendCommand(param0: string, param1: android.os.Bundle, param2: android.support.v4.media.session.MediaSessionCompat.ResultReceiverWrapper): void;
								public sendMediaButton(param0: android.view.KeyEvent): boolean;
								public registerCallbackListener(param0: android.support.v4.media.session.IMediaControllerCallback): void;
								public unregisterCallbackListener(param0: android.support.v4.media.session.IMediaControllerCallback): void;
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
								public isTransportControlEnabled(): boolean;
							}
							export class MessageHandler {
								public constructor();
								public constructor(param0: android.os.Handler.Callback);
								public constructor(param0: android.os.Looper);
								public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);
								public constructor(param0: android.support.v4.media.session.MediaSessionCompat.MediaSessionImplBase, param1: android.os.Looper);
								public post(param0: java.lang.Runnable): boolean;
								public post(param0: number, param1: java.lang.Object, param2: android.os.Bundle): void;
								public post(param0: number, param1: java.lang.Object): void;
								public post(param0: number): void;
								public post(param0: number, param1: java.lang.Object, param2: number): void;
								public handleMessage(param0: android.os.Message): void;
							}
						}
						export class OnActiveChangeListener {
							public onActiveChanged(): void;
						}
						export class QueueItem {
							public constructor();
							public constructor(param0: android.support.v4.media.MediaDescriptionCompat, param1: number);
							public getDescription(): android.support.v4.media.MediaDescriptionCompat;
							public getQueueId(): number;
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public describeContents(): number;
							public getQueueItem(): java.lang.Object;
							public static obtain(param0: java.lang.Object): android.support.v4.media.session.MediaSessionCompat.QueueItem;
							public toString(): string;
							public static UNKNOWN_ID: number;
							public static CREATOR: android.os.Parcelable.Creator;
						}
						export class ResultReceiverWrapper {
							public constructor();
							public constructor(param0: android.os.ResultReceiver);
							public describeContents(): number;
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public static CREATOR: android.os.Parcelable.Creator;
						}
						export class SessionFlags {
						}
						export class Token {
							public static fromToken(param0: java.lang.Object): android.support.v4.media.session.MediaSessionCompat.Token;
							public describeContents(): number;
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public getToken(): java.lang.Object;
							public static CREATOR: android.os.Parcelable.Creator;
						}
					}
				}
			}
		}
	}
}
