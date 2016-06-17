/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.media.TransportStateListener.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class TransportController {
					public constructor();
					public registerStateListener(param0: android.support.v4.media.TransportStateListener): void;
					public unregisterStateListener(param0: android.support.v4.media.TransportStateListener): void;
					public startPlaying(): void;
					public pausePlaying(): void;
					public stopPlaying(): void;
					public getDuration(): number;
					public getCurrentPosition(): number;
					public seekTo(param0: number): void;
					public isPlaying(): boolean;
					public getBufferPercentage(): number;
					public getTransportControlFlags(): number;
				}
			}
		}
	}
}
