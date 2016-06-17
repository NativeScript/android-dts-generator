/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export class MediaActionSound {
			public constructor();
			public load(param0: number): void;
			public play(param0: number): void;
			public release(): void;
			public static FOCUS_COMPLETE: number;
			public static SHUTTER_CLICK: number;
			public static START_VIDEO_RECORDING: number;
			public static STOP_VIDEO_RECORDING: number;
		}
	}
}
