/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />

declare module android {
	export module nfc {
		export module cardemulation {
			export class HostApduService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public sendResponseApdu(param0: native.Array<number>): void;
				public notifyUnhandled(): void;
				public processCommandApdu(param0: native.Array<number>, param1: android.os.Bundle): native.Array<number>;
				public onDeactivated(param0: number): void;
				public static DEACTIVATION_DESELECTED: number;
				public static DEACTIVATION_LINK_LOSS: number;
				public static SERVICE_INTERFACE: string;
				public static SERVICE_META_DATA: string;
			}
		}
	}
}
