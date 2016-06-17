/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module telephony {
		export module cdma {
			export class CdmaCellLocation {
				public constructor();
				public constructor(param0: android.os.Bundle);
				public getBaseStationId(): number;
				public getBaseStationLatitude(): number;
				public getBaseStationLongitude(): number;
				public getSystemId(): number;
				public getNetworkId(): number;
				public setStateInvalid(): void;
				public setCellLocationData(param0: number, param1: number, param2: number): void;
				public setCellLocationData(param0: number, param1: number, param2: number, param3: number, param4: number): void;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public toString(): string;
				public fillInNotifierBundle(param0: android.os.Bundle): void;
				public static convertQuartSecToDecDegrees(param0: number): number;
			}
		}
	}
}
