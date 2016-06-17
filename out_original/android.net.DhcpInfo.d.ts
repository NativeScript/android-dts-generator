/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module net {
		export class DhcpInfo {
			public constructor();
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public dns1: number;
			public dns2: number;
			public gateway: number;
			public ipAddress: number;
			public leaseDuration: number;
			public netmask: number;
			public serverAddress: number;
		}
	}
}
