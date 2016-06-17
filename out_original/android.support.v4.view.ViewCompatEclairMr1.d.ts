/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewCompatEclairMr1 {
					public static isOpaque(param0: android.view.View): boolean;
					public static setChildrenDrawingOrderEnabled(param0: android.view.ViewGroup, param1: boolean): void;
					public static TAG: string;
				}
			}
		}
	}
}
