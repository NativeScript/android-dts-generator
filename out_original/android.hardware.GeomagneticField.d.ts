/// <reference path="./_helpers.d.ts" />

declare module android {
	export module hardware {
		export class GeomagneticField {
			public constructor();
			public constructor(param0: number, param1: number, param2: number, param3: number);
			public getX(): number;
			public getY(): number;
			public getZ(): number;
			public getDeclination(): number;
			public getInclination(): number;
			public getHorizontalStrength(): number;
			public getFieldStrength(): number;
		}
	}
}
