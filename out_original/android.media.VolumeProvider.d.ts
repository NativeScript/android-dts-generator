/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export class VolumeProvider {
			public constructor();
			public constructor(param0: number, param1: number, param2: number);
			public getVolumeControl(): number;
			public getMaxVolume(): number;
			public getCurrentVolume(): number;
			public setCurrentVolume(param0: number): void;
			public onSetVolumeTo(param0: number): void;
			public onAdjustVolume(param0: number): void;
			public static VOLUME_CONTROL_ABSOLUTE: number;
			public static VOLUME_CONTROL_FIXED: number;
			public static VOLUME_CONTROL_RELATIVE: number;
		}
	}
}
