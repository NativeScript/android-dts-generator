/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.media.MediaMetadata.d.ts" />
/// <reference path="./android.media.session.PlaybackState.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class MediaControllerCompatApi21 {
						public static fromToken(param0: android.content.Context, param1: java.lang.Object): java.lang.Object;
						public static createCallback(param0: android.support.v4.media.session.MediaControllerCompatApi21.Callback): java.lang.Object;
						public static registerCallback(param0: java.lang.Object, param1: java.lang.Object, param2: android.os.Handler): void;
						public static unregisterCallback(param0: java.lang.Object, param1: java.lang.Object): void;
						public static getTransportControls(param0: java.lang.Object): java.lang.Object;
						public static getPlaybackState(param0: java.lang.Object): java.lang.Object;
						public static getMetadata(param0: java.lang.Object): java.lang.Object;
						public static getQueue(param0: java.lang.Object): java.util.List;
						public static getQueueTitle(param0: java.lang.Object): string;
						public static getExtras(param0: java.lang.Object): android.os.Bundle;
						public static getRatingType(param0: java.lang.Object): number;
						public static getFlags(param0: java.lang.Object): number;
						public static getPlaybackInfo(param0: java.lang.Object): java.lang.Object;
						public static getSessionActivity(param0: java.lang.Object): android.app.PendingIntent;
						public static dispatchMediaButtonEvent(param0: java.lang.Object, param1: android.view.KeyEvent): boolean;
						public static setVolumeTo(param0: java.lang.Object, param1: number, param2: number): void;
						public static adjustVolume(param0: java.lang.Object, param1: number, param2: number): void;
						public static sendCommand(param0: java.lang.Object, param1: string, param2: android.os.Bundle, param3: android.os.ResultReceiver): void;
						public static getPackageName(param0: java.lang.Object): string;
					}
					export module MediaControllerCompatApi21 {
						export class Callback {
							public onSessionDestroyed(): void;
							public onSessionEvent(param0: string, param1: android.os.Bundle): void;
							public onPlaybackStateChanged(param0: java.lang.Object): void;
							public onMetadataChanged(param0: java.lang.Object): void;
						}
						export class CallbackProxy {
							public constructor();
							public constructor(param0: android.support.v4.media.session.MediaControllerCompatApi21.Callback);
							public onSessionDestroyed(): void;
							public onSessionEvent(param0: string, param1: android.os.Bundle): void;
							public onPlaybackStateChanged(param0: android.media.session.PlaybackState): void;
							public onMetadataChanged(param0: android.media.MediaMetadata): void;
							public mCallback: android.support.v4.media.session.MediaControllerCompatApi21.Callback;
						}
						export class PlaybackInfo {
							public constructor();
							public static getPlaybackType(param0: java.lang.Object): number;
							public static getAudioAttributes(param0: java.lang.Object): android.media.AudioAttributes;
							public static getLegacyAudioStream(param0: java.lang.Object): number;
							public static getVolumeControl(param0: java.lang.Object): number;
							public static getMaxVolume(param0: java.lang.Object): number;
							public static getCurrentVolume(param0: java.lang.Object): number;
						}
						export class TransportControls {
							public constructor();
							public static play(param0: java.lang.Object): void;
							public static pause(param0: java.lang.Object): void;
							public static stop(param0: java.lang.Object): void;
							public static seekTo(param0: java.lang.Object, param1: number): void;
							public static fastForward(param0: java.lang.Object): void;
							public static rewind(param0: java.lang.Object): void;
							public static skipToNext(param0: java.lang.Object): void;
							public static skipToPrevious(param0: java.lang.Object): void;
							public static setRating(param0: java.lang.Object, param1: java.lang.Object): void;
							public static playFromMediaId(param0: java.lang.Object, param1: string, param2: android.os.Bundle): void;
							public static playFromSearch(param0: java.lang.Object, param1: string, param2: android.os.Bundle): void;
							public static skipToQueueItem(param0: java.lang.Object, param1: number): void;
							public static sendCustomAction(param0: java.lang.Object, param1: string, param2: android.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}
