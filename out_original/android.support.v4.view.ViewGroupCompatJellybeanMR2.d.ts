/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewGroupCompatJellybeanMR2 {
					public static getLayoutMode(param0: android.view.ViewGroup): number;
					public static setLayoutMode(param0: android.view.ViewGroup, param1: number): void;
				}
			}
		}
	}
}
