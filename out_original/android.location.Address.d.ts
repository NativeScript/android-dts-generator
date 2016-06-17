/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module location {
		export class Address {
			public constructor();
			public constructor(param0: java.util.Locale);
			public getLocale(): java.util.Locale;
			public getMaxAddressLineIndex(): number;
			public getAddressLine(param0: number): string;
			public setAddressLine(param0: number, param1: string): void;
			public getFeatureName(): string;
			public setFeatureName(param0: string): void;
			public getAdminArea(): string;
			public setAdminArea(param0: string): void;
			public getSubAdminArea(): string;
			public setSubAdminArea(param0: string): void;
			public getLocality(): string;
			public setLocality(param0: string): void;
			public getSubLocality(): string;
			public setSubLocality(param0: string): void;
			public getThoroughfare(): string;
			public setThoroughfare(param0: string): void;
			public getSubThoroughfare(): string;
			public setSubThoroughfare(param0: string): void;
			public getPremises(): string;
			public setPremises(param0: string): void;
			public getPostalCode(): string;
			public setPostalCode(param0: string): void;
			public getCountryCode(): string;
			public setCountryCode(param0: string): void;
			public getCountryName(): string;
			public setCountryName(param0: string): void;
			public hasLatitude(): boolean;
			public getLatitude(): number;
			public setLatitude(param0: number): void;
			public clearLatitude(): void;
			public hasLongitude(): boolean;
			public getLongitude(): number;
			public setLongitude(param0: number): void;
			public clearLongitude(): void;
			public getPhone(): string;
			public setPhone(param0: string): void;
			public getUrl(): string;
			public setUrl(param0: string): void;
			public getExtras(): android.os.Bundle;
			public setExtras(param0: android.os.Bundle): void;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
