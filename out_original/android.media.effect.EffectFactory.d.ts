/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.effect.Effect.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export module effect {
			export class EffectFactory {
				public createEffect(param0: string): android.media.effect.Effect;
				public static isEffectSupported(param0: string): boolean;
				public static EFFECT_AUTOFIX: string;
				public static EFFECT_BACKDROPPER: string;
				public static EFFECT_BITMAPOVERLAY: string;
				public static EFFECT_BLACKWHITE: string;
				public static EFFECT_BRIGHTNESS: string;
				public static EFFECT_CONTRAST: string;
				public static EFFECT_CROP: string;
				public static EFFECT_CROSSPROCESS: string;
				public static EFFECT_DOCUMENTARY: string;
				public static EFFECT_DUOTONE: string;
				public static EFFECT_FILLLIGHT: string;
				public static EFFECT_FISHEYE: string;
				public static EFFECT_FLIP: string;
				public static EFFECT_GRAIN: string;
				public static EFFECT_GRAYSCALE: string;
				public static EFFECT_LOMOISH: string;
				public static EFFECT_NEGATIVE: string;
				public static EFFECT_POSTERIZE: string;
				public static EFFECT_REDEYE: string;
				public static EFFECT_ROTATE: string;
				public static EFFECT_SATURATE: string;
				public static EFFECT_SEPIA: string;
				public static EFFECT_SHARPEN: string;
				public static EFFECT_STRAIGHTEN: string;
				public static EFFECT_TEMPERATURE: string;
				public static EFFECT_TINT: string;
				public static EFFECT_VIGNETTE: string;
			}
		}
	}
}
