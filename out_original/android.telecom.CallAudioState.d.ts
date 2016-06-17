/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module telecom {
		export class CallAudioState {
			public constructor();
			public constructor(param0: boolean, param1: number, param2: number);
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public isMuted(): boolean;
			public getRoute(): number;
			public getSupportedRouteMask(): number;
			public static audioRouteToString(param0: number): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public static ROUTE_BLUETOOTH: number;
			public static ROUTE_EARPIECE: number;
			public static ROUTE_SPEAKER: number;
			public static ROUTE_WIRED_HEADSET: number;
			public static ROUTE_WIRED_OR_EARPIECE: number;
		}
	}
}
