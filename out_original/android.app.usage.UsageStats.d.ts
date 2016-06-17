/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module app {
		export module usage {
			export class UsageStats {
				public constructor();
				public constructor(param0: android.app.usage.UsageStats);
				public getPackageName(): string;
				public getFirstTimeStamp(): number;
				public getLastTimeStamp(): number;
				public getLastTimeUsed(): number;
				public getTotalTimeInForeground(): number;
				public add(param0: android.app.usage.UsageStats): void;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
