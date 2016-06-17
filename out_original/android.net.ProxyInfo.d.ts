/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module net {
		export class ProxyInfo {
			public static buildDirectProxy(param0: string, param1: number): android.net.ProxyInfo;
			public static buildDirectProxy(param0: string, param1: number, param2: java.util.List): android.net.ProxyInfo;
			public static buildPacProxy(param0: android.net.Uri): android.net.ProxyInfo;
			public getPacFileUrl(): android.net.Uri;
			public getHost(): string;
			public getPort(): number;
			public getExclusionList(): native.Array<string>;
			public toString(): string;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
