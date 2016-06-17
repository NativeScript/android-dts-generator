/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />

declare module android {
	export module os {
		export class IInterface {
			public asBinder(): android.os.IBinder;
		}
	}
}
