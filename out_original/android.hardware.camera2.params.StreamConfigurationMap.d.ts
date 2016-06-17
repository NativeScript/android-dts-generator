/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.util.Range.d.ts" />
/// <reference path="./android.util.Size.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export module params {
				export class StreamConfigurationMap {
					public getOutputFormats(): native.Array<number>;
					public getValidOutputFormatsForInput(param0: number): native.Array<number>;
					public getInputFormats(): native.Array<number>;
					public getInputSizes(param0: number): native.Array<android.util.Size>;
					public isOutputSupportedFor(param0: number): boolean;
					public static isOutputSupportedFor(param0: java.lang.Class): boolean;
					public isOutputSupportedFor(param0: android.view.Surface): boolean;
					public getOutputSizes(param0: java.lang.Class): native.Array<android.util.Size>;
					public getOutputSizes(param0: number): native.Array<android.util.Size>;
					public getHighSpeedVideoSizes(): native.Array<android.util.Size>;
					public getHighSpeedVideoFpsRangesFor(param0: android.util.Size): native.Array<android.util.Range>;
					public getHighSpeedVideoFpsRanges(): native.Array<android.util.Range>;
					public getHighSpeedVideoSizesFor(param0: android.util.Range): native.Array<android.util.Size>;
					public getHighResolutionOutputSizes(param0: number): native.Array<android.util.Size>;
					public getOutputMinFrameDuration(param0: number, param1: android.util.Size): number;
					public getOutputMinFrameDuration(param0: java.lang.Class, param1: android.util.Size): number;
					public getOutputStallDuration(param0: number, param1: android.util.Size): number;
					public getOutputStallDuration(param0: java.lang.Class, param1: android.util.Size): number;
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
					public toString(): string;
				}
			}
		}
	}
}
