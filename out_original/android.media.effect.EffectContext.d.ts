/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.effect.EffectFactory.d.ts" />

declare module android {
	export module media {
		export module effect {
			export class EffectContext {
				public static createWithCurrentGlContext(): android.media.effect.EffectContext;
				public getFactory(): android.media.effect.EffectFactory;
				public release(): void;
			}
		}
	}
}
