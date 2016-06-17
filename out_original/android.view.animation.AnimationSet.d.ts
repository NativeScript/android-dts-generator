/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./android.view.animation.Transformation.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module view {
		export module animation {
			export class AnimationSet {
				public constructor();
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: boolean);
				public clone(): android.view.animation.Animation;
				public clone(): java.lang.Object;
				public clone(): android.view.animation.AnimationSet;
				public setFillAfter(param0: boolean): void;
				public setFillBefore(param0: boolean): void;
				public setRepeatMode(param0: number): void;
				public setStartOffset(param0: number): void;
				public setDuration(param0: number): void;
				public addAnimation(param0: android.view.animation.Animation): void;
				public setStartTime(param0: number): void;
				public getStartTime(): number;
				public restrictDuration(param0: number): void;
				public getDuration(): number;
				public computeDurationHint(): number;
				public getTransformation(param0: number, param1: android.view.animation.Transformation, param2: number): boolean;
				public getTransformation(param0: number, param1: android.view.animation.Transformation): boolean;
				public scaleCurrentDuration(param0: number): void;
				public initialize(param0: number, param1: number, param2: number, param3: number): void;
				public reset(): void;
				public getAnimations(): java.util.List;
				public willChangeTransformationMatrix(): boolean;
				public willChangeBounds(): boolean;
			}
		}
	}
}
