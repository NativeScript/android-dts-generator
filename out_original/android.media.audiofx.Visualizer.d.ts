/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export module audiofx {
			export class Visualizer {
				public constructor();
				public constructor(param0: number);
				public release(): void;
				public finalize(): void;
				public setEnabled(param0: boolean): number;
				public getEnabled(): boolean;
				public static getCaptureSizeRange(): native.Array<number>;
				public static getMaxCaptureRate(): number;
				public setCaptureSize(param0: number): number;
				public getCaptureSize(): number;
				public setScalingMode(param0: number): number;
				public getScalingMode(): number;
				public setMeasurementMode(param0: number): number;
				public getMeasurementMode(): number;
				public getSamplingRate(): number;
				public getWaveForm(param0: native.Array<number>): number;
				public getFft(param0: native.Array<number>): number;
				public getMeasurementPeakRms(param0: android.media.audiofx.Visualizer.MeasurementPeakRms): number;
				public setDataCaptureListener(param0: android.media.audiofx.Visualizer.OnDataCaptureListener, param1: number, param2: boolean, param3: boolean): number;
				public static ALREADY_EXISTS: number;
				public static ERROR: number;
				public static ERROR_BAD_VALUE: number;
				public static ERROR_DEAD_OBJECT: number;
				public static ERROR_INVALID_OPERATION: number;
				public static ERROR_NO_INIT: number;
				public static ERROR_NO_MEMORY: number;
				public static MEASUREMENT_MODE_NONE: number;
				public static MEASUREMENT_MODE_PEAK_RMS: number;
				public static SCALING_MODE_AS_PLAYED: number;
				public static SCALING_MODE_NORMALIZED: number;
				public static STATE_ENABLED: number;
				public static STATE_INITIALIZED: number;
				public static STATE_UNINITIALIZED: number;
				public static SUCCESS: number;
			}
			export module Visualizer {
				export class MeasurementPeakRms {
					public constructor();
					public mPeak: number;
					public mRms: number;
				}
				export class OnDataCaptureListener {
					public onWaveFormDataCapture(param0: android.media.audiofx.Visualizer, param1: native.Array<number>, param2: number): void;
					public onFftDataCapture(param0: android.media.audiofx.Visualizer, param1: native.Array<number>, param2: number): void;
				}
			}
		}
	}
}
