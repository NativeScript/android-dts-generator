/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.telecom.PhoneAccountHandle.d.ts" />

declare module android {
	export module telecom {
		export class ConnectionRequest {
			public constructor();
			public constructor(param0: android.telecom.PhoneAccountHandle, param1: android.net.Uri, param2: android.os.Bundle);
			public constructor(param0: android.telecom.PhoneAccountHandle, param1: android.net.Uri, param2: android.os.Bundle, param3: number);
			public getAccountHandle(): android.telecom.PhoneAccountHandle;
			public getAddress(): android.net.Uri;
			public getExtras(): android.os.Bundle;
			public getVideoState(): number;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
