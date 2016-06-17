/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class ActivityCompatJB {
					public static startActivity(param0: android.content.Context, param1: android.content.Intent, param2: android.os.Bundle): void;
					public static startActivityForResult(param0: android.app.Activity, param1: android.content.Intent, param2: number, param3: android.os.Bundle): void;
					public static finishAffinity(param0: android.app.Activity): void;
				}
			}
		}
	}
}
