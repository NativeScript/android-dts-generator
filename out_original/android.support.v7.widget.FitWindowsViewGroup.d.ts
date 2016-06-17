/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class FitWindowsViewGroup {
					public setOnFitSystemWindowsListener(param0: android.support.v7.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				}
				export module FitWindowsViewGroup {
					export class OnFitSystemWindowsListener {
						public onFitSystemWindows(param0: android.graphics.Rect): void;
					}
				}
			}
		}
	}
}
