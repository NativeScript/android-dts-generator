/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./java.util.Random.d.ts" />

declare module android {
	export module view {
		export module animation {
			export class LayoutAnimationController {
				public constructor();
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: android.view.animation.Animation);
				public constructor(param0: android.view.animation.Animation, param1: number);
				public getOrder(): number;
				public setOrder(param0: number): void;
				public setAnimation(param0: android.content.Context, param1: number): void;
				public setAnimation(param0: android.view.animation.Animation): void;
				public getAnimation(): android.view.animation.Animation;
				public setInterpolator(param0: android.content.Context, param1: number): void;
				public setInterpolator(param0: android.view.animation.Interpolator): void;
				public getInterpolator(): android.view.animation.Interpolator;
				public getDelay(): number;
				public setDelay(param0: number): void;
				public willOverlap(): boolean;
				public start(): void;
				public getAnimationForView(param0: android.view.View): android.view.animation.Animation;
				public isDone(): boolean;
				public getDelayForView(param0: android.view.View): number;
				public getTransformedIndex(param0: android.view.animation.LayoutAnimationController.AnimationParameters): number;
				public static ORDER_NORMAL: number;
				public static ORDER_RANDOM: number;
				public static ORDER_REVERSE: number;
				public mAnimation: android.view.animation.Animation;
				public mInterpolator: android.view.animation.Interpolator;
				public mRandomizer: java.util.Random;
			}
			export module LayoutAnimationController {
				export class AnimationParameters {
					public constructor();
					public count: number;
					public index: number;
				}
			}
		}
	}
}
