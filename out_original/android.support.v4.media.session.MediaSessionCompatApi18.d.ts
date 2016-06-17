/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class MediaSessionCompatApi18 {
						public static createPlaybackPositionUpdateListener(param0: android.support.v4.media.session.MediaSessionCompatApi18.Callback): java.lang.Object;
						public static registerMediaButtonEventReceiver(param0: android.content.Context, param1: android.app.PendingIntent, param2: android.content.ComponentName): void;
						public static unregisterMediaButtonEventReceiver(param0: android.content.Context, param1: android.app.PendingIntent, param2: android.content.ComponentName): void;
						public static setState(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number): void;
						public static setTransportControlFlags(param0: java.lang.Object, param1: number): void;
						public static setOnPlaybackPositionUpdateListener(param0: java.lang.Object, param1: java.lang.Object): void;
					}
					export module MediaSessionCompatApi18 {
						export class Callback {
							public onSeekTo(param0: number): void;
						}
						export class OnPlaybackPositionUpdateListener {
							public constructor();
							public constructor(param0: android.support.v4.media.session.MediaSessionCompatApi18.Callback);
							public onPlaybackPositionUpdate(param0: number): void;
							public mCallback: android.support.v4.media.session.MediaSessionCompatApi18.Callback;
						}
					}
				}
			}
		}
	}
}
