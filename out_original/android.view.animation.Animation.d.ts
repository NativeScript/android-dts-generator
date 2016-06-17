/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./android.view.animation.Transformation.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module view {
		export module animation {
			export class Animation {
				public constructor();
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public clone(): java.lang.Object;
				public clone(): android.view.animation.Animation;
				public reset(): void;
				public cancel(): void;
				public isInitialized(): boolean;
				public initialize(param0: number, param1: number, param2: number, param3: number): void;
				public setInterpolator(param0: android.content.Context, param1: number): void;
				public setInterpolator(param0: android.view.animation.Interpolator): void;
				public setStartOffset(param0: number): void;
				public setDuration(param0: number): void;
				public restrictDuration(param0: number): void;
				public scaleCurrentDuration(param0: number): void;
				public setStartTime(param0: number): void;
				public start(): void;
				public startNow(): void;
				public setRepeatMode(param0: number): void;
				public setRepeatCount(param0: number): void;
				public isFillEnabled(): boolean;
				public setFillEnabled(param0: boolean): void;
				public setFillBefore(param0: boolean): void;
				public setFillAfter(param0: boolean): void;
				public setZAdjustment(param0: number): void;
				public setBackgroundColor(param0: number): void;
				public getScaleFactor(): number;
				public setDetachWallpaper(param0: boolean): void;
				public getInterpolator(): android.view.animation.Interpolator;
				public getStartTime(): number;
				public getDuration(): number;
				public getStartOffset(): number;
				public getRepeatMode(): number;
				public getRepeatCount(): number;
				public getFillBefore(): boolean;
				public getFillAfter(): boolean;
				public getZAdjustment(): number;
				public getBackgroundColor(): number;
				public getDetachWallpaper(): boolean;
				public willChangeTransformationMatrix(): boolean;
				public willChangeBounds(): boolean;
				public setAnimationListener(param0: android.view.animation.Animation.AnimationListener): void;
				public ensureInterpolator(): void;
				public computeDurationHint(): number;
				public getTransformation(param0: number, param1: android.view.animation.Transformation): boolean;
				public getTransformation(param0: number, param1: android.view.animation.Transformation, param2: number): boolean;
				public hasStarted(): boolean;
				public hasEnded(): boolean;
				public applyTransformation(param0: number, param1: android.view.animation.Transformation): void;
				public resolveSize(param0: number, param1: number, param2: number, param3: number): number;
				public finalize(): void;
				public static ABSOLUTE: number;
				public static INFINITE: number;
				public static RELATIVE_TO_PARENT: number;
				public static RELATIVE_TO_SELF: number;
				public static RESTART: number;
				public static REVERSE: number;
				public static START_ON_FIRST_FRAME: number;
				public static ZORDER_BOTTOM: number;
				public static ZORDER_NORMAL: number;
				public static ZORDER_TOP: number;
			}
			export module Animation {
				export class AnimationListener {
					public onAnimationStart(param0: android.view.animation.Animation): void;
					public onAnimationEnd(param0: android.view.animation.Animation): void;
					public onAnimationRepeat(param0: android.view.animation.Animation): void;
				}
				export class Description {
					public constructor();
					public type: number;
					public value: number;
				}
			}
		}
	}
}
