/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewCompatGingerbread {
					public static getOverScrollMode(param0: android.view.View): number;
					public static setOverScrollMode(param0: android.view.View, param1: number): void;
				}
			}
		}
	}
}
