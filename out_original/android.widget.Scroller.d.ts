/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />

declare module android {
	export module widget {
		export class Scroller {
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.view.animation.Interpolator);
			public constructor(param0: android.content.Context, param1: android.view.animation.Interpolator, param2: boolean);
			public setFriction(param0: number): void;
			public isFinished(): boolean;
			public forceFinished(param0: boolean): void;
			public getDuration(): number;
			public getCurrX(): number;
			public getCurrY(): number;
			public getCurrVelocity(): number;
			public getStartX(): number;
			public getStartY(): number;
			public getFinalX(): number;
			public getFinalY(): number;
			public computeScrollOffset(): boolean;
			public startScroll(param0: number, param1: number, param2: number, param3: number): void;
			public startScroll(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public fling(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public abortAnimation(): void;
			public extendDuration(param0: number): void;
			public timePassed(): number;
			public setFinalX(param0: number): void;
			public setFinalY(param0: number): void;
		}
	}
}
