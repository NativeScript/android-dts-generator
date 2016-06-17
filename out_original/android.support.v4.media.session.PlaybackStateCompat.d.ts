/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class PlaybackStateCompat {
						public toString(): string;
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public getState(): number;
						public getPosition(): number;
						public getBufferedPosition(): number;
						public getPlaybackSpeed(): number;
						public getActions(): number;
						public getCustomActions(): java.util.List;
						public getErrorMessage(): string;
						public getLastPositionUpdateTime(): number;
						public getActiveQueueItemId(): number;
						public getExtras(): android.os.Bundle;
						public static fromPlaybackState(param0: java.lang.Object): android.support.v4.media.session.PlaybackStateCompat;
						public getPlaybackState(): java.lang.Object;
						public static ACTION_STOP: number;
						public static ACTION_PAUSE: number;
						public static ACTION_PLAY: number;
						public static ACTION_REWIND: number;
						public static ACTION_SKIP_TO_PREVIOUS: number;
						public static ACTION_SKIP_TO_NEXT: number;
						public static ACTION_FAST_FORWARD: number;
						public static ACTION_SET_RATING: number;
						public static ACTION_SEEK_TO: number;
						public static ACTION_PLAY_PAUSE: number;
						public static ACTION_PLAY_FROM_MEDIA_ID: number;
						public static ACTION_PLAY_FROM_SEARCH: number;
						public static ACTION_SKIP_TO_QUEUE_ITEM: number;
						public static ACTION_PLAY_FROM_URI: number;
						public static STATE_NONE: number;
						public static STATE_STOPPED: number;
						public static STATE_PAUSED: number;
						public static STATE_PLAYING: number;
						public static STATE_FAST_FORWARDING: number;
						public static STATE_REWINDING: number;
						public static STATE_BUFFERING: number;
						public static STATE_ERROR: number;
						public static STATE_CONNECTING: number;
						public static STATE_SKIPPING_TO_PREVIOUS: number;
						public static STATE_SKIPPING_TO_NEXT: number;
						public static STATE_SKIPPING_TO_QUEUE_ITEM: number;
						public static PLAYBACK_POSITION_UNKNOWN: number;
						public static CREATOR: android.os.Parcelable.Creator;
					}
					export module PlaybackStateCompat {
						export class Actions {
						}
						export class Builder {
							public constructor();
							public constructor(param0: android.support.v4.media.session.PlaybackStateCompat);
							public setState(param0: number, param1: number, param2: number): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public setState(param0: number, param1: number, param2: number, param3: number): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public setBufferedPosition(param0: number): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public setActions(param0: number): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public addCustomAction(param0: string, param1: string, param2: number): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public addCustomAction(param0: android.support.v4.media.session.PlaybackStateCompat.CustomAction): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public setActiveQueueItemId(param0: number): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public setErrorMessage(param0: string): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public setExtras(param0: android.os.Bundle): android.support.v4.media.session.PlaybackStateCompat.Builder;
							public build(): android.support.v4.media.session.PlaybackStateCompat;
						}
						export class CustomAction {
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public describeContents(): number;
							public static fromCustomAction(param0: java.lang.Object): android.support.v4.media.session.PlaybackStateCompat.CustomAction;
							public getCustomAction(): java.lang.Object;
							public getAction(): string;
							public getName(): string;
							public getIcon(): number;
							public getExtras(): android.os.Bundle;
							public toString(): string;
							public static CREATOR: android.os.Parcelable.Creator;
						}
						export module CustomAction {
							export class Builder {
								public constructor();
								public constructor(param0: string, param1: string, param2: number);
								public setExtras(param0: android.os.Bundle): android.support.v4.media.session.PlaybackStateCompat.CustomAction.Builder;
								public build(): android.support.v4.media.session.PlaybackStateCompat.CustomAction;
							}
						}
						export class State {
						}
					}
				}
			}
		}
	}
}
