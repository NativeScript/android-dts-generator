/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module net {
		export class CaptivePortal {
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public reportCaptivePortalDismissed(): void;
			public ignoreNetwork(): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
