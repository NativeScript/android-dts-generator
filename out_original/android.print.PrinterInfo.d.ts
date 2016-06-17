/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.print.PrinterCapabilitiesInfo.d.ts" />
/// <reference path="./android.print.PrinterId.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module print {
		export class PrinterInfo {
			public getId(): android.print.PrinterId;
			public getName(): string;
			public getStatus(): number;
			public getDescription(): string;
			public getCapabilities(): android.print.PrinterCapabilitiesInfo;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
			public static STATUS_BUSY: number;
			public static STATUS_IDLE: number;
			public static STATUS_UNAVAILABLE: number;
		}
		export module PrinterInfo {
			export class Builder {
				public constructor();
				public constructor(param0: android.print.PrinterId, param1: string, param2: number);
				public constructor(param0: android.print.PrinterInfo);
				public setStatus(param0: number): android.print.PrinterInfo.Builder;
				public setName(param0: string): android.print.PrinterInfo.Builder;
				public setDescription(param0: string): android.print.PrinterInfo.Builder;
				public setCapabilities(param0: android.print.PrinterCapabilitiesInfo): android.print.PrinterInfo.Builder;
				public build(): android.print.PrinterInfo;
			}
		}
	}
}
