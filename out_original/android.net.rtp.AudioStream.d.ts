/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.rtp.AudioCodec.d.ts" />
/// <reference path="./android.net.rtp.AudioGroup.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />

declare module android {
	export module net {
		export module rtp {
			export class AudioStream {
				public constructor();
				public constructor(param0: java.net.InetAddress);
				public isBusy(): boolean;
				public getGroup(): android.net.rtp.AudioGroup;
				public join(param0: android.net.rtp.AudioGroup): void;
				public getCodec(): android.net.rtp.AudioCodec;
				public setCodec(param0: android.net.rtp.AudioCodec): void;
				public getDtmfType(): number;
				public setDtmfType(param0: number): void;
			}
		}
	}
}
