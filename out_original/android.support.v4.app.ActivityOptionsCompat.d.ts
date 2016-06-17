/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.util.Pair.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class ActivityOptionsCompat {
					public static makeCustomAnimation(param0: android.content.Context, param1: number, param2: number): android.support.v4.app.ActivityOptionsCompat;
					public static makeScaleUpAnimation(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): android.support.v4.app.ActivityOptionsCompat;
					public static makeThumbnailScaleUpAnimation(param0: android.view.View, param1: android.graphics.Bitmap, param2: number, param3: number): android.support.v4.app.ActivityOptionsCompat;
					public static makeSceneTransitionAnimation(param0: android.app.Activity, param1: android.view.View, param2: string): android.support.v4.app.ActivityOptionsCompat;
					public static makeSceneTransitionAnimation(param0: android.app.Activity, param1: native.Array<android.support.v4.util.Pair>): android.support.v4.app.ActivityOptionsCompat;
					public constructor();
					public toBundle(): android.os.Bundle;
					public update(param0: android.support.v4.app.ActivityOptionsCompat): void;
				}
				export module ActivityOptionsCompat {
					export class ActivityOptionsImpl21 {
						public toBundle(): android.os.Bundle;
						public update(param0: android.support.v4.app.ActivityOptionsCompat): void;
					}
					export class ActivityOptionsImplJB {
						public toBundle(): android.os.Bundle;
						public update(param0: android.support.v4.app.ActivityOptionsCompat): void;
					}
				}
			}
		}
	}
}
