/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.media.MediaMetadataEditor.d.ts" />
/// <reference path="./android.media.session.MediaSession.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export class RemoteControlClient {
			public constructor();
			public constructor(param0: android.app.PendingIntent);
			public constructor(param0: android.app.PendingIntent, param1: android.os.Looper);
			public getMediaSession(): android.media.session.MediaSession;
			public editMetadata(param0: boolean): android.media.RemoteControlClient.MetadataEditor;
			public setPlaybackState(param0: number): void;
			public setPlaybackState(param0: number, param1: number, param2: number): void;
			public setTransportControlFlags(param0: number): void;
			public setMetadataUpdateListener(param0: android.media.RemoteControlClient.OnMetadataUpdateListener): void;
			public setPlaybackPositionUpdateListener(param0: android.media.RemoteControlClient.OnPlaybackPositionUpdateListener): void;
			public setOnGetPlaybackPositionListener(param0: android.media.RemoteControlClient.OnGetPlaybackPositionListener): void;
			public static FLAG_KEY_MEDIA_FAST_FORWARD: number;
			public static FLAG_KEY_MEDIA_NEXT: number;
			public static FLAG_KEY_MEDIA_PAUSE: number;
			public static FLAG_KEY_MEDIA_PLAY: number;
			public static FLAG_KEY_MEDIA_PLAY_PAUSE: number;
			public static FLAG_KEY_MEDIA_POSITION_UPDATE: number;
			public static FLAG_KEY_MEDIA_PREVIOUS: number;
			public static FLAG_KEY_MEDIA_RATING: number;
			public static FLAG_KEY_MEDIA_REWIND: number;
			public static FLAG_KEY_MEDIA_STOP: number;
			public static PLAYSTATE_BUFFERING: number;
			public static PLAYSTATE_ERROR: number;
			public static PLAYSTATE_FAST_FORWARDING: number;
			public static PLAYSTATE_PAUSED: number;
			public static PLAYSTATE_PLAYING: number;
			public static PLAYSTATE_REWINDING: number;
			public static PLAYSTATE_SKIPPING_BACKWARDS: number;
			public static PLAYSTATE_SKIPPING_FORWARDS: number;
			public static PLAYSTATE_STOPPED: number;
		}
		export module RemoteControlClient {
			export class MetadataEditor {
				public putString(param0: number, param1: string): android.media.MediaMetadataEditor;
				public putString(param0: number, param1: string): android.media.RemoteControlClient.MetadataEditor;
				public putLong(param0: number, param1: number): android.media.MediaMetadataEditor;
				public putLong(param0: number, param1: number): android.media.RemoteControlClient.MetadataEditor;
				public putBitmap(param0: number, param1: android.graphics.Bitmap): android.media.MediaMetadataEditor;
				public putBitmap(param0: number, param1: android.graphics.Bitmap): android.media.RemoteControlClient.MetadataEditor;
				public putObject(param0: number, param1: java.lang.Object): android.media.MediaMetadataEditor;
				public putObject(param0: number, param1: java.lang.Object): android.media.RemoteControlClient.MetadataEditor;
				public clear(): void;
				public apply(): void;
				public static BITMAP_KEY_ARTWORK: number;
			}
			export class OnGetPlaybackPositionListener {
				public onGetPlaybackPosition(): number;
			}
			export class OnMetadataUpdateListener {
				public onMetadataUpdate(param0: number, param1: java.lang.Object): void;
			}
			export class OnPlaybackPositionUpdateListener {
				public onPlaybackPositionUpdate(param0: number): void;
			}
		}
	}
}
