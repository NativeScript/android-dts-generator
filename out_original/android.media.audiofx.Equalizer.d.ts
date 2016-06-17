/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export module audiofx {
			export class Equalizer {
				public constructor();
				public constructor(param0: number, param1: number);
				public getNumberOfBands(): number;
				public getBandLevelRange(): native.Array<number>;
				public setBandLevel(param0: number, param1: number): void;
				public getBandLevel(param0: number): number;
				public getCenterFreq(param0: number): number;
				public getBandFreqRange(param0: number): native.Array<number>;
				public getBand(param0: number): number;
				public getCurrentPreset(): number;
				public usePreset(param0: number): void;
				public getNumberOfPresets(): number;
				public getPresetName(param0: number): string;
				public setParameterListener(param0: android.media.audiofx.Equalizer.OnParameterChangeListener): void;
				public getProperties(): android.media.audiofx.Equalizer.Settings;
				public setProperties(param0: android.media.audiofx.Equalizer.Settings): void;
				public static PARAM_BAND_FREQ_RANGE: number;
				public static PARAM_BAND_LEVEL: number;
				public static PARAM_CENTER_FREQ: number;
				public static PARAM_CURRENT_PRESET: number;
				public static PARAM_GET_BAND: number;
				public static PARAM_GET_NUM_OF_PRESETS: number;
				public static PARAM_GET_PRESET_NAME: number;
				public static PARAM_LEVEL_RANGE: number;
				public static PARAM_NUM_BANDS: number;
				public static PARAM_STRING_SIZE_MAX: number;
			}
			export module Equalizer {
				export class OnParameterChangeListener {
					public onParameterChange(param0: android.media.audiofx.Equalizer, param1: number, param2: number, param3: number, param4: number): void;
				}
				export class Settings {
					public constructor();
					public constructor(param0: string);
					public toString(): string;
					public bandLevels: native.Array<number>;
					public curPreset: number;
					public numBands: number;
				}
			}
		}
	}
}
