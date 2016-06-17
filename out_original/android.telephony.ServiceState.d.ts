/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module telephony {
		export class ServiceState {
			public constructor();
			public constructor(param0: android.telephony.ServiceState);
			public constructor(param0: android.os.Parcel);
			public copyFrom(param0: android.telephony.ServiceState): void;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public describeContents(): number;
			public getState(): number;
			public getRoaming(): boolean;
			public getOperatorAlphaLong(): string;
			public getOperatorAlphaShort(): string;
			public getOperatorNumeric(): string;
			public getIsManualSelection(): boolean;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public setStateOutOfService(): void;
			public setStateOff(): void;
			public setState(param0: number): void;
			public setRoaming(param0: boolean): void;
			public setOperatorName(param0: string, param1: string, param2: string): void;
			public setIsManualSelection(param0: boolean): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public static STATE_EMERGENCY_ONLY: number;
			public static STATE_IN_SERVICE: number;
			public static STATE_OUT_OF_SERVICE: number;
			public static STATE_POWER_OFF: number;
		}
	}
}
