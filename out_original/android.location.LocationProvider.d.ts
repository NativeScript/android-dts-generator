/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.location.Criteria.d.ts" />

declare module android {
	export module location {
		export class LocationProvider {
			public getName(): string;
			public meetsCriteria(param0: android.location.Criteria): boolean;
			public requiresNetwork(): boolean;
			public requiresSatellite(): boolean;
			public requiresCell(): boolean;
			public hasMonetaryCost(): boolean;
			public supportsAltitude(): boolean;
			public supportsSpeed(): boolean;
			public supportsBearing(): boolean;
			public getPowerRequirement(): number;
			public getAccuracy(): number;
			public static AVAILABLE: number;
			public static OUT_OF_SERVICE: number;
			public static TEMPORARILY_UNAVAILABLE: number;
		}
	}
}
