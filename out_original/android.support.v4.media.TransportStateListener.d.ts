/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.media.TransportController.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class TransportStateListener {
					public constructor();
					public onPlayingChanged(param0: android.support.v4.media.TransportController): void;
					public onTransportControlsChanged(param0: android.support.v4.media.TransportController): void;
				}
			}
		}
	}
}
