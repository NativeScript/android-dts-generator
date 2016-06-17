/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module speech {
		export module tts {
			export class Voice {
				public constructor();
				public constructor(param0: string, param1: java.util.Locale, param2: number, param3: number, param4: boolean, param5: java.util.Set);
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public getLocale(): java.util.Locale;
				public getQuality(): number;
				public getLatency(): number;
				public isNetworkConnectionRequired(): boolean;
				public getName(): string;
				public getFeatures(): java.util.Set;
				public toString(): string;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public static CREATOR: android.os.Parcelable.Creator;
				public static LATENCY_HIGH: number;
				public static LATENCY_LOW: number;
				public static LATENCY_NORMAL: number;
				public static LATENCY_VERY_HIGH: number;
				public static LATENCY_VERY_LOW: number;
				public static QUALITY_HIGH: number;
				public static QUALITY_LOW: number;
				public static QUALITY_NORMAL: number;
				public static QUALITY_VERY_HIGH: number;
				public static QUALITY_VERY_LOW: number;
			}
		}
	}
}
