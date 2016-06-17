/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module telecom {
		export class GatewayInfo {
			public constructor();
			public constructor(param0: string, param1: android.net.Uri, param2: android.net.Uri);
			public getGatewayProviderPackageName(): string;
			public getGatewayAddress(): android.net.Uri;
			public getOriginalAddress(): android.net.Uri;
			public isEmpty(): boolean;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
