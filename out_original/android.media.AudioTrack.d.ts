/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.media.AudioDeviceInfo.d.ts" />
/// <reference path="./android.media.AudioFormat.d.ts" />
/// <reference path="./android.media.AudioTimestamp.d.ts" />
/// <reference path="./android.media.PlaybackParams.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />

declare module android {
	export module media {
		export class AudioTrack {
			public constructor();
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
			public constructor(param0: android.media.AudioAttributes, param1: android.media.AudioFormat, param2: number, param3: number, param4: number);
			public release(): void;
			public finalize(): void;
			public static getMinVolume(): number;
			public static getMaxVolume(): number;
			public getSampleRate(): number;
			public getPlaybackRate(): number;
			public getPlaybackParams(): android.media.PlaybackParams;
			public getAudioFormat(): number;
			public getStreamType(): number;
			public getChannelConfiguration(): number;
			public getFormat(): android.media.AudioFormat;
			public getChannelCount(): number;
			public getState(): number;
			public getPlayState(): number;
			public getBufferSizeInFrames(): number;
			public getNativeFrameCount(): number;
			public getNotificationMarkerPosition(): number;
			public getPositionNotificationPeriod(): number;
			public getPlaybackHeadPosition(): number;
			public static getNativeOutputSampleRate(param0: number): number;
			public static getMinBufferSize(param0: number, param1: number, param2: number): number;
			public getAudioSessionId(): number;
			public getTimestamp(param0: android.media.AudioTimestamp): boolean;
			public setPlaybackPositionUpdateListener(param0: android.media.AudioTrack.OnPlaybackPositionUpdateListener): void;
			public setPlaybackPositionUpdateListener(param0: android.media.AudioTrack.OnPlaybackPositionUpdateListener, param1: android.os.Handler): void;
			public setStereoVolume(param0: number, param1: number): number;
			public setVolume(param0: number): number;
			public setPlaybackRate(param0: number): number;
			public setPlaybackParams(param0: android.media.PlaybackParams): void;
			public setNotificationMarkerPosition(param0: number): number;
			public setPositionNotificationPeriod(param0: number): number;
			public setPlaybackHeadPosition(param0: number): number;
			public setLoopPoints(param0: number, param1: number, param2: number): number;
			public setState(param0: number): void;
			public play(): void;
			public stop(): void;
			public pause(): void;
			public flush(): void;
			public write(param0: native.Array<number>, param1: number, param2: number): number;
			public write(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
			public write(param0: native.Array<number>, param1: number, param2: number): number;
			public write(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
			public write(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
			public write(param0: java.nio.ByteBuffer, param1: number, param2: number): number;
			public write(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: number): number;
			public reloadStaticData(): number;
			public attachAuxEffect(param0: number): number;
			public setAuxEffectSendLevel(param0: number): number;
			public setPreferredDevice(param0: android.media.AudioDeviceInfo): boolean;
			public getPreferredDevice(): android.media.AudioDeviceInfo;
			public getRoutedDevice(): android.media.AudioDeviceInfo;
			public addOnRoutingChangedListener(param0: android.media.AudioTrack.OnRoutingChangedListener, param1: android.os.Handler): void;
			public removeOnRoutingChangedListener(param0: android.media.AudioTrack.OnRoutingChangedListener): void;
			public static ERROR: number;
			public static ERROR_BAD_VALUE: number;
			public static ERROR_INVALID_OPERATION: number;
			public static MODE_STATIC: number;
			public static MODE_STREAM: number;
			public static PLAYSTATE_PAUSED: number;
			public static PLAYSTATE_PLAYING: number;
			public static PLAYSTATE_STOPPED: number;
			public static STATE_INITIALIZED: number;
			public static STATE_NO_STATIC_DATA: number;
			public static STATE_UNINITIALIZED: number;
			public static SUCCESS: number;
			public static WRITE_BLOCKING: number;
			public static WRITE_NON_BLOCKING: number;
		}
		export module AudioTrack {
			export class Builder {
				public constructor();
				public setAudioAttributes(param0: android.media.AudioAttributes): android.media.AudioTrack.Builder;
				public setAudioFormat(param0: android.media.AudioFormat): android.media.AudioTrack.Builder;
				public setBufferSizeInBytes(param0: number): android.media.AudioTrack.Builder;
				public setTransferMode(param0: number): android.media.AudioTrack.Builder;
				public setSessionId(param0: number): android.media.AudioTrack.Builder;
				public build(): android.media.AudioTrack;
			}
			export class OnPlaybackPositionUpdateListener {
				public onMarkerReached(param0: android.media.AudioTrack): void;
				public onPeriodicNotification(param0: android.media.AudioTrack): void;
			}
			export class OnRoutingChangedListener {
				public onRoutingChanged(param0: android.media.AudioTrack): void;
			}
		}
	}
}
