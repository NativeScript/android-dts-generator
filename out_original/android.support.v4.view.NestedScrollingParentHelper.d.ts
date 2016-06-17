/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class NestedScrollingParentHelper {
					public constructor();
					public constructor(param0: android.view.ViewGroup);
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public getNestedScrollAxes(): number;
					public onStopNestedScroll(param0: android.view.View): void;
				}
			}
		}
	}
}
