/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class NestedScrollingChildHelper {
					public constructor();
					public constructor(param0: android.view.View);
					public setNestedScrollingEnabled(param0: boolean): void;
					public isNestedScrollingEnabled(): boolean;
					public hasNestedScrollingParent(): boolean;
					public startNestedScroll(param0: number): boolean;
					public stopNestedScroll(): void;
					public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
					public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
					public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
					public dispatchNestedPreFling(param0: number, param1: number): boolean;
					public onDetachedFromWindow(): void;
					public onStopNestedScroll(param0: android.view.View): void;
				}
			}
		}
	}
}
