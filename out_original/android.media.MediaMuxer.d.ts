/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />

declare module android {
	export module media {
		export class MediaMuxer {
			public constructor();
			public constructor(param0: string, param1: number);
			public setOrientationHint(param0: number): void;
			public setLocation(param0: number, param1: number): void;
			public start(): void;
			public stop(): void;
			public finalize(): void;
			public addTrack(param0: android.media.MediaFormat): number;
			public writeSampleData(param0: number, param1: java.nio.ByteBuffer, param2: android.media.MediaCodec.BufferInfo): void;
			public release(): void;
		}
		export module MediaMuxer {
			export class OutputFormat {
				public static MUXER_OUTPUT_MPEG_4: number;
				public static MUXER_OUTPUT_WEBM: number;
			}
		}
	}
}
