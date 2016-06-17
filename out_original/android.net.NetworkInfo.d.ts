/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export class NetworkInfo {
			public getType(): number;
			public getSubtype(): number;
			public getTypeName(): string;
			public getSubtypeName(): string;
			public isConnectedOrConnecting(): boolean;
			public isConnected(): boolean;
			public isAvailable(): boolean;
			public isFailover(): boolean;
			public isRoaming(): boolean;
			public getState(): android.net.NetworkInfo.State;
			public getDetailedState(): android.net.NetworkInfo.DetailedState;
			public getReason(): string;
			public getExtraInfo(): string;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
		}
		export module NetworkInfo {
			export class DetailedState {
				public static values(): native.Array<android.net.NetworkInfo.DetailedState>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.net.NetworkInfo.DetailedState;
				public static AUTHENTICATING: android.net.NetworkInfo.DetailedState;
				public static BLOCKED: android.net.NetworkInfo.DetailedState;
				public static CAPTIVE_PORTAL_CHECK: android.net.NetworkInfo.DetailedState;
				public static CONNECTED: android.net.NetworkInfo.DetailedState;
				public static CONNECTING: android.net.NetworkInfo.DetailedState;
				public static DISCONNECTED: android.net.NetworkInfo.DetailedState;
				public static DISCONNECTING: android.net.NetworkInfo.DetailedState;
				public static FAILED: android.net.NetworkInfo.DetailedState;
				public static IDLE: android.net.NetworkInfo.DetailedState;
				public static OBTAINING_IPADDR: android.net.NetworkInfo.DetailedState;
				public static SCANNING: android.net.NetworkInfo.DetailedState;
				public static SUSPENDED: android.net.NetworkInfo.DetailedState;
				public static VERIFYING_POOR_LINK: android.net.NetworkInfo.DetailedState;
			}
			export class State {
				public static values(): native.Array<android.net.NetworkInfo.State>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.net.NetworkInfo.State;
				public static CONNECTED: android.net.NetworkInfo.State;
				public static CONNECTING: android.net.NetworkInfo.State;
				public static DISCONNECTED: android.net.NetworkInfo.State;
				public static DISCONNECTING: android.net.NetworkInfo.State;
				public static SUSPENDED: android.net.NetworkInfo.State;
				public static UNKNOWN: android.net.NetworkInfo.State;
			}
		}
	}
}
