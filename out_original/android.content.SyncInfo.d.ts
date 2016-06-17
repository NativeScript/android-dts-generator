/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module content {
		export class SyncInfo {
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public account: android.accounts.Account;
			public authority: string;
			public startTime: number;
		}
	}
}
