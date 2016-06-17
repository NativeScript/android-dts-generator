/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class SwipeRefreshLayout {
					public onDetachedFromWindow(): void;
					public setProgressViewOffset(param0: boolean, param1: number, param2: number): void;
					public setProgressViewEndTarget(param0: boolean, param1: number): void;
					public setSize(param0: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getChildDrawingOrder(param0: number, param1: number): number;
					public setOnRefreshListener(param0: android.support.v4.widget.SwipeRefreshLayout.OnRefreshListener): void;
					public setRefreshing(param0: boolean): void;
					public setProgressBackgroundColor(param0: number): void;
					public setProgressBackgroundColorSchemeResource(param0: number): void;
					public setProgressBackgroundColorSchemeColor(param0: number): void;
					public setColorScheme(param0: native.Array<number>): void;
					public setColorSchemeResources(param0: native.Array<number>): void;
					public setColorSchemeColors(param0: native.Array<number>): void;
					public isRefreshing(): boolean;
					public setDistanceToTriggerSync(param0: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public onMeasure(param0: number, param1: number): void;
					public getProgressCircleDiameter(): number;
					public canChildScrollUp(): boolean;
					public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
					public getNestedScrollAxes(): number;
					public onStopNestedScroll(param0: android.view.View): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public setNestedScrollingEnabled(param0: boolean): void;
					public isNestedScrollingEnabled(): boolean;
					public startNestedScroll(param0: number): boolean;
					public stopNestedScroll(): void;
					public hasNestedScrollingParent(): boolean;
					public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
					public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
					public dispatchNestedPreFling(param0: number, param1: number): boolean;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public static LARGE: number;
					public static DEFAULT: number;
					public mFrom: number;
					public mOriginalOffsetTop: number;
				}
				export module SwipeRefreshLayout {
					export class OnRefreshListener {
						public onRefresh(): void;
					}
				}
			}
		}
	}
}
