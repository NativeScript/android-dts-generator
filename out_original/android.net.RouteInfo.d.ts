/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.IpPrefix.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />

declare module android {
	export module net {
		export class RouteInfo {
			public getDestination(): android.net.IpPrefix;
			public getGateway(): java.net.InetAddress;
			public getInterface(): string;
			public isDefaultRoute(): boolean;
			public matches(param0: java.net.InetAddress): boolean;
			public toString(): string;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
