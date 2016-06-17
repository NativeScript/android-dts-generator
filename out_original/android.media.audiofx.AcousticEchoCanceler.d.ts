/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export module audiofx {
			export class AcousticEchoCanceler {
				public static isAvailable(): boolean;
				public static create(param0: number): android.media.audiofx.AcousticEchoCanceler;
			}
		}
	}
}
