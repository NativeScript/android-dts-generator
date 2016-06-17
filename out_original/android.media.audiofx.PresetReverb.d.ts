/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export module audiofx {
			export class PresetReverb {
				public constructor();
				public constructor(param0: number, param1: number);
				public setPreset(param0: number): void;
				public getPreset(): number;
				public setParameterListener(param0: android.media.audiofx.PresetReverb.OnParameterChangeListener): void;
				public getProperties(): android.media.audiofx.PresetReverb.Settings;
				public setProperties(param0: android.media.audiofx.PresetReverb.Settings): void;
				public static PARAM_PRESET: number;
				public static PRESET_LARGEHALL: number;
				public static PRESET_LARGEROOM: number;
				public static PRESET_MEDIUMHALL: number;
				public static PRESET_MEDIUMROOM: number;
				public static PRESET_NONE: number;
				public static PRESET_PLATE: number;
				public static PRESET_SMALLROOM: number;
			}
			export module PresetReverb {
				export class OnParameterChangeListener {
					public onParameterChange(param0: android.media.audiofx.PresetReverb, param1: number, param2: number, param3: number): void;
				}
				export class Settings {
					public constructor();
					public constructor(param0: string);
					public toString(): string;
					public preset: number;
				}
			}
		}
	}
}
