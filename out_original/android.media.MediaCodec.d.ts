/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.Image.d.ts" />
/// <reference path="./android.media.MediaCodecInfo.d.ts" />
/// <reference path="./android.media.MediaCrypto.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />

declare module android {
	export module media {
		export class MediaCodec {
			public static createDecoderByType(param0: string): android.media.MediaCodec;
			public static createEncoderByType(param0: string): android.media.MediaCodec;
			public static createByCodecName(param0: string): android.media.MediaCodec;
			public finalize(): void;
			public reset(): void;
			public release(): void;
			public configure(param0: android.media.MediaFormat, param1: android.view.Surface, param2: android.media.MediaCrypto, param3: number): void;
			public setOutputSurface(param0: android.view.Surface): void;
			public static createPersistentInputSurface(): android.view.Surface;
			public setInputSurface(param0: android.view.Surface): void;
			public createInputSurface(): android.view.Surface;
			public start(): void;
			public stop(): void;
			public flush(): void;
			public queueInputBuffer(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public queueSecureInputBuffer(param0: number, param1: number, param2: android.media.MediaCodec.CryptoInfo, param3: number, param4: number): void;
			public dequeueInputBuffer(param0: number): number;
			public dequeueOutputBuffer(param0: android.media.MediaCodec.BufferInfo, param1: number): number;
			public releaseOutputBuffer(param0: number, param1: boolean): void;
			public releaseOutputBuffer(param0: number, param1: number): void;
			public signalEndOfInputStream(): void;
			public getOutputFormat(): android.media.MediaFormat;
			public getInputFormat(): android.media.MediaFormat;
			public getOutputFormat(param0: number): android.media.MediaFormat;
			public getInputBuffers(): native.Array<java.nio.ByteBuffer>;
			public getOutputBuffers(): native.Array<java.nio.ByteBuffer>;
			public getInputBuffer(param0: number): java.nio.ByteBuffer;
			public getInputImage(param0: number): android.media.Image;
			public getOutputBuffer(param0: number): java.nio.ByteBuffer;
			public getOutputImage(param0: number): android.media.Image;
			public setVideoScalingMode(param0: number): void;
			public getName(): string;
			public setParameters(param0: android.os.Bundle): void;
			public setCallback(param0: android.media.MediaCodec.Callback, param1: android.os.Handler): void;
			public setCallback(param0: android.media.MediaCodec.Callback): void;
			public setOnFrameRenderedListener(param0: android.media.MediaCodec.OnFrameRenderedListener, param1: android.os.Handler): void;
			public getCodecInfo(): android.media.MediaCodecInfo;
			public static BUFFER_FLAG_CODEC_CONFIG: number;
			public static BUFFER_FLAG_END_OF_STREAM: number;
			public static BUFFER_FLAG_KEY_FRAME: number;
			public static BUFFER_FLAG_SYNC_FRAME: number;
			public static CONFIGURE_FLAG_ENCODE: number;
			public static CRYPTO_MODE_AES_CTR: number;
			public static CRYPTO_MODE_UNENCRYPTED: number;
			public static INFO_OUTPUT_BUFFERS_CHANGED: number;
			public static INFO_OUTPUT_FORMAT_CHANGED: number;
			public static INFO_TRY_AGAIN_LATER: number;
			public static PARAMETER_KEY_REQUEST_SYNC_FRAME: string;
			public static PARAMETER_KEY_SUSPEND: string;
			public static PARAMETER_KEY_VIDEO_BITRATE: string;
			public static VIDEO_SCALING_MODE_SCALE_TO_FIT: number;
			public static VIDEO_SCALING_MODE_SCALE_TO_FIT_WITH_CROPPING: number;
		}
		export module MediaCodec {
			export class BufferInfo {
				public constructor();
				public set(param0: number, param1: number, param2: number, param3: number): void;
				public flags: number;
				public offset: number;
				public presentationTimeUs: number;
				public size: number;
			}
			export class Callback {
				public constructor();
				public onInputBufferAvailable(param0: android.media.MediaCodec, param1: number): void;
				public onOutputBufferAvailable(param0: android.media.MediaCodec, param1: number, param2: android.media.MediaCodec.BufferInfo): void;
				public onError(param0: android.media.MediaCodec, param1: android.media.MediaCodec.CodecException): void;
				public onOutputFormatChanged(param0: android.media.MediaCodec, param1: android.media.MediaFormat): void;
			}
			export class CodecException {
				public isTransient(): boolean;
				public isRecoverable(): boolean;
				public getErrorCode(): number;
				public getDiagnosticInfo(): string;
				public static ERROR_INSUFFICIENT_RESOURCE: number;
				public static ERROR_RECLAIMED: number;
			}
			export class CryptoException {
				public constructor();
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: number, param1: string);
				public getErrorCode(): number;
				public static ERROR_INSUFFICIENT_OUTPUT_PROTECTION: number;
				public static ERROR_KEY_EXPIRED: number;
				public static ERROR_NO_KEY: number;
				public static ERROR_RESOURCE_BUSY: number;
				public static ERROR_SESSION_NOT_OPENED: number;
			}
			export class CryptoInfo {
				public constructor();
				public set(param0: number, param1: native.Array<number>, param2: native.Array<number>, param3: native.Array<number>, param4: native.Array<number>, param5: number): void;
				public toString(): string;
				public iv: native.Array<number>;
				public key: native.Array<number>;
				public mode: number;
				public numBytesOfClearData: native.Array<number>;
				public numBytesOfEncryptedData: native.Array<number>;
				public numSubSamples: number;
			}
			export class OnFrameRenderedListener {
				public onFrameRendered(param0: android.media.MediaCodec, param1: number, param2: number): void;
			}
		}
	}
}
