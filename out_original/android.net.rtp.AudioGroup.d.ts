/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.rtp.AudioStream.d.ts" />

declare module android {
	export module net {
		export module rtp {
			export class AudioGroup {
				public constructor();
				public getStreams(): native.Array<android.net.rtp.AudioStream>;
				public getMode(): number;
				public setMode(param0: number): void;
				public sendDtmf(param0: number): void;
				public clear(): void;
				public finalize(): void;
				public static MODE_ECHO_SUPPRESSION: number;
				public static MODE_MUTED: number;
				public static MODE_NORMAL: number;
				public static MODE_ON_HOLD: number;
			}
		}
	}
}
