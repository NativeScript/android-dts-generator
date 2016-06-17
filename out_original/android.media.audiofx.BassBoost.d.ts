/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export module audiofx {
			export class BassBoost {
				public constructor();
				public constructor(param0: number, param1: number);
				public getStrengthSupported(): boolean;
				public setStrength(param0: number): void;
				public getRoundedStrength(): number;
				public setParameterListener(param0: android.media.audiofx.BassBoost.OnParameterChangeListener): void;
				public getProperties(): android.media.audiofx.BassBoost.Settings;
				public setProperties(param0: android.media.audiofx.BassBoost.Settings): void;
				public static PARAM_STRENGTH: number;
				public static PARAM_STRENGTH_SUPPORTED: number;
			}
			export module BassBoost {
				export class OnParameterChangeListener {
					public onParameterChange(param0: android.media.audiofx.BassBoost, param1: number, param2: number, param3: number): void;
				}
				export class Settings {
					public constructor();
					public constructor(param0: string);
					public toString(): string;
					public strength: number;
				}
			}
		}
	}
}
