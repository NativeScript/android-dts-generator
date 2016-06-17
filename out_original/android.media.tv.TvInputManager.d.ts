/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.tv.TvContentRating.d.ts" />
/// <reference path="./android.media.tv.TvInputInfo.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module media {
		export module tv {
			export class TvInputManager {
				public getTvInputList(): java.util.List;
				public getTvInputInfo(param0: string): android.media.tv.TvInputInfo;
				public getInputState(param0: string): number;
				public registerCallback(param0: android.media.tv.TvInputManager.TvInputCallback, param1: android.os.Handler): void;
				public unregisterCallback(param0: android.media.tv.TvInputManager.TvInputCallback): void;
				public isParentalControlsEnabled(): boolean;
				public isRatingBlocked(param0: android.media.tv.TvContentRating): boolean;
				public static ACTION_BLOCKED_RATINGS_CHANGED: string;
				public static ACTION_PARENTAL_CONTROLS_ENABLED_CHANGED: string;
				public static ACTION_QUERY_CONTENT_RATING_SYSTEMS: string;
				public static INPUT_STATE_CONNECTED: number;
				public static INPUT_STATE_CONNECTED_STANDBY: number;
				public static INPUT_STATE_DISCONNECTED: number;
				public static META_DATA_CONTENT_RATING_SYSTEMS: string;
				public static TIME_SHIFT_INVALID_TIME: number;
				public static TIME_SHIFT_STATUS_AVAILABLE: number;
				public static TIME_SHIFT_STATUS_UNAVAILABLE: number;
				public static TIME_SHIFT_STATUS_UNKNOWN: number;
				public static TIME_SHIFT_STATUS_UNSUPPORTED: number;
				public static VIDEO_UNAVAILABLE_REASON_AUDIO_ONLY: number;
				public static VIDEO_UNAVAILABLE_REASON_BUFFERING: number;
				public static VIDEO_UNAVAILABLE_REASON_TUNING: number;
				public static VIDEO_UNAVAILABLE_REASON_UNKNOWN: number;
				public static VIDEO_UNAVAILABLE_REASON_WEAK_SIGNAL: number;
			}
			export module TvInputManager {
				export class TvInputCallback {
					public constructor();
					public onInputStateChanged(param0: string, param1: number): void;
					public onInputAdded(param0: string): void;
					public onInputRemoved(param0: string): void;
				}
			}
		}
	}
}
