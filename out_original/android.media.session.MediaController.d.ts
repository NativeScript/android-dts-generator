/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.media.MediaMetadata.d.ts" />
/// <reference path="./android.media.Rating.d.ts" />
/// <reference path="./android.media.session.PlaybackState.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module media {
		export module session {
			export class MediaController {
				public constructor();
				public constructor(param0: android.content.Context, param1: android.media.session.MediaSession.Token);
				public getTransportControls(): android.media.session.MediaController.TransportControls;
				public dispatchMediaButtonEvent(param0: android.view.KeyEvent): boolean;
				public getPlaybackState(): android.media.session.PlaybackState;
				public getMetadata(): android.media.MediaMetadata;
				public getQueue(): java.util.List;
				public getQueueTitle(): string;
				public getExtras(): android.os.Bundle;
				public getRatingType(): number;
				public getFlags(): number;
				public getPlaybackInfo(): android.media.session.MediaController.PlaybackInfo;
				public getSessionActivity(): android.app.PendingIntent;
				public getSessionToken(): android.media.session.MediaSession.Token;
				public setVolumeTo(param0: number, param1: number): void;
				public adjustVolume(param0: number, param1: number): void;
				public registerCallback(param0: android.media.session.MediaController.Callback): void;
				public registerCallback(param0: android.media.session.MediaController.Callback, param1: android.os.Handler): void;
				public unregisterCallback(param0: android.media.session.MediaController.Callback): void;
				public sendCommand(param0: string, param1: android.os.Bundle, param2: android.os.ResultReceiver): void;
				public getPackageName(): string;
			}
			export module MediaController {
				export class Callback {
					public constructor();
					public onSessionDestroyed(): void;
					public onSessionEvent(param0: string, param1: android.os.Bundle): void;
					public onPlaybackStateChanged(param0: android.media.session.PlaybackState): void;
					public onMetadataChanged(param0: android.media.MediaMetadata): void;
					public onQueueChanged(param0: java.util.List): void;
					public onQueueTitleChanged(param0: string): void;
					public onExtrasChanged(param0: android.os.Bundle): void;
					public onAudioInfoChanged(param0: android.media.session.MediaController.PlaybackInfo): void;
				}
				export class PlaybackInfo {
					public getPlaybackType(): number;
					public getAudioAttributes(): android.media.AudioAttributes;
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
					public setRating(param0: android.media.Rating): void;
					public sendCustomAction(param0: android.media.session.PlaybackState.CustomAction, param1: android.os.Bundle): void;
					public sendCustomAction(param0: string, param1: android.os.Bundle): void;
				}
			}
		}
	}
}
