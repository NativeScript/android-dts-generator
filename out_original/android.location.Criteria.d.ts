/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module location {
		export class Criteria {
			public constructor();
			public constructor(param0: android.location.Criteria);
			public setHorizontalAccuracy(param0: number): void;
			public getHorizontalAccuracy(): number;
			public setVerticalAccuracy(param0: number): void;
			public getVerticalAccuracy(): number;
			public setSpeedAccuracy(param0: number): void;
			public getSpeedAccuracy(): number;
			public setBearingAccuracy(param0: number): void;
			public getBearingAccuracy(): number;
			public setAccuracy(param0: number): void;
			public getAccuracy(): number;
			public setPowerRequirement(param0: number): void;
			public getPowerRequirement(): number;
			public setCostAllowed(param0: boolean): void;
			public isCostAllowed(): boolean;
			public setAltitudeRequired(param0: boolean): void;
			public isAltitudeRequired(): boolean;
			public setSpeedRequired(param0: boolean): void;
			public isSpeedRequired(): boolean;
			public setBearingRequired(param0: boolean): void;
			public isBearingRequired(): boolean;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public static ACCURACY_COARSE: number;
			public static ACCURACY_FINE: number;
			public static ACCURACY_HIGH: number;
			public static ACCURACY_LOW: number;
			public static ACCURACY_MEDIUM: number;
			public static CREATOR: android.os.Parcelable.Creator;
			public static NO_REQUIREMENT: number;
			public static POWER_HIGH: number;
			public static POWER_LOW: number;
			public static POWER_MEDIUM: number;
		}
	}
}
