/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.media.MediaDescription.d.ts" />
/// <reference path="./android.media.MediaMetadata.d.ts" />
/// <reference path="./android.media.Rating.d.ts" />
/// <reference path="./android.media.VolumeProvider.d.ts" />
/// <reference path="./android.media.session.MediaController.d.ts" />
/// <reference path="./android.media.session.PlaybackState.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module media {
		export module session {
			export class MediaSession {
				public constructor();
				public constructor(param0: android.content.Context, param1: string);
				public setCallback(param0: android.media.session.MediaSession.Callback): void;
				public setCallback(param0: android.media.session.MediaSession.Callback, param1: android.os.Handler): void;
				public setSessionActivity(param0: android.app.PendingIntent): void;
				public setMediaButtonReceiver(param0: android.app.PendingIntent): void;
				public setFlags(param0: number): void;
				public setPlaybackToLocal(param0: android.media.AudioAttributes): void;
				public setPlaybackToRemote(param0: android.media.VolumeProvider): void;
				public setActive(param0: boolean): void;
				public isActive(): boolean;
				public sendSessionEvent(param0: string, param1: android.os.Bundle): void;
				public release(): void;
				public getSessionToken(): android.media.session.MediaSession.Token;
				public getController(): android.media.session.MediaController;
				public setPlaybackState(param0: android.media.session.PlaybackState): void;
				public setMetadata(param0: android.media.MediaMetadata): void;
				public setQueue(param0: java.util.List): void;
				public setQueueTitle(param0: string): void;
				public setRatingType(param0: number): void;
				public setExtras(param0: android.os.Bundle): void;
				public static FLAG_HANDLES_MEDIA_BUTTONS: number;
				public static FLAG_HANDLES_TRANSPORT_CONTROLS: number;
			}
			export module MediaSession {
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
					public onSetRating(param0: android.media.Rating): void;
					public onCustomAction(param0: string, param1: android.os.Bundle): void;
				}
				export class QueueItem {
					public constructor();
					public constructor(param0: android.media.MediaDescription, param1: number);
					public getDescription(): android.media.MediaDescription;
					public getQueueId(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public describeContents(): number;
					public toString(): string;
					public static CREATOR: android.os.Parcelable.Creator;
					public static UNKNOWN_ID: number;
				}
				export class Token {
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public hashCode(): number;
					public equals(param0: java.lang.Object): boolean;
					public static CREATOR: android.os.Parcelable.Creator;
				}
			}
		}
	}
}
