/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.support.v4.media.TransportPerformer.d.ts" />
/// <reference path="./android.support.v4.media.TransportStateListener.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class TransportMediator {
					public constructor();
					public constructor(param0: android.app.Activity, param1: android.support.v4.media.TransportPerformer);
					public constructor(param0: android.view.View, param1: android.support.v4.media.TransportPerformer);
					public getRemoteControlClient(): java.lang.Object;
					public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
					public registerStateListener(param0: android.support.v4.media.TransportStateListener): void;
					public unregisterStateListener(param0: android.support.v4.media.TransportStateListener): void;
					public refreshState(): void;
					public startPlaying(): void;
					public pausePlaying(): void;
					public stopPlaying(): void;
					public getDuration(): number;
					public getCurrentPosition(): number;
					public seekTo(param0: number): void;
					public isPlaying(): boolean;
					public getBufferPercentage(): number;
					public getTransportControlFlags(): number;
					public destroy(): void;
					public static KEYCODE_MEDIA_PLAY: number;
					public static KEYCODE_MEDIA_PAUSE: number;
					public static KEYCODE_MEDIA_RECORD: number;
					public static FLAG_KEY_MEDIA_PREVIOUS: number;
					public static FLAG_KEY_MEDIA_REWIND: number;
					public static FLAG_KEY_MEDIA_PLAY: number;
					public static FLAG_KEY_MEDIA_PLAY_PAUSE: number;
					public static FLAG_KEY_MEDIA_PAUSE: number;
					public static FLAG_KEY_MEDIA_STOP: number;
					public static FLAG_KEY_MEDIA_FAST_FORWARD: number;
					public static FLAG_KEY_MEDIA_NEXT: number;
				}
			}
		}
	}
}
