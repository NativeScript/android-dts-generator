/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.AudioTrack.d.ts" />
/// <reference path="./android.media.MediaTimestamp.d.ts" />
/// <reference path="./android.media.PlaybackParams.d.ts" />
/// <reference path="./android.media.SyncParams.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />

declare module android {
	export module media {
		export class MediaSync {
			public constructor();
			public finalize(): void;
			public release(): void;
			public setCallback(param0: android.media.MediaSync.Callback, param1: android.os.Handler): void;
			public setOnErrorListener(param0: android.media.MediaSync.OnErrorListener, param1: android.os.Handler): void;
			public setSurface(param0: android.view.Surface): void;
			public setAudioTrack(param0: android.media.AudioTrack): void;
			public createInputSurface(): android.view.Surface;
			public setPlaybackParams(param0: android.media.PlaybackParams): void;
			public getPlaybackParams(): android.media.PlaybackParams;
			public setSyncParams(param0: android.media.SyncParams): void;
			public getSyncParams(): android.media.SyncParams;
			public flush(): void;
			public getTimestamp(): android.media.MediaTimestamp;
			public queueAudio(param0: java.nio.ByteBuffer, param1: number, param2: number): void;
			public static MEDIASYNC_ERROR_AUDIOTRACK_FAIL: number;
			public static MEDIASYNC_ERROR_SURFACE_FAIL: number;
		}
		export module MediaSync {
			export class Callback {
				public constructor();
				public onAudioBufferConsumed(param0: android.media.MediaSync, param1: java.nio.ByteBuffer, param2: number): void;
			}
			export class OnErrorListener {
				public onError(param0: android.media.MediaSync, param1: number, param2: number): void;
			}
		}
	}
}
