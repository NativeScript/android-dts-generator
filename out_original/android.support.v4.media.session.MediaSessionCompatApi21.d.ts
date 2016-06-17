/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.media.Rating.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class MediaSessionCompatApi21 {
						public static createSession(param0: android.content.Context, param1: string): java.lang.Object;
						public static verifySession(param0: java.lang.Object): java.lang.Object;
						public static verifyToken(param0: java.lang.Object): java.lang.Object;
						public static createCallback(param0: android.support.v4.media.session.MediaSessionCompatApi21.Callback): java.lang.Object;
						public static setCallback(param0: java.lang.Object, param1: java.lang.Object, param2: android.os.Handler): void;
						public static setFlags(param0: java.lang.Object, param1: number): void;
						public static setPlaybackToLocal(param0: java.lang.Object, param1: number): void;
						public static setPlaybackToRemote(param0: java.lang.Object, param1: java.lang.Object): void;
						public static setActive(param0: java.lang.Object, param1: boolean): void;
						public static isActive(param0: java.lang.Object): boolean;
						public static sendSessionEvent(param0: java.lang.Object, param1: string, param2: android.os.Bundle): void;
						public static release(param0: java.lang.Object): void;
						public static getSessionToken(param0: java.lang.Object): android.os.Parcelable;
						public static setPlaybackState(param0: java.lang.Object, param1: java.lang.Object): void;
						public static setMetadata(param0: java.lang.Object, param1: java.lang.Object): void;
						public static setSessionActivity(param0: java.lang.Object, param1: android.app.PendingIntent): void;
						public static setMediaButtonReceiver(param0: java.lang.Object, param1: android.app.PendingIntent): void;
						public static setQueue(param0: java.lang.Object, param1: java.util.List): void;
						public static setQueueTitle(param0: java.lang.Object, param1: string): void;
						public static setExtras(param0: java.lang.Object, param1: android.os.Bundle): void;
					}
					export module MediaSessionCompatApi21 {
						export class Callback {
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
							public onCustomAction(param0: string, param1: android.os.Bundle): void;
						}
						export class CallbackProxy {
							public constructor();
							public constructor(param0: android.support.v4.media.session.MediaSessionCompatApi21.Callback);
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
							public onSetRating(param0: android.media.Rating): void;
							public onCustomAction(param0: string, param1: android.os.Bundle): void;
							public mCallback: android.support.v4.media.session.MediaSessionCompatApi21.Callback;
						}
						export class QueueItem {
							public static createItem(param0: java.lang.Object, param1: number): java.lang.Object;
							public static getDescription(param0: java.lang.Object): java.lang.Object;
							public static getQueueId(param0: java.lang.Object): number;
						}
					}
				}
			}
		}
	}
}
