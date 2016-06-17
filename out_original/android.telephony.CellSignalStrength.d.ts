/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module telephony {
		export class CellSignalStrength {
			public getLevel(): number;
			public getAsuLevel(): number;
			public getDbm(): number;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public static SIGNAL_STRENGTH_GOOD: number;
			public static SIGNAL_STRENGTH_GREAT: number;
			public static SIGNAL_STRENGTH_MODERATE: number;
			public static SIGNAL_STRENGTH_NONE_OR_UNKNOWN: number;
			public static SIGNAL_STRENGTH_POOR: number;
		}
	}
}
