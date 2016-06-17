/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class ScrollerCompat {
					public static create(param0: android.content.Context): android.support.v4.widget.ScrollerCompat;
					public static create(param0: android.content.Context, param1: android.view.animation.Interpolator): android.support.v4.widget.ScrollerCompat;
					public isFinished(): boolean;
					public getCurrX(): number;
					public getCurrY(): number;
					public getFinalX(): number;
					public getFinalY(): number;
					public getCurrVelocity(): number;
					public computeScrollOffset(): boolean;
					public startScroll(param0: number, param1: number, param2: number, param3: number): void;
					public startScroll(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public fling(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					public fling(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;
					public springBack(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
					public abortAnimation(): void;
					public notifyHorizontalEdgeReached(param0: number, param1: number, param2: number): void;
					public notifyVerticalEdgeReached(param0: number, param1: number, param2: number): void;
					public isOverScrolled(): boolean;
				}
				export module ScrollerCompat {
					export class ScrollerCompatImpl {
						public createScroller(param0: android.content.Context, param1: android.view.animation.Interpolator): java.lang.Object;
						public isFinished(param0: java.lang.Object): boolean;
						public getCurrX(param0: java.lang.Object): number;
						public getCurrY(param0: java.lang.Object): number;
						public getCurrVelocity(param0: java.lang.Object): number;
						public computeScrollOffset(param0: java.lang.Object): boolean;
						public startScroll(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number): void;
						public startScroll(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number): void;
						public fling(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
						public fling(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number): void;
						public abortAnimation(param0: java.lang.Object): void;
						public notifyHorizontalEdgeReached(param0: java.lang.Object, param1: number, param2: number, param3: number): void;
						public notifyVerticalEdgeReached(param0: java.lang.Object, param1: number, param2: number, param3: number): void;
						public isOverScrolled(param0: java.lang.Object): boolean;
						public getFinalX(param0: java.lang.Object): number;
						public getFinalY(param0: java.lang.Object): number;
						public springBack(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): boolean;
					}
					export class ScrollerCompatImplBase {
						public createScroller(param0: android.content.Context, param1: android.view.animation.Interpolator): java.lang.Object;
						public isFinished(param0: java.lang.Object): boolean;
						public getCurrX(param0: java.lang.Object): number;
						public getCurrY(param0: java.lang.Object): number;
						public getCurrVelocity(param0: java.lang.Object): number;
						public computeScrollOffset(param0: java.lang.Object): boolean;
						public startScroll(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number): void;
						public startScroll(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number): void;
						public fling(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
						public fling(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number): void;
						public abortAnimation(param0: java.lang.Object): void;
						public notifyHorizontalEdgeReached(param0: java.lang.Object, param1: number, param2: number, param3: number): void;
						public notifyVerticalEdgeReached(param0: java.lang.Object, param1: number, param2: number, param3: number): void;
						public isOverScrolled(param0: java.lang.Object): boolean;
						public getFinalX(param0: java.lang.Object): number;
						public getFinalY(param0: java.lang.Object): number;
						public springBack(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): boolean;
					}
					export class ScrollerCompatImplGingerbread {
						public createScroller(param0: android.content.Context, param1: android.view.animation.Interpolator): java.lang.Object;
						public isFinished(param0: java.lang.Object): boolean;
						public getCurrX(param0: java.lang.Object): number;
						public getCurrY(param0: java.lang.Object): number;
						public getCurrVelocity(param0: java.lang.Object): number;
						public computeScrollOffset(param0: java.lang.Object): boolean;
						public startScroll(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number): void;
						public startScroll(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number): void;
						public fling(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
						public fling(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number): void;
						public abortAnimation(param0: java.lang.Object): void;
						public notifyHorizontalEdgeReached(param0: java.lang.Object, param1: number, param2: number, param3: number): void;
						public notifyVerticalEdgeReached(param0: java.lang.Object, param1: number, param2: number, param3: number): void;
						public isOverScrolled(param0: java.lang.Object): boolean;
						public getFinalX(param0: java.lang.Object): number;
						public getFinalY(param0: java.lang.Object): number;
						public springBack(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): boolean;
					}
					export class ScrollerCompatImplIcs {
						public getCurrVelocity(param0: java.lang.Object): number;
					}
				}
			}
		}
	}
}
