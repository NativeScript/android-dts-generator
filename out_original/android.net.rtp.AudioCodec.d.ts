/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export module rtp {
			export class AudioCodec {
				public static getCodecs(): native.Array<android.net.rtp.AudioCodec>;
				public static getCodec(param0: number, param1: string, param2: string): android.net.rtp.AudioCodec;
				public static AMR: android.net.rtp.AudioCodec;
				public static GSM: android.net.rtp.AudioCodec;
				public static GSM_EFR: android.net.rtp.AudioCodec;
				public static PCMA: android.net.rtp.AudioCodec;
				public static PCMU: android.net.rtp.AudioCodec;
				public fmtp: string;
				public rtpmap: string;
				public type: number;
			}
		}
	}
}
