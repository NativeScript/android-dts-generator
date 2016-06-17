/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.MediaDataSource.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module media {
		export class MediaExtractor {
			public constructor();
			public setDataSource(param0: android.media.MediaDataSource): void;
			public setDataSource(param0: android.content.Context, param1: android.net.Uri, param2: java.util.Map): void;
			public setDataSource(param0: string, param1: java.util.Map): void;
			public setDataSource(param0: string): void;
			public setDataSource(param0: java.io.FileDescriptor): void;
			public setDataSource(param0: java.io.FileDescriptor, param1: number, param2: number): void;
			public finalize(): void;
			public release(): void;
			public getTrackCount(): number;
			public getPsshInfo(): java.util.Map;
			public getTrackFormat(param0: number): android.media.MediaFormat;
			public selectTrack(param0: number): void;
			public unselectTrack(param0: number): void;
			public seekTo(param0: number, param1: number): void;
			public advance(): boolean;
			public readSampleData(param0: java.nio.ByteBuffer, param1: number): number;
			public getSampleTrackIndex(): number;
			public getSampleTime(): number;
			public getSampleFlags(): number;
			public getSampleCryptoInfo(param0: android.media.MediaCodec.CryptoInfo): boolean;
			public getCachedDuration(): number;
			public hasCacheReachedEndOfStream(): boolean;
			public static SAMPLE_FLAG_ENCRYPTED: number;
			public static SAMPLE_FLAG_SYNC: number;
			public static SEEK_TO_CLOSEST_SYNC: number;
			public static SEEK_TO_NEXT_SYNC: number;
			public static SEEK_TO_PREVIOUS_SYNC: number;
		}
	}
}
