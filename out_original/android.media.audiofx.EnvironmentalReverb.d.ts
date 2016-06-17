/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export module audiofx {
			export class EnvironmentalReverb {
				public constructor();
				public constructor(param0: number, param1: number);
				public setRoomLevel(param0: number): void;
				public getRoomLevel(): number;
				public setRoomHFLevel(param0: number): void;
				public getRoomHFLevel(): number;
				public setDecayTime(param0: number): void;
				public getDecayTime(): number;
				public setDecayHFRatio(param0: number): void;
				public getDecayHFRatio(): number;
				public setReflectionsLevel(param0: number): void;
				public getReflectionsLevel(): number;
				public setReflectionsDelay(param0: number): void;
				public getReflectionsDelay(): number;
				public setReverbLevel(param0: number): void;
				public getReverbLevel(): number;
				public setReverbDelay(param0: number): void;
				public getReverbDelay(): number;
				public setDiffusion(param0: number): void;
				public getDiffusion(): number;
				public setDensity(param0: number): void;
				public getDensity(): number;
				public setParameterListener(param0: android.media.audiofx.EnvironmentalReverb.OnParameterChangeListener): void;
				public getProperties(): android.media.audiofx.EnvironmentalReverb.Settings;
				public setProperties(param0: android.media.audiofx.EnvironmentalReverb.Settings): void;
				public static PARAM_DECAY_HF_RATIO: number;
				public static PARAM_DECAY_TIME: number;
				public static PARAM_DENSITY: number;
				public static PARAM_DIFFUSION: number;
				public static PARAM_REFLECTIONS_DELAY: number;
				public static PARAM_REFLECTIONS_LEVEL: number;
				public static PARAM_REVERB_DELAY: number;
				public static PARAM_REVERB_LEVEL: number;
				public static PARAM_ROOM_HF_LEVEL: number;
				public static PARAM_ROOM_LEVEL: number;
			}
			export module EnvironmentalReverb {
				export class OnParameterChangeListener {
					public onParameterChange(param0: android.media.audiofx.EnvironmentalReverb, param1: number, param2: number, param3: number): void;
				}
				export class Settings {
					public constructor();
					public constructor(param0: string);
					public toString(): string;
					public decayHFRatio: number;
					public decayTime: number;
					public density: number;
					public diffusion: number;
					public reflectionsDelay: number;
					public reflectionsLevel: number;
					public reverbDelay: number;
					public reverbLevel: number;
					public roomHFLevel: number;
					public roomLevel: number;
				}
			}
		}
	}
}
