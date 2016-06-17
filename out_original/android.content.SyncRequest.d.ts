/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class SyncRequest {
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
		export module SyncRequest {
			export class Builder {
				public constructor();
				public syncOnce(): android.content.SyncRequest.Builder;
				public syncPeriodic(param0: number, param1: number): android.content.SyncRequest.Builder;
				public setDisallowMetered(param0: boolean): android.content.SyncRequest.Builder;
				public setSyncAdapter(param0: android.accounts.Account, param1: string): android.content.SyncRequest.Builder;
				public setExtras(param0: android.os.Bundle): android.content.SyncRequest.Builder;
				public setNoRetry(param0: boolean): android.content.SyncRequest.Builder;
				public setIgnoreSettings(param0: boolean): android.content.SyncRequest.Builder;
				public setIgnoreBackoff(param0: boolean): android.content.SyncRequest.Builder;
				public setManual(param0: boolean): android.content.SyncRequest.Builder;
				public setExpedited(param0: boolean): android.content.SyncRequest.Builder;
				public build(): android.content.SyncRequest;
			}
		}
	}
}
