/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.ProxyInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module net {
		export class LinkProperties {
			public getInterfaceName(): string;
			public getLinkAddresses(): java.util.List;
			public getDnsServers(): java.util.List;
			public getDomains(): string;
			public getRoutes(): java.util.List;
			public getHttpProxy(): android.net.ProxyInfo;
			public describeContents(): number;
			public toString(): string;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
