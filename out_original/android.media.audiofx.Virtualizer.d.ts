/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export module audiofx {
			export class Virtualizer {
				public constructor();
				public constructor(param0: number, param1: number);
				public getStrengthSupported(): boolean;
				public setStrength(param0: number): void;
				public getRoundedStrength(): number;
				public canVirtualize(param0: number, param1: number): boolean;
				public getSpeakerAngles(param0: number, param1: number, param2: native.Array<number>): boolean;
				public forceVirtualizationMode(param0: number): boolean;
				public getVirtualizationMode(): number;
				public setParameterListener(param0: android.media.audiofx.Virtualizer.OnParameterChangeListener): void;
				public getProperties(): android.media.audiofx.Virtualizer.Settings;
				public setProperties(param0: android.media.audiofx.Virtualizer.Settings): void;
				public static PARAM_STRENGTH: number;
				public static PARAM_STRENGTH_SUPPORTED: number;
				public static VIRTUALIZATION_MODE_AUTO: number;
				public static VIRTUALIZATION_MODE_BINAURAL: number;
				public static VIRTUALIZATION_MODE_OFF: number;
				public static VIRTUALIZATION_MODE_TRANSAURAL: number;
			}
			export module Virtualizer {
				export class OnParameterChangeListener {
					public onParameterChange(param0: android.media.audiofx.Virtualizer, param1: number, param2: number, param3: number): void;
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
