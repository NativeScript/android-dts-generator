/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.camera2.params.RggbChannelVector.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export module params {
				export class LensShadingMap {
					public getRowCount(): number;
					public getColumnCount(): number;
					public getGainFactorCount(): number;
					public getGainFactor(param0: number, param1: number, param2: number): number;
					public getGainFactorVector(param0: number, param1: number): android.hardware.camera2.params.RggbChannelVector;
					public copyGainFactors(param0: native.Array<number>, param1: number): void;
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
					public toString(): string;
					public static MINIMUM_GAIN_FACTOR: number;
				}
			}
		}
	}
}
