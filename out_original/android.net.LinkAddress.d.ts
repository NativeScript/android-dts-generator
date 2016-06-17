/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />

declare module android {
	export module net {
		export class LinkAddress {
			public toString(): string;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public getAddress(): java.net.InetAddress;
			public getPrefixLength(): number;
			public getFlags(): number;
			public getScope(): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
