/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class VolumeProviderCompat {
					public constructor();
					public constructor(param0: number, param1: number, param2: number);
					public getCurrentVolume(): number;
					public getVolumeControl(): number;
					public getMaxVolume(): number;
					public setCurrentVolume(param0: number): void;
					public onSetVolumeTo(param0: number): void;
					public onAdjustVolume(param0: number): void;
					public setCallback(param0: android.support.v4.media.VolumeProviderCompat.Callback): void;
					public getVolumeProvider(): java.lang.Object;
					public static VOLUME_CONTROL_FIXED: number;
					public static VOLUME_CONTROL_RELATIVE: number;
					public static VOLUME_CONTROL_ABSOLUTE: number;
				}
				export module VolumeProviderCompat {
					export class Callback {
						public constructor();
						public onVolumeChanged(param0: android.support.v4.media.VolumeProviderCompat): void;
					}
					export class ControlType {
					}
				}
			}
		}
	}
}
