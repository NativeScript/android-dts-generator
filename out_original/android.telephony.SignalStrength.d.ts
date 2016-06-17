/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module telephony {
		export class SignalStrength {
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public describeContents(): number;
			public getGsmSignalStrength(): number;
			public getGsmBitErrorRate(): number;
			public getCdmaDbm(): number;
			public getCdmaEcio(): number;
			public getEvdoDbm(): number;
			public getEvdoEcio(): number;
			public getEvdoSnr(): number;
			public getLevel(): number;
			public isGsm(): boolean;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
		}
	}
}
