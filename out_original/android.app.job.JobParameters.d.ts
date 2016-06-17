/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />

declare module android {
	export module app {
		export module job {
			export class JobParameters {
				public getJobId(): number;
				public getExtras(): android.os.PersistableBundle;
				public isOverrideDeadlineExpired(): boolean;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
