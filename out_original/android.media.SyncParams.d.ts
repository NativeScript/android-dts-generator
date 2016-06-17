/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export class SyncParams {
			public constructor();
			public allowDefaults(): android.media.SyncParams;
			public setAudioAdjustMode(param0: number): android.media.SyncParams;
			public getAudioAdjustMode(): number;
			public setSyncSource(param0: number): android.media.SyncParams;
			public getSyncSource(): number;
			public setTolerance(param0: number): android.media.SyncParams;
			public getTolerance(): number;
			public setFrameRate(param0: number): android.media.SyncParams;
			public getFrameRate(): number;
			public static AUDIO_ADJUST_MODE_DEFAULT: number;
			public static AUDIO_ADJUST_MODE_RESAMPLE: number;
			public static AUDIO_ADJUST_MODE_STRETCH: number;
			public static SYNC_SOURCE_AUDIO: number;
			public static SYNC_SOURCE_DEFAULT: number;
			public static SYNC_SOURCE_SYSTEM_CLOCK: number;
			public static SYNC_SOURCE_VSYNC: number;
		}
	}
}
