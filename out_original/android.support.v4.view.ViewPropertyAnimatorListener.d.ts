/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewPropertyAnimatorListener {
					public onAnimationStart(param0: android.view.View): void;
					public onAnimationEnd(param0: android.view.View): void;
					public onAnimationCancel(param0: android.view.View): void;
				}
			}
		}
	}
}
