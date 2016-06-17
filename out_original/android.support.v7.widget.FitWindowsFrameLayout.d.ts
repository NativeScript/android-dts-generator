/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class FitWindowsFrameLayout {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setOnFitSystemWindowsListener(param0: android.support.v7.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
					public fitSystemWindows(param0: android.graphics.Rect): boolean;
				}
			}
		}
	}
}
