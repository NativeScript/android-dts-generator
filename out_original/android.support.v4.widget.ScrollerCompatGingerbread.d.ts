/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class ScrollerCompatGingerbread {
					public static createScroller(param0: android.content.Context, param1: android.view.animation.Interpolator): java.lang.Object;
					public static isFinished(param0: java.lang.Object): boolean;
					public static getCurrX(param0: java.lang.Object): number;
					public static getCurrY(param0: java.lang.Object): number;
					public static computeScrollOffset(param0: java.lang.Object): boolean;
					public static startScroll(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number): void;
					public static startScroll(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public static fling(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
					public static fling(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number): void;
					public static abortAnimation(param0: java.lang.Object): void;
					public static notifyHorizontalEdgeReached(param0: java.lang.Object, param1: number, param2: number, param3: number): void;
					public static notifyVerticalEdgeReached(param0: java.lang.Object, param1: number, param2: number, param3: number): void;
					public static isOverScrolled(param0: java.lang.Object): boolean;
					public static getFinalX(param0: java.lang.Object): number;
					public static getFinalY(param0: java.lang.Object): number;
					public static springBack(param0: java.lang.Object, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): boolean;
				}
			}
		}
	}
}
