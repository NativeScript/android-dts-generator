/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.Camera.d.ts" />
/// <reference path="./android.media.CamcorderProfile.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export class MediaRecorder {
			public constructor();
			public setCamera(param0: android.hardware.Camera): void;
			public getSurface(): android.view.Surface;
			public setInputSurface(param0: android.view.Surface): void;
			public setPreviewDisplay(param0: android.view.Surface): void;
			public setAudioSource(param0: number): void;
			public static getAudioSourceMax(): number;
			public setVideoSource(param0: number): void;
			public setProfile(param0: android.media.CamcorderProfile): void;
			public setCaptureRate(param0: number): void;
			public setOrientationHint(param0: number): void;
			public setLocation(param0: number, param1: number): void;
			public setOutputFormat(param0: number): void;
			public setVideoSize(param0: number, param1: number): void;
			public setVideoFrameRate(param0: number): void;
			public setMaxDuration(param0: number): void;
			public setMaxFileSize(param0: number): void;
			public setAudioEncoder(param0: number): void;
			public setVideoEncoder(param0: number): void;
			public setAudioSamplingRate(param0: number): void;
			public setAudioChannels(param0: number): void;
			public setAudioEncodingBitRate(param0: number): void;
			public setVideoEncodingBitRate(param0: number): void;
			public setOutputFile(param0: java.io.FileDescriptor): void;
			public setOutputFile(param0: string): void;
			public prepare(): void;
			public start(): void;
			public stop(): void;
			public reset(): void;
			public getMaxAmplitude(): number;
			public setOnErrorListener(param0: android.media.MediaRecorder.OnErrorListener): void;
			public setOnInfoListener(param0: android.media.MediaRecorder.OnInfoListener): void;
			public release(): void;
			public finalize(): void;
			public static MEDIA_ERROR_SERVER_DIED: number;
			public static MEDIA_RECORDER_ERROR_UNKNOWN: number;
			public static MEDIA_RECORDER_INFO_MAX_DURATION_REACHED: number;
			public static MEDIA_RECORDER_INFO_MAX_FILESIZE_REACHED: number;
			public static MEDIA_RECORDER_INFO_UNKNOWN: number;
		}
		export module MediaRecorder {
			export class AudioEncoder {
				public static AAC: number;
				public static AAC_ELD: number;
				public static AMR_NB: number;
				public static AMR_WB: number;
				public static DEFAULT: number;
				public static HE_AAC: number;
				public static VORBIS: number;
			}
			export class AudioSource {
				public static CAMCORDER: number;
				public static DEFAULT: number;
				public static MIC: number;
				public static REMOTE_SUBMIX: number;
				public static VOICE_CALL: number;
				public static VOICE_COMMUNICATION: number;
				public static VOICE_DOWNLINK: number;
				public static VOICE_RECOGNITION: number;
				public static VOICE_UPLINK: number;
			}
			export class OnErrorListener {
				public onError(param0: android.media.MediaRecorder, param1: number, param2: number): void;
			}
			export class OnInfoListener {
				public onInfo(param0: android.media.MediaRecorder, param1: number, param2: number): void;
			}
			export class OutputFormat {
				public static AAC_ADTS: number;
				public static AMR_NB: number;
				public static AMR_WB: number;
				public static DEFAULT: number;
				public static MPEG_4: number;
				public static RAW_AMR: number;
				public static THREE_GPP: number;
				public static WEBM: number;
			}
			export class VideoEncoder {
				public static DEFAULT: number;
				public static H263: number;
				public static H264: number;
				public static MPEG_4_SP: number;
				public static VP8: number;
			}
			export class VideoSource {
				public static CAMERA: number;
				public static DEFAULT: number;
				public static SURFACE: number;
			}
		}
	}
}
