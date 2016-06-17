/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.service.carrier.CarrierIdentifier.d.ts" />

declare module android {
	export module service {
		export module carrier {
			export class CarrierService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onLoadConfig(param0: android.service.carrier.CarrierIdentifier): android.os.PersistableBundle;
				public notifyCarrierNetworkChange(param0: boolean): void;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public static CARRIER_SERVICE_INTERFACE: string;
			}
		}
	}
}
