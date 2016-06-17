/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ScaleGestureDetectorCompat {
					public static setQuickScaleEnabled(param0: java.lang.Object, param1: boolean): void;
					public static isQuickScaleEnabled(param0: java.lang.Object): boolean;
				}
				export module ScaleGestureDetectorCompat {
					export class BaseScaleGestureDetectorImpl {
						public setQuickScaleEnabled(param0: java.lang.Object, param1: boolean): void;
						public isQuickScaleEnabled(param0: java.lang.Object): boolean;
					}
					export class ScaleGestureDetectorCompatKitKatImpl {
						public setQuickScaleEnabled(param0: java.lang.Object, param1: boolean): void;
						public isQuickScaleEnabled(param0: java.lang.Object): boolean;
					}
					export class ScaleGestureDetectorImpl {
						public setQuickScaleEnabled(param0: java.lang.Object, param1: boolean): void;
						public isQuickScaleEnabled(param0: java.lang.Object): boolean;
					}
				}
			}
		}
	}
}
