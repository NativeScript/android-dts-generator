/// <reference path="./_helpers.d.ts" />

declare module android {
	export module location {
		export class GpsSatellite {
			public getPrn(): number;
			public getSnr(): number;
			public getElevation(): number;
			public getAzimuth(): number;
			public hasEphemeris(): boolean;
			public hasAlmanac(): boolean;
			public usedInFix(): boolean;
		}
	}
}
