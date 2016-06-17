/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module location {
		export class Location {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: android.location.Location);
			public set(param0: android.location.Location): void;
			public reset(): void;
			public static convert(param0: number, param1: number): string;
			public static convert(param0: string): number;
			public static distanceBetween(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): void;
			public distanceTo(param0: android.location.Location): number;
			public bearingTo(param0: android.location.Location): number;
			public getProvider(): string;
			public setProvider(param0: string): void;
			public getTime(): number;
			public setTime(param0: number): void;
			public getElapsedRealtimeNanos(): number;
			public setElapsedRealtimeNanos(param0: number): void;
			public getLatitude(): number;
			public setLatitude(param0: number): void;
			public getLongitude(): number;
			public setLongitude(param0: number): void;
			public hasAltitude(): boolean;
			public getAltitude(): number;
			public setAltitude(param0: number): void;
			public removeAltitude(): void;
			public hasSpeed(): boolean;
			public getSpeed(): number;
			public setSpeed(param0: number): void;
			public removeSpeed(): void;
			public hasBearing(): boolean;
			public getBearing(): number;
			public setBearing(param0: number): void;
			public removeBearing(): void;
			public hasAccuracy(): boolean;
			public getAccuracy(): number;
			public setAccuracy(param0: number): void;
			public removeAccuracy(): void;
			public getExtras(): android.os.Bundle;
			public setExtras(param0: android.os.Bundle): void;
			public toString(): string;
			public dump(param0: android.util.Printer, param1: string): void;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public isFromMockProvider(): boolean;
			public static CREATOR: android.os.Parcelable.Creator;
			public static FORMAT_DEGREES: number;
			public static FORMAT_MINUTES: number;
			public static FORMAT_SECONDS: number;
		}
	}
}
