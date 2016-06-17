/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module net {
		export module nsd {
			export class NsdServiceInfo {
				public constructor();
				public getServiceName(): string;
				public setServiceName(param0: string): void;
				public getServiceType(): string;
				public setServiceType(param0: string): void;
				public getHost(): java.net.InetAddress;
				public setHost(param0: java.net.InetAddress): void;
				public getPort(): number;
				public setPort(param0: number): void;
				public setAttribute(param0: string, param1: string): void;
				public removeAttribute(param0: string): void;
				public getAttributes(): java.util.Map;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
