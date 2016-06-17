/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.MediaCodecInfo.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />

declare module android {
	export module media {
		export class MediaCodecList {
			public constructor();
			public constructor(param0: number);
			public static getCodecCount(): number;
			public static getCodecInfoAt(param0: number): android.media.MediaCodecInfo;
			public getCodecInfos(): native.Array<android.media.MediaCodecInfo>;
			public findDecoderForFormat(param0: android.media.MediaFormat): string;
			public findEncoderForFormat(param0: android.media.MediaFormat): string;
			public static ALL_CODECS: number;
			public static REGULAR_CODECS: number;
		}
	}
}
