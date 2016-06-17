/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class TransportPerformer {
					public constructor();
					public onStart(): void;
					public onPause(): void;
					public onStop(): void;
					public onGetDuration(): number;
					public onGetCurrentPosition(): number;
					public onSeekTo(param0: number): void;
					public onIsPlaying(): boolean;
					public onGetBufferPercentage(): number;
					public onGetTransportControlFlags(): number;
					public onMediaButtonDown(param0: number, param1: android.view.KeyEvent): boolean;
					public onMediaButtonUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onAudioFocusChange(param0: number): void;
				}
			}
		}
	}
}
