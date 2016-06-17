/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module os {
				export class ResultReceiver {
					public constructor();
					public constructor(param0: android.os.Handler);
					public send(param0: number, param1: android.os.Bundle): void;
					public onReceiveResult(param0: number, param1: android.os.Bundle): void;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public static CREATOR: android.os.Parcelable.Creator;
				}
				export module ResultReceiver {
					export class MyResultReceiver {
						public send(param0: number, param1: android.os.Bundle): void;
					}
					export class MyRunnable {
						public run(): void;
					}
				}
			}
		}
	}
}
