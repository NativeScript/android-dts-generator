/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class PeriodicSync {
			public constructor();
			public constructor(param0: android.accounts.Account, param1: string, param2: android.os.Bundle, param3: number);
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
			public account: android.accounts.Account;
			public authority: string;
			public extras: android.os.Bundle;
			public period: number;
		}
	}
}
