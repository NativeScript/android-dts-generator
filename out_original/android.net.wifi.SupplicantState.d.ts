/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export module wifi {
			export class SupplicantState {
				public static values(): native.Array<android.net.wifi.SupplicantState>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.net.wifi.SupplicantState;
				public static isValidState(param0: android.net.wifi.SupplicantState): boolean;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static ASSOCIATED: android.net.wifi.SupplicantState;
				public static ASSOCIATING: android.net.wifi.SupplicantState;
				public static AUTHENTICATING: android.net.wifi.SupplicantState;
				public static COMPLETED: android.net.wifi.SupplicantState;
				public static DISCONNECTED: android.net.wifi.SupplicantState;
				public static DORMANT: android.net.wifi.SupplicantState;
				public static FOUR_WAY_HANDSHAKE: android.net.wifi.SupplicantState;
				public static GROUP_HANDSHAKE: android.net.wifi.SupplicantState;
				public static INACTIVE: android.net.wifi.SupplicantState;
				public static INTERFACE_DISABLED: android.net.wifi.SupplicantState;
				public static INVALID: android.net.wifi.SupplicantState;
				public static SCANNING: android.net.wifi.SupplicantState;
				public static UNINITIALIZED: android.net.wifi.SupplicantState;
			}
		}
	}
}
