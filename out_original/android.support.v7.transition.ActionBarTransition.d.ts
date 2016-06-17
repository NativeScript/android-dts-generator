/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module transition {
				export class ActionBarTransition {
					public constructor();
					public static beginDelayedTransition(param0: android.view.ViewGroup): void;
				}
			}
		}
	}
}
