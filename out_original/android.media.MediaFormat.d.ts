/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />

declare module android {
	export module media {
		export class MediaFormat {
			public constructor();
			public containsKey(param0: string): boolean;
			public getInteger(param0: string): number;
			public getLong(param0: string): number;
			public getFloat(param0: string): number;
			public getString(param0: string): string;
			public getByteBuffer(param0: string): java.nio.ByteBuffer;
			public getFeatureEnabled(param0: string): boolean;
			public setInteger(param0: string, param1: number): void;
			public setLong(param0: string, param1: number): void;
			public setFloat(param0: string, param1: number): void;
			public setString(param0: string, param1: string): void;
			public setByteBuffer(param0: string, param1: java.nio.ByteBuffer): void;
			public setFeatureEnabled(param0: string, param1: boolean): void;
			public static createAudioFormat(param0: string, param1: number, param2: number): android.media.MediaFormat;
			public static createSubtitleFormat(param0: string, param1: string): android.media.MediaFormat;
			public static createVideoFormat(param0: string, param1: number, param2: number): android.media.MediaFormat;
			public toString(): string;
			public static KEY_AAC_DRC_ATTENUATION_FACTOR: string;
			public static KEY_AAC_DRC_BOOST_FACTOR: string;
			public static KEY_AAC_DRC_HEAVY_COMPRESSION: string;
			public static KEY_AAC_DRC_TARGET_REFERENCE_LEVEL: string;
			public static KEY_AAC_ENCODED_TARGET_LEVEL: string;
			public static KEY_AAC_MAX_OUTPUT_CHANNEL_COUNT: string;
			public static KEY_AAC_PROFILE: string;
			public static KEY_AAC_SBR_MODE: string;
			public static KEY_AUDIO_SESSION_ID: string;
			public static KEY_BITRATE_MODE: string;
			public static KEY_BIT_RATE: string;
			public static KEY_CAPTURE_RATE: string;
			public static KEY_CHANNEL_COUNT: string;
			public static KEY_CHANNEL_MASK: string;
			public static KEY_COLOR_FORMAT: string;
			public static KEY_COMPLEXITY: string;
			public static KEY_DURATION: string;
			public static KEY_FLAC_COMPRESSION_LEVEL: string;
			public static KEY_FRAME_RATE: string;
			public static KEY_HEIGHT: string;
			public static KEY_IS_ADTS: string;
			public static KEY_IS_AUTOSELECT: string;
			public static KEY_IS_DEFAULT: string;
			public static KEY_IS_FORCED_SUBTITLE: string;
			public static KEY_I_FRAME_INTERVAL: string;
			public static KEY_LANGUAGE: string;
			public static KEY_LEVEL: string;
			public static KEY_MAX_HEIGHT: string;
			public static KEY_MAX_INPUT_SIZE: string;
			public static KEY_MAX_WIDTH: string;
			public static KEY_MIME: string;
			public static KEY_OPERATING_RATE: string;
			public static KEY_PRIORITY: string;
			public static KEY_PROFILE: string;
			public static KEY_PUSH_BLANK_BUFFERS_ON_STOP: string;
			public static KEY_REPEAT_PREVIOUS_FRAME_AFTER: string;
			public static KEY_ROTATION: string;
			public static KEY_SAMPLE_RATE: string;
			public static KEY_SLICE_HEIGHT: string;
			public static KEY_STRIDE: string;
			public static KEY_TEMPORAL_LAYERING: string;
			public static KEY_WIDTH: string;
			public static MIMETYPE_AUDIO_AAC: string;
			public static MIMETYPE_AUDIO_AC3: string;
			public static MIMETYPE_AUDIO_AMR_NB: string;
			public static MIMETYPE_AUDIO_AMR_WB: string;
			public static MIMETYPE_AUDIO_EAC3: string;
			public static MIMETYPE_AUDIO_FLAC: string;
			public static MIMETYPE_AUDIO_G711_ALAW: string;
			public static MIMETYPE_AUDIO_G711_MLAW: string;
			public static MIMETYPE_AUDIO_MPEG: string;
			public static MIMETYPE_AUDIO_MSGSM: string;
			public static MIMETYPE_AUDIO_OPUS: string;
			public static MIMETYPE_AUDIO_QCELP: string;
			public static MIMETYPE_AUDIO_RAW: string;
			public static MIMETYPE_AUDIO_VORBIS: string;
			public static MIMETYPE_TEXT_CEA_608: string;
			public static MIMETYPE_TEXT_VTT: string;
			public static MIMETYPE_VIDEO_AVC: string;
			public static MIMETYPE_VIDEO_H263: string;
			public static MIMETYPE_VIDEO_HEVC: string;
			public static MIMETYPE_VIDEO_MPEG2: string;
			public static MIMETYPE_VIDEO_MPEG4: string;
			public static MIMETYPE_VIDEO_RAW: string;
			public static MIMETYPE_VIDEO_VP8: string;
			public static MIMETYPE_VIDEO_VP9: string;
		}
	}
}
