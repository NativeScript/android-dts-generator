/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module os {
				export class IResultReceiver {
					public send(param0: number, param1: android.os.Bundle): void;
				}
				export module IResultReceiver {
					export class Stub {
						public constructor();
						public static asInterface(param0: android.os.IBinder): android.support.v4.os.IResultReceiver;
						public asBinder(): android.os.IBinder;
						public onTransact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
					}
					export module Stub {
						export class Proxy {
							public asBinder(): android.os.IBinder;
							public getInterfaceDescriptor(): string;
							public send(param0: number, param1: android.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}
