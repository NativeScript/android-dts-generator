/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class VolumeProviderCompatApi21 {
					public static createVolumeProvider(param0: number, param1: number, param2: number, param3: android.support.v4.media.VolumeProviderCompatApi21.Delegate): java.lang.Object;
					public static setCurrentVolume(param0: java.lang.Object, param1: number): void;
				}
				export module VolumeProviderCompatApi21 {
					export class Delegate {
						public onSetVolumeTo(param0: number): void;
						public onAdjustVolume(param0: number): void;
					}
				}
			}
		}
	}
}
