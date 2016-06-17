/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export class AudioFormat {
			public getEncoding(): number;
			public getSampleRate(): number;
			public getChannelMask(): number;
			public getChannelIndexMask(): number;
			public getChannelCount(): number;
			public toString(): string;
			public static CHANNEL_CONFIGURATION_DEFAULT: number;
			public static CHANNEL_CONFIGURATION_INVALID: number;
			public static CHANNEL_CONFIGURATION_MONO: number;
			public static CHANNEL_CONFIGURATION_STEREO: number;
			public static CHANNEL_INVALID: number;
			public static CHANNEL_IN_BACK: number;
			public static CHANNEL_IN_BACK_PROCESSED: number;
			public static CHANNEL_IN_DEFAULT: number;
			public static CHANNEL_IN_FRONT: number;
			public static CHANNEL_IN_FRONT_PROCESSED: number;
			public static CHANNEL_IN_LEFT: number;
			public static CHANNEL_IN_LEFT_PROCESSED: number;
			public static CHANNEL_IN_MONO: number;
			public static CHANNEL_IN_PRESSURE: number;
			public static CHANNEL_IN_RIGHT: number;
			public static CHANNEL_IN_RIGHT_PROCESSED: number;
			public static CHANNEL_IN_STEREO: number;
			public static CHANNEL_IN_VOICE_DNLINK: number;
			public static CHANNEL_IN_VOICE_UPLINK: number;
			public static CHANNEL_IN_X_AXIS: number;
			public static CHANNEL_IN_Y_AXIS: number;
			public static CHANNEL_IN_Z_AXIS: number;
			public static CHANNEL_OUT_5POINT1: number;
			public static CHANNEL_OUT_7POINT1: number;
			public static CHANNEL_OUT_7POINT1_SURROUND: number;
			public static CHANNEL_OUT_BACK_CENTER: number;
			public static CHANNEL_OUT_BACK_LEFT: number;
			public static CHANNEL_OUT_BACK_RIGHT: number;
			public static CHANNEL_OUT_DEFAULT: number;
			public static CHANNEL_OUT_FRONT_CENTER: number;
			public static CHANNEL_OUT_FRONT_LEFT: number;
			public static CHANNEL_OUT_FRONT_LEFT_OF_CENTER: number;
			public static CHANNEL_OUT_FRONT_RIGHT: number;
			public static CHANNEL_OUT_FRONT_RIGHT_OF_CENTER: number;
			public static CHANNEL_OUT_LOW_FREQUENCY: number;
			public static CHANNEL_OUT_MONO: number;
			public static CHANNEL_OUT_QUAD: number;
			public static CHANNEL_OUT_SIDE_LEFT: number;
			public static CHANNEL_OUT_SIDE_RIGHT: number;
			public static CHANNEL_OUT_STEREO: number;
			public static CHANNEL_OUT_SURROUND: number;
			public static ENCODING_AC3: number;
			public static ENCODING_DEFAULT: number;
			public static ENCODING_DTS: number;
			public static ENCODING_DTS_HD: number;
			public static ENCODING_E_AC3: number;
			public static ENCODING_INVALID: number;
			public static ENCODING_PCM_16BIT: number;
			public static ENCODING_PCM_8BIT: number;
			public static ENCODING_PCM_FLOAT: number;
		}
		export module AudioFormat {
			export class Builder {
				public constructor();
				public constructor(param0: android.media.AudioFormat);
				public build(): android.media.AudioFormat;
				public setEncoding(param0: number): android.media.AudioFormat.Builder;
				public setChannelMask(param0: number): android.media.AudioFormat.Builder;
				public setChannelIndexMask(param0: number): android.media.AudioFormat.Builder;
				public setSampleRate(param0: number): android.media.AudioFormat.Builder;
			}
		}
	}
}
