/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class IntentCompatHoneycomb {
					public static makeMainActivity(param0: android.content.ComponentName): android.content.Intent;
					public static makeRestartActivityTask(param0: android.content.ComponentName): android.content.Intent;
				}
			}
		}
	}
}
