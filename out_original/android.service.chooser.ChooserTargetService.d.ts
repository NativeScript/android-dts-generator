/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module service {
		export module chooser {
			export class ChooserTargetService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onGetChooserTargets(param0: android.content.ComponentName, param1: android.content.IntentFilter): java.util.List;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public static BIND_PERMISSION: string;
				public static META_DATA_NAME: string;
				public static SERVICE_INTERFACE: string;
			}
		}
	}
}
