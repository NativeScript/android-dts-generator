/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export class NetworkRequest {
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public static CREATOR: android.os.Parcelable.Creator;
		}
		export module NetworkRequest {
			export class Builder {
				public constructor();
				public build(): android.net.NetworkRequest;
				public addCapability(param0: number): android.net.NetworkRequest.Builder;
				public removeCapability(param0: number): android.net.NetworkRequest.Builder;
				public addTransportType(param0: number): android.net.NetworkRequest.Builder;
				public removeTransportType(param0: number): android.net.NetworkRequest.Builder;
				public setNetworkSpecifier(param0: string): android.net.NetworkRequest.Builder;
			}
		}
	}
}
