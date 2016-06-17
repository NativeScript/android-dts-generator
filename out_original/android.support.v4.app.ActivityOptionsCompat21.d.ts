/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class ActivityOptionsCompat21 {
					public static makeSceneTransitionAnimation(param0: android.app.Activity, param1: android.view.View, param2: string): android.support.v4.app.ActivityOptionsCompat21;
					public static makeSceneTransitionAnimation(param0: android.app.Activity, param1: native.Array<android.view.View>, param2: native.Array<string>): android.support.v4.app.ActivityOptionsCompat21;
					public toBundle(): android.os.Bundle;
					public update(param0: android.support.v4.app.ActivityOptionsCompat21): void;
				}
			}
		}
	}
}
