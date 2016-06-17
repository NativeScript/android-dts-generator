/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module accounts {
		export class AccountAuthenticatorResponse {
			public constructor();
			public constructor(param0: android.os.Parcel);
			public onResult(param0: android.os.Bundle): void;
			public onRequestContinued(): void;
			public onError(param0: number, param1: string): void;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
