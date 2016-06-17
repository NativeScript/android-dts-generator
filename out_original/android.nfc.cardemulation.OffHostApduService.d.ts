/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />

declare module android {
	export module nfc {
		export module cardemulation {
			export class OffHostApduService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public static SERVICE_INTERFACE: string;
				public static SERVICE_META_DATA: string;
			}
		}
	}
}
