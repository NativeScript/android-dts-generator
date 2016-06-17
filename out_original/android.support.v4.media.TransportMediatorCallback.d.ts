/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class TransportMediatorCallback {
					public handleKey(param0: android.view.KeyEvent): void;
					public handleAudioFocusChange(param0: number): void;
					public getPlaybackPosition(): number;
					public playbackPositionUpdate(param0: number): void;
				}
			}
		}
	}
}
