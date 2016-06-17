/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export class WpsInfo {
				public constructor();
				public constructor(param0: android.net.wifi.WpsInfo);
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public BSSID: string;
				public static CREATOR: android.os.Parcelable.Creator;
				public static DISPLAY: number;
				public static INVALID: number;
				public static KEYPAD: number;
				public static LABEL: number;
				public static PBC: number;
				public pin: string;
				public setup: number;
			}
		}
	}
}
