/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewPropertyAnimatorUpdateListener {
					public onAnimationUpdate(param0: android.view.View): void;
				}
			}
		}
	}
}
