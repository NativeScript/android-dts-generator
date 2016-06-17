/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.effect.EffectUpdateListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export module effect {
			export class Effect {
				public constructor();
				public getName(): string;
				public apply(param0: number, param1: number, param2: number, param3: number): void;
				public setParameter(param0: string, param1: java.lang.Object): void;
				public setUpdateListener(param0: android.media.effect.EffectUpdateListener): void;
				public release(): void;
			}
		}
	}
}
