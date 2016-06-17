/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.ViewConfiguration.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewConfigurationCompat {
					public static getScaledPagingTouchSlop(param0: android.view.ViewConfiguration): number;
					public static hasPermanentMenuKey(param0: android.view.ViewConfiguration): boolean;
				}
				export module ViewConfigurationCompat {
					export class BaseViewConfigurationVersionImpl {
						public getScaledPagingTouchSlop(param0: android.view.ViewConfiguration): number;
						public hasPermanentMenuKey(param0: android.view.ViewConfiguration): boolean;
					}
					export class FroyoViewConfigurationVersionImpl {
						public getScaledPagingTouchSlop(param0: android.view.ViewConfiguration): number;
					}
					export class HoneycombViewConfigurationVersionImpl {
						public hasPermanentMenuKey(param0: android.view.ViewConfiguration): boolean;
					}
					export class IcsViewConfigurationVersionImpl {
						public hasPermanentMenuKey(param0: android.view.ViewConfiguration): boolean;
					}
					export class ViewConfigurationVersionImpl {
						public getScaledPagingTouchSlop(param0: android.view.ViewConfiguration): number;
						public hasPermanentMenuKey(param0: android.view.ViewConfiguration): boolean;
					}
				}
			}
		}
	}
}
