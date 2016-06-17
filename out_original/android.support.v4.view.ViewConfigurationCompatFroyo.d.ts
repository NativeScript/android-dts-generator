/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.ViewConfiguration.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewConfigurationCompatFroyo {
					public static getScaledPagingTouchSlop(param0: android.view.ViewConfiguration): number;
				}
			}
		}
	}
}
