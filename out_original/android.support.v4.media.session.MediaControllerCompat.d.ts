/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./android.support.v4.media.MediaMetadataCompat.d.ts" />
/// <reference path="./android.support.v4.media.RatingCompat.d.ts" />
/// <reference path="./android.support.v4.media.session.IMediaSession.d.ts" />
/// <reference path="./android.support.v4.media.session.MediaSessionCompat.d.ts" />
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
					export class MediaControllerCompat {
						public constructor();
						public constructor(param0: android.content.Context, param1: android.support.v4.media.session.MediaSessionCompat);
						public constructor(param0: android.content.Context, param1: android.support.v4.media.session.MediaSessionCompat.Token);
						public getTransportControls(): android.support.v4.media.session.MediaControllerCompat.TransportControls;
						public dispatchMediaButtonEvent(param0: android.view.KeyEvent): boolean;
						public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
						public getMetadata(): android.support.v4.media.MediaMetadataCompat;
						public getQueue(): java.util.List;
						public getQueueTitle(): string;
						public getExtras(): android.os.Bundle;
						public getRatingType(): number;
						public getFlags(): number;
						public getPlaybackInfo(): android.support.v4.media.session.MediaControllerCompat.PlaybackInfo;
						public getSessionActivity(): android.app.PendingIntent;
						public getSessionToken(): android.support.v4.media.session.MediaSessionCompat.Token;
						public setVolumeTo(param0: number, param1: number): void;
						public adjustVolume(param0: number, param1: number): void;
						public registerCallback(param0: android.support.v4.media.session.MediaControllerCompat.Callback): void;
						public registerCallback(param0: android.support.v4.media.session.MediaControllerCompat.Callback, param1: android.os.Handler): void;
						public unregisterCallback(param0: android.support.v4.media.session.MediaControllerCompat.Callback): void;
						public sendCommand(param0: string, param1: android.os.Bundle, param2: android.os.ResultReceiver): void;
						public getPackageName(): string;
						public getMediaController(): java.lang.Object;
					}
					export module MediaControllerCompat {
						export class Callback {
							public constructor();
							public onSessionDestroyed(): void;
							public onSessionEvent(param0: string, param1: android.os.Bundle): void;
							public onPlaybackStateChanged(param0: android.support.v4.media.session.PlaybackStateCompat): void;
							public onMetadataChanged(param0: android.support.v4.media.MediaMetadataCompat): void;
							public onQueueChanged(param0: java.util.List): void;
							public onQueueTitleChanged(param0: string): void;
							public onExtrasChanged(param0: android.os.Bundle): void;
							public onAudioInfoChanged(param0: android.support.v4.media.session.MediaControllerCompat.PlaybackInfo): void;
							public binderDied(): void;
						}
						export module Callback {
							export class MessageHandler {
								public constructor();
								public constructor(param0: android.os.Handler.Callback);
								public constructor(param0: android.os.Looper);
								public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);
								public constructor(param0: android.support.v4.media.session.MediaControllerCompat.Callback, param1: android.os.Looper);
								public handleMessage(param0: android.os.Message): void;
								public post(param0: java.lang.Runnable): boolean;
								public post(param0: number, param1: java.lang.Object, param2: android.os.Bundle): void;
							}
							export class StubApi21 {
								public onSessionDestroyed(): void;
								public onSessionEvent(param0: string, param1: android.os.Bundle): void;
								public onPlaybackStateChanged(param0: java.lang.Object): void;
								public onMetadataChanged(param0: java.lang.Object): void;
							}
							export class StubCompat {
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
						export class MediaControllerImpl {
							public registerCallback(param0: android.support.v4.media.session.MediaControllerCompat.Callback, param1: android.os.Handler): void;
							public unregisterCallback(param0: android.support.v4.media.session.MediaControllerCompat.Callback): void;
							public dispatchMediaButtonEvent(param0: android.view.KeyEvent): boolean;
							public getTransportControls(): android.support.v4.media.session.MediaControllerCompat.TransportControls;
							public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
							public getMetadata(): android.support.v4.media.MediaMetadataCompat;
							public getQueue(): java.util.List;
							public getQueueTitle(): string;
							public getExtras(): android.os.Bundle;
							public getRatingType(): number;
							public getFlags(): number;
							public getPlaybackInfo(): android.support.v4.media.session.MediaControllerCompat.PlaybackInfo;
							public getSessionActivity(): android.app.PendingIntent;
							public setVolumeTo(param0: number, param1: number): void;
							public adjustVolume(param0: number, param1: number): void;
							public sendCommand(param0: string, param1: android.os.Bundle, param2: android.os.ResultReceiver): void;
							public getPackageName(): string;
							public getMediaController(): java.lang.Object;
						}
						export class MediaControllerImplApi21 {
							public constructor();
							public constructor(param0: android.content.Context, param1: android.support.v4.media.session.MediaSessionCompat);
							public constructor(param0: android.content.Context, param1: android.support.v4.media.session.MediaSessionCompat.Token);
							public registerCallback(param0: android.support.v4.media.session.MediaControllerCompat.Callback, param1: android.os.Handler): void;
							public unregisterCallback(param0: android.support.v4.media.session.MediaControllerCompat.Callback): void;
							public dispatchMediaButtonEvent(param0: android.view.KeyEvent): boolean;
							public getTransportControls(): android.support.v4.media.session.MediaControllerCompat.TransportControls;
							public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
							public getMetadata(): android.support.v4.media.MediaMetadataCompat;
							public getQueue(): java.util.List;
							public getQueueTitle(): string;
							public getExtras(): android.os.Bundle;
							public getRatingType(): number;
							public getFlags(): number;
							public getPlaybackInfo(): android.support.v4.media.session.MediaControllerCompat.PlaybackInfo;
							public getSessionActivity(): android.app.PendingIntent;
							public setVolumeTo(param0: number, param1: number): void;
							public adjustVolume(param0: number, param1: number): void;
							public sendCommand(param0: string, param1: android.os.Bundle, param2: android.os.ResultReceiver): void;
							public getPackageName(): string;
							public getMediaController(): java.lang.Object;
							public mControllerObj: java.lang.Object;
						}
						export class MediaControllerImplApi23 {
							public constructor(param0: android.content.Context, param1: android.support.v4.media.session.MediaSessionCompat.Token);
							public constructor();
							public constructor(param0: android.content.Context, param1: android.support.v4.media.session.MediaSessionCompat);
							public constructor(param0: android.content.Context, param1: android.support.v4.media.session.MediaSessionCompat.Token);
							public getTransportControls(): android.support.v4.media.session.MediaControllerCompat.TransportControls;
						}
						export class MediaControllerImplBase {
							public constructor();
							public constructor(param0: android.support.v4.media.session.MediaSessionCompat.Token);
							public registerCallback(param0: android.support.v4.media.session.MediaControllerCompat.Callback, param1: android.os.Handler): void;
							public unregisterCallback(param0: android.support.v4.media.session.MediaControllerCompat.Callback): void;
							public dispatchMediaButtonEvent(param0: android.view.KeyEvent): boolean;
							public getTransportControls(): android.support.v4.media.session.MediaControllerCompat.TransportControls;
							public getPlaybackState(): android.support.v4.media.session.PlaybackStateCompat;
							public getMetadata(): android.support.v4.media.MediaMetadataCompat;
							public getQueue(): java.util.List;
							public getQueueTitle(): string;
							public getExtras(): android.os.Bundle;
							public getRatingType(): number;
							public getFlags(): number;
							public getPlaybackInfo(): android.support.v4.media.session.MediaControllerCompat.PlaybackInfo;
							public getSessionActivity(): android.app.PendingIntent;
							public setVolumeTo(param0: number, param1: number): void;
							public adjustVolume(param0: number, param1: number): void;
							public sendCommand(param0: string, param1: android.os.Bundle, param2: android.os.ResultReceiver): void;
							public getPackageName(): string;
							public getMediaController(): java.lang.Object;
						}
						export class PlaybackInfo {
							public getPlaybackType(): number;
							public getAudioStream(): number;
							public getVolumeControl(): number;
							public getMaxVolume(): number;
							public getCurrentVolume(): number;
							public static PLAYBACK_TYPE_LOCAL: number;
							public static PLAYBACK_TYPE_REMOTE: number;
						}
						export class TransportControls {
							public play(): void;
							public playFromMediaId(param0: string, param1: android.os.Bundle): void;
							public playFromSearch(param0: string, param1: android.os.Bundle): void;
							public playFromUri(param0: android.net.Uri, param1: android.os.Bundle): void;
							public skipToQueueItem(param0: number): void;
							public pause(): void;
							public stop(): void;
							public seekTo(param0: number): void;
							public fastForward(): void;
							public skipToNext(): void;
							public rewind(): void;
							public skipToPrevious(): void;
							public setRating(param0: android.support.v4.media.RatingCompat): void;
							public sendCustomAction(param0: android.support.v4.media.session.PlaybackStateCompat.CustomAction, param1: android.os.Bundle): void;
							public sendCustomAction(param0: string, param1: android.os.Bundle): void;
						}
						export class TransportControlsApi21 {
							public constructor();
							public constructor(param0: java.lang.Object);
							public play(): void;
							public pause(): void;
							public stop(): void;
							public seekTo(param0: number): void;
							public fastForward(): void;
							public rewind(): void;
							public skipToNext(): void;
							public skipToPrevious(): void;
							public setRating(param0: android.support.v4.media.RatingCompat): void;
							public playFromMediaId(param0: string, param1: android.os.Bundle): void;
							public playFromSearch(param0: string, param1: android.os.Bundle): void;
							public playFromUri(param0: android.net.Uri, param1: android.os.Bundle): void;
							public skipToQueueItem(param0: number): void;
							public sendCustomAction(param0: string, param1: android.os.Bundle): void;
							public sendCustomAction(param0: android.support.v4.media.session.PlaybackStateCompat.CustomAction, param1: android.os.Bundle): void;
							public sendCustomAction(param0: string, param1: android.os.Bundle): void;
							public mControlsObj: java.lang.Object;
						}
						export class TransportControlsApi23 {
							public constructor();
							public constructor(param0: java.lang.Object);
							public playFromUri(param0: android.net.Uri, param1: android.os.Bundle): void;
						}
						export class TransportControlsBase {
							public constructor();
							public constructor(param0: android.support.v4.media.session.IMediaSession);
							public play(): void;
							public playFromMediaId(param0: string, param1: android.os.Bundle): void;
							public playFromSearch(param0: string, param1: android.os.Bundle): void;
							public playFromUri(param0: android.net.Uri, param1: android.os.Bundle): void;
							public skipToQueueItem(param0: number): void;
							public pause(): void;
							public stop(): void;
							public seekTo(param0: number): void;
							public fastForward(): void;
							public skipToNext(): void;
							public rewind(): void;
							public skipToPrevious(): void;
							public setRating(param0: android.support.v4.media.RatingCompat): void;
							public sendCustomAction(param0: string, param1: android.os.Bundle): void;
							public sendCustomAction(param0: android.support.v4.media.session.PlaybackStateCompat.CustomAction, param1: android.os.Bundle): void;
							public sendCustomAction(param0: string, param1: android.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}
