/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.effect.Effect.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module media {
		export module effect {
			export class EffectUpdateListener {
				public onEffectUpdated(param0: android.media.effect.Effect, param1: java.lang.Object): void;
			}
		}
	}
}
