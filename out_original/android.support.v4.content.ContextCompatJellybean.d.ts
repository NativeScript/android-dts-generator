/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class ContextCompatJellybean {
					public static startActivities(param0: android.content.Context, param1: native.Array<android.content.Intent>, param2: android.os.Bundle): void;
				}
			}
		}
	}
}
