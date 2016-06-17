/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewGroupCompatHC {
					public static setMotionEventSplittingEnabled(param0: android.view.ViewGroup, param1: boolean): void;
				}
			}
		}
	}
}
