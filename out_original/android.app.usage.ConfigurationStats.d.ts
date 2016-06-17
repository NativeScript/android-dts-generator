/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module app {
		export module usage {
			export class ConfigurationStats {
				public constructor();
				public constructor(param0: android.app.usage.ConfigurationStats);
				public getConfiguration(): android.content.res.Configuration;
				public getFirstTimeStamp(): number;
				public getLastTimeStamp(): number;
				public getLastTimeActive(): number;
				public getTotalTimeActive(): number;
				public getActivationCount(): number;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
