/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class AutoScrollHelper {
					public constructor();
					public constructor(param0: android.view.View);
					public setEnabled(param0: boolean): android.support.v4.widget.AutoScrollHelper;
					public isEnabled(): boolean;
					public setExclusive(param0: boolean): android.support.v4.widget.AutoScrollHelper;
					public isExclusive(): boolean;
					public setMaximumVelocity(param0: number, param1: number): android.support.v4.widget.AutoScrollHelper;
					public setMinimumVelocity(param0: number, param1: number): android.support.v4.widget.AutoScrollHelper;
					public setRelativeVelocity(param0: number, param1: number): android.support.v4.widget.AutoScrollHelper;
					public setEdgeType(param0: number): android.support.v4.widget.AutoScrollHelper;
					public setRelativeEdges(param0: number, param1: number): android.support.v4.widget.AutoScrollHelper;
					public setMaximumEdges(param0: number, param1: number): android.support.v4.widget.AutoScrollHelper;
					public setActivationDelay(param0: number): android.support.v4.widget.AutoScrollHelper;
					public setRampUpDuration(param0: number): android.support.v4.widget.AutoScrollHelper;
					public setRampDownDuration(param0: number): android.support.v4.widget.AutoScrollHelper;
					public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
					public scrollTargetBy(param0: number, param1: number): void;
					public canTargetScrollHorizontally(param0: number): boolean;
					public canTargetScrollVertically(param0: number): boolean;
					public static RELATIVE_UNSPECIFIED: number;
					public static NO_MAX: number;
					public static NO_MIN: number;
					public static EDGE_TYPE_INSIDE: number;
					public static EDGE_TYPE_INSIDE_EXTEND: number;
					public static EDGE_TYPE_OUTSIDE: number;
				}
				export module AutoScrollHelper {
					export class ClampedScroller {
						public constructor();
						public setRampUpDuration(param0: number): void;
						public setRampDownDuration(param0: number): void;
						public start(): void;
						public requestStop(): void;
						public isFinished(): boolean;
						public computeScrollDelta(): void;
						public setTargetVelocity(param0: number, param1: number): void;
						public getHorizontalDirection(): number;
						public getVerticalDirection(): number;
						public getDeltaX(): number;
						public getDeltaY(): number;
					}
					export class ScrollAnimationRunnable {
						public run(): void;
					}
				}
			}
		}
	}
}
