/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class Animatable2 {
				public registerAnimationCallback(param0: android.graphics.drawable.Animatable2.AnimationCallback): void;
				public unregisterAnimationCallback(param0: android.graphics.drawable.Animatable2.AnimationCallback): boolean;
				public clearAnimationCallbacks(): void;
			}
			export module Animatable2 {
				export class AnimationCallback {
					public constructor();
					public onAnimationStart(param0: android.graphics.drawable.Drawable): void;
					public onAnimationEnd(param0: android.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}
