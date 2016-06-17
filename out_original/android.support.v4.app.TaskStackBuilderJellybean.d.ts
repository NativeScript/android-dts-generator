/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class TaskStackBuilderJellybean {
					public static getActivitiesPendingIntent(param0: android.content.Context, param1: number, param2: native.Array<android.content.Intent>, param3: number, param4: android.os.Bundle): android.app.PendingIntent;
				}
			}
		}
	}
}
