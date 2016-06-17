/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module service {
		export module restrictions {
			export class RestrictionsReceiver {
				public constructor();
				public onRequestPermission(param0: android.content.Context, param1: string, param2: string, param3: string, param4: android.os.PersistableBundle): void;
				public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
			}
		}
	}
}
