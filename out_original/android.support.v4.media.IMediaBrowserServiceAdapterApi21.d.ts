/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class IMediaBrowserServiceAdapterApi21 {
				}
				export module IMediaBrowserServiceAdapterApi21 {
					export class Stub {
						public constructor();
						public asBinder(): android.os.IBinder;
						public onTransact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public connect(param0: string, param1: android.os.Bundle, param2: java.lang.Object): void;
						public disconnect(param0: java.lang.Object): void;
						public addSubscription(param0: string, param1: java.lang.Object): void;
						public removeSubscription(param0: string, param1: java.lang.Object): void;
						public getMediaItem(param0: string, param1: android.os.ResultReceiver): void;
					}
				}
			}
		}
	}
}
