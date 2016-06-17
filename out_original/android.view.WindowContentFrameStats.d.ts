/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module view {
		export class WindowContentFrameStats {
			public getFramePostedTimeNano(param0: number): number;
			public getFrameReadyTimeNano(param0: number): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
