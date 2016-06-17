/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class ActivityOptionsCompatJB {
					public static makeCustomAnimation(param0: android.content.Context, param1: number, param2: number): android.support.v4.app.ActivityOptionsCompatJB;
					public static makeScaleUpAnimation(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): android.support.v4.app.ActivityOptionsCompatJB;
					public static makeThumbnailScaleUpAnimation(param0: android.view.View, param1: android.graphics.Bitmap, param2: number, param3: number): android.support.v4.app.ActivityOptionsCompatJB;
					public toBundle(): android.os.Bundle;
					public update(param0: android.support.v4.app.ActivityOptionsCompatJB): void;
				}
			}
		}
	}
}
