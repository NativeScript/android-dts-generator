/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export class CamcorderProfile {
			public static get(param0: number): android.media.CamcorderProfile;
			public static get(param0: number, param1: number): android.media.CamcorderProfile;
			public static hasProfile(param0: number): boolean;
			public static hasProfile(param0: number, param1: number): boolean;
			public static QUALITY_1080P: number;
			public static QUALITY_2160P: number;
			public static QUALITY_480P: number;
			public static QUALITY_720P: number;
			public static QUALITY_CIF: number;
			public static QUALITY_HIGH: number;
			public static QUALITY_HIGH_SPEED_1080P: number;
			public static QUALITY_HIGH_SPEED_2160P: number;
			public static QUALITY_HIGH_SPEED_480P: number;
			public static QUALITY_HIGH_SPEED_720P: number;
			public static QUALITY_HIGH_SPEED_HIGH: number;
			public static QUALITY_HIGH_SPEED_LOW: number;
			public static QUALITY_LOW: number;
			public static QUALITY_QCIF: number;
			public static QUALITY_QVGA: number;
			public static QUALITY_TIME_LAPSE_1080P: number;
			public static QUALITY_TIME_LAPSE_2160P: number;
			public static QUALITY_TIME_LAPSE_480P: number;
			public static QUALITY_TIME_LAPSE_720P: number;
			public static QUALITY_TIME_LAPSE_CIF: number;
			public static QUALITY_TIME_LAPSE_HIGH: number;
			public static QUALITY_TIME_LAPSE_LOW: number;
			public static QUALITY_TIME_LAPSE_QCIF: number;
			public static QUALITY_TIME_LAPSE_QVGA: number;
			public audioBitRate: number;
			public audioChannels: number;
			public audioCodec: number;
			public audioSampleRate: number;
			public duration: number;
			public fileFormat: number;
			public quality: number;
			public videoBitRate: number;
			public videoCodec: number;
			public videoFrameHeight: number;
			public videoFrameRate: number;
			public videoFrameWidth: number;
		}
	}
}
