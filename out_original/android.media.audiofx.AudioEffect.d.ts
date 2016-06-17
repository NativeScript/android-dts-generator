/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />

declare module android {
	export module media {
		export module audiofx {
			export class AudioEffect {
				public release(): void;
				public finalize(): void;
				public getDescriptor(): android.media.audiofx.AudioEffect.Descriptor;
				public static queryEffects(): native.Array<android.media.audiofx.AudioEffect.Descriptor>;
				public setEnabled(param0: boolean): number;
				public getId(): number;
				public getEnabled(): boolean;
				public hasControl(): boolean;
				public setEnableStatusListener(param0: android.media.audiofx.AudioEffect.OnEnableStatusChangeListener): void;
				public setControlStatusListener(param0: android.media.audiofx.AudioEffect.OnControlStatusChangeListener): void;
				public static ACTION_CLOSE_AUDIO_EFFECT_CONTROL_SESSION: string;
				public static ACTION_DISPLAY_AUDIO_EFFECT_CONTROL_PANEL: string;
				public static ACTION_OPEN_AUDIO_EFFECT_CONTROL_SESSION: string;
				public static ALREADY_EXISTS: number;
				public static CONTENT_TYPE_GAME: number;
				public static CONTENT_TYPE_MOVIE: number;
				public static CONTENT_TYPE_MUSIC: number;
				public static CONTENT_TYPE_VOICE: number;
				public static EFFECT_AUXILIARY: string;
				public static EFFECT_INSERT: string;
				public static EFFECT_TYPE_AEC: java.util.UUID;
				public static EFFECT_TYPE_AGC: java.util.UUID;
				public static EFFECT_TYPE_BASS_BOOST: java.util.UUID;
				public static EFFECT_TYPE_ENV_REVERB: java.util.UUID;
				public static EFFECT_TYPE_EQUALIZER: java.util.UUID;
				public static EFFECT_TYPE_LOUDNESS_ENHANCER: java.util.UUID;
				public static EFFECT_TYPE_NS: java.util.UUID;
				public static EFFECT_TYPE_PRESET_REVERB: java.util.UUID;
				public static EFFECT_TYPE_VIRTUALIZER: java.util.UUID;
				public static ERROR: number;
				public static ERROR_BAD_VALUE: number;
				public static ERROR_DEAD_OBJECT: number;
				public static ERROR_INVALID_OPERATION: number;
				public static ERROR_NO_INIT: number;
				public static ERROR_NO_MEMORY: number;
				public static EXTRA_AUDIO_SESSION: string;
				public static EXTRA_CONTENT_TYPE: string;
				public static EXTRA_PACKAGE_NAME: string;
				public static SUCCESS: number;
			}
			export module AudioEffect {
				export class Descriptor {
					public constructor();
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
					public connectMode: string;
					public implementor: string;
					public name: string;
					public type: java.util.UUID;
					public uuid: java.util.UUID;
				}
				export class OnControlStatusChangeListener {
					public onControlStatusChange(param0: android.media.audiofx.AudioEffect, param1: boolean): void;
				}
				export class OnEnableStatusChangeListener {
					public onEnableStatusChange(param0: android.media.audiofx.AudioEffect, param1: boolean): void;
				}
			}
		}
	}
}
