/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />

declare module android {
	export module view {
		export class VelocityTracker {
			public static obtain(): android.view.VelocityTracker;
			public recycle(): void;
			public finalize(): void;
			public clear(): void;
			public addMovement(param0: android.view.MotionEvent): void;
			public computeCurrentVelocity(param0: number): void;
			public computeCurrentVelocity(param0: number, param1: number): void;
			public getXVelocity(): number;
			public getYVelocity(): number;
			public getXVelocity(param0: number): number;
			public getYVelocity(param0: number): number;
		}
	}
}
