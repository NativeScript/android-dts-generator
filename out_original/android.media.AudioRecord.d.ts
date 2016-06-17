/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.AudioDeviceInfo.d.ts" />
/// <reference path="./android.media.AudioFormat.d.ts" />
/// <reference path="./android.media.MediaSyncEvent.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />

declare module android {
	export module media {
		export class AudioRecord {
			public constructor();
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
			public release(): void;
			public finalize(): void;
			public getSampleRate(): number;
			public getAudioSource(): number;
			public getAudioFormat(): number;
			public getChannelConfiguration(): number;
			public getFormat(): android.media.AudioFormat;
			public getChannelCount(): number;
			public getState(): number;
			public getRecordingState(): number;
			public getBufferSizeInFrames(): number;
			public getNotificationMarkerPosition(): number;
			public getPositionNotificationPeriod(): number;
			public static getMinBufferSize(param0: number, param1: number, param2: number): number;
			public getAudioSessionId(): number;
			public startRecording(): void;
			public startRecording(param0: android.media.MediaSyncEvent): void;
			public stop(): void;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public read(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public read(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
			public read(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
			public read(param0: java.nio.ByteBuffer, param1: number): number;
			public read(param0: java.nio.ByteBuffer, param1: number, param2: number): number;
			public setRecordPositionUpdateListener(param0: android.media.AudioRecord.OnRecordPositionUpdateListener): void;
			public setRecordPositionUpdateListener(param0: android.media.AudioRecord.OnRecordPositionUpdateListener, param1: android.os.Handler): void;
			public setNotificationMarkerPosition(param0: number): number;
			public getRoutedDevice(): android.media.AudioDeviceInfo;
			public addOnRoutingChangedListener(param0: android.media.AudioRecord.OnRoutingChangedListener, param1: android.os.Handler): void;
			public removeOnRoutingChangedListener(param0: android.media.AudioRecord.OnRoutingChangedListener): void;
			public setPositionNotificationPeriod(param0: number): number;
			public setPreferredDevice(param0: android.media.AudioDeviceInfo): boolean;
			public getPreferredDevice(): android.media.AudioDeviceInfo;
			public static ERROR: number;
			public static ERROR_BAD_VALUE: number;
			public static ERROR_INVALID_OPERATION: number;
			public static READ_BLOCKING: number;
			public static READ_NON_BLOCKING: number;
			public static RECORDSTATE_RECORDING: number;
			public static RECORDSTATE_STOPPED: number;
			public static STATE_INITIALIZED: number;
			public static STATE_UNINITIALIZED: number;
			public static SUCCESS: number;
		}
		export module AudioRecord {
			export class Builder {
				public constructor();
				public setAudioSource(param0: number): android.media.AudioRecord.Builder;
				public setAudioFormat(param0: android.media.AudioFormat): android.media.AudioRecord.Builder;
				public setBufferSizeInBytes(param0: number): android.media.AudioRecord.Builder;
				public build(): android.media.AudioRecord;
			}
			export class OnRecordPositionUpdateListener {
				public onMarkerReached(param0: android.media.AudioRecord): void;
				public onPeriodicNotification(param0: android.media.AudioRecord): void;
			}
			export class OnRoutingChangedListener {
				public onRoutingChanged(param0: android.media.AudioRecord): void;
			}
		}
	}
}
