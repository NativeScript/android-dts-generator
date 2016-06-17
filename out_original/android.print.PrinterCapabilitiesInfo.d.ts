/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.print.PrintAttributes.d.ts" />
/// <reference path="./android.print.PrinterId.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module print {
		export class PrinterCapabilitiesInfo {
			public getMediaSizes(): java.util.List;
			public getResolutions(): java.util.List;
			public getMinMargins(): android.print.PrintAttributes.Margins;
			public getColorModes(): number;
			public getDuplexModes(): number;
			public getDefaults(): android.print.PrintAttributes;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
		}
		export module PrinterCapabilitiesInfo {
			export class Builder {
				public constructor();
				public constructor(param0: android.print.PrinterId);
				public addMediaSize(param0: android.print.PrintAttributes.MediaSize, param1: boolean): android.print.PrinterCapabilitiesInfo.Builder;
				public addResolution(param0: android.print.PrintAttributes.Resolution, param1: boolean): android.print.PrinterCapabilitiesInfo.Builder;
				public setMinMargins(param0: android.print.PrintAttributes.Margins): android.print.PrinterCapabilitiesInfo.Builder;
				public setColorModes(param0: number, param1: number): android.print.PrinterCapabilitiesInfo.Builder;
				public setDuplexModes(param0: number, param1: number): android.print.PrinterCapabilitiesInfo.Builder;
				public build(): android.print.PrinterCapabilitiesInfo;
			}
		}
	}
}
