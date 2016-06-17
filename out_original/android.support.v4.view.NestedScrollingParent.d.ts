/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class NestedScrollingParent {
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public getNestedScrollAxes(): number;
				}
			}
		}
	}
}
