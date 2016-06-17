/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewGroupCompatLollipop {
					public static setTransitionGroup(param0: android.view.ViewGroup, param1: boolean): void;
					public static isTransitionGroup(param0: android.view.ViewGroup): boolean;
					public static getNestedScrollAxes(param0: android.view.ViewGroup): number;
				}
			}
		}
	}
}
