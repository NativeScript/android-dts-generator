/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module print {
		export class PrintAttributes {
			public getMediaSize(): android.print.PrintAttributes.MediaSize;
			public getResolution(): android.print.PrintAttributes.Resolution;
			public getMinMargins(): android.print.PrintAttributes.Margins;
			public getColorMode(): number;
			public getDuplexMode(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public describeContents(): number;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public static COLOR_MODE_COLOR: number;
			public static COLOR_MODE_MONOCHROME: number;
			public static CREATOR: android.os.Parcelable.Creator;
			public static DUPLEX_MODE_LONG_EDGE: number;
			public static DUPLEX_MODE_NONE: number;
			public static DUPLEX_MODE_SHORT_EDGE: number;
		}
		export module PrintAttributes {
			export class Builder {
				public constructor();
				public setMediaSize(param0: android.print.PrintAttributes.MediaSize): android.print.PrintAttributes.Builder;
				public setResolution(param0: android.print.PrintAttributes.Resolution): android.print.PrintAttributes.Builder;
				public setMinMargins(param0: android.print.PrintAttributes.Margins): android.print.PrintAttributes.Builder;
				public setColorMode(param0: number): android.print.PrintAttributes.Builder;
				public setDuplexMode(param0: number): android.print.PrintAttributes.Builder;
				public build(): android.print.PrintAttributes;
			}
			export class Margins {
				public constructor();
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public getLeftMils(): number;
				public getTopMils(): number;
				public getRightMils(): number;
				public getBottomMils(): number;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public toString(): string;
				public static NO_MARGINS: android.print.PrintAttributes.Margins;
			}
			export class MediaSize {
				public constructor();
				public constructor(param0: string, param1: string, param2: number, param3: number);
				public getId(): string;
				public getLabel(param0: android.content.pm.PackageManager): string;
				public getWidthMils(): number;
				public getHeightMils(): number;
				public isPortrait(): boolean;
				public asPortrait(): android.print.PrintAttributes.MediaSize;
				public asLandscape(): android.print.PrintAttributes.MediaSize;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public toString(): string;
				public static ISO_A0: android.print.PrintAttributes.MediaSize;
				public static ISO_A1: android.print.PrintAttributes.MediaSize;
				public static ISO_A10: android.print.PrintAttributes.MediaSize;
				public static ISO_A2: android.print.PrintAttributes.MediaSize;
				public static ISO_A3: android.print.PrintAttributes.MediaSize;
				public static ISO_A4: android.print.PrintAttributes.MediaSize;
				public static ISO_A5: android.print.PrintAttributes.MediaSize;
				public static ISO_A6: android.print.PrintAttributes.MediaSize;
				public static ISO_A7: android.print.PrintAttributes.MediaSize;
				public static ISO_A8: android.print.PrintAttributes.MediaSize;
				public static ISO_A9: android.print.PrintAttributes.MediaSize;
				public static ISO_B0: android.print.PrintAttributes.MediaSize;
				public static ISO_B1: android.print.PrintAttributes.MediaSize;
				public static ISO_B10: android.print.PrintAttributes.MediaSize;
				public static ISO_B2: android.print.PrintAttributes.MediaSize;
				public static ISO_B3: android.print.PrintAttributes.MediaSize;
				public static ISO_B4: android.print.PrintAttributes.MediaSize;
				public static ISO_B5: android.print.PrintAttributes.MediaSize;
				public static ISO_B6: android.print.PrintAttributes.MediaSize;
				public static ISO_B7: android.print.PrintAttributes.MediaSize;
				public static ISO_B8: android.print.PrintAttributes.MediaSize;
				public static ISO_B9: android.print.PrintAttributes.MediaSize;
				public static ISO_C0: android.print.PrintAttributes.MediaSize;
				public static ISO_C1: android.print.PrintAttributes.MediaSize;
				public static ISO_C10: android.print.PrintAttributes.MediaSize;
				public static ISO_C2: android.print.PrintAttributes.MediaSize;
				public static ISO_C3: android.print.PrintAttributes.MediaSize;
				public static ISO_C4: android.print.PrintAttributes.MediaSize;
				public static ISO_C5: android.print.PrintAttributes.MediaSize;
				public static ISO_C6: android.print.PrintAttributes.MediaSize;
				public static ISO_C7: android.print.PrintAttributes.MediaSize;
				public static ISO_C8: android.print.PrintAttributes.MediaSize;
				public static ISO_C9: android.print.PrintAttributes.MediaSize;
				public static JIS_B0: android.print.PrintAttributes.MediaSize;
				public static JIS_B1: android.print.PrintAttributes.MediaSize;
				public static JIS_B10: android.print.PrintAttributes.MediaSize;
				public static JIS_B2: android.print.PrintAttributes.MediaSize;
				public static JIS_B3: android.print.PrintAttributes.MediaSize;
				public static JIS_B4: android.print.PrintAttributes.MediaSize;
				public static JIS_B5: android.print.PrintAttributes.MediaSize;
				public static JIS_B6: android.print.PrintAttributes.MediaSize;
				public static JIS_B7: android.print.PrintAttributes.MediaSize;
				public static JIS_B8: android.print.PrintAttributes.MediaSize;
				public static JIS_B9: android.print.PrintAttributes.MediaSize;
				public static JIS_EXEC: android.print.PrintAttributes.MediaSize;
				public static JPN_CHOU2: android.print.PrintAttributes.MediaSize;
				public static JPN_CHOU3: android.print.PrintAttributes.MediaSize;
				public static JPN_CHOU4: android.print.PrintAttributes.MediaSize;
				public static JPN_HAGAKI: android.print.PrintAttributes.MediaSize;
				public static JPN_KAHU: android.print.PrintAttributes.MediaSize;
				public static JPN_KAKU2: android.print.PrintAttributes.MediaSize;
				public static JPN_OUFUKU: android.print.PrintAttributes.MediaSize;
				public static JPN_YOU4: android.print.PrintAttributes.MediaSize;
				public static NA_FOOLSCAP: android.print.PrintAttributes.MediaSize;
				public static NA_GOVT_LETTER: android.print.PrintAttributes.MediaSize;
				public static NA_INDEX_3X5: android.print.PrintAttributes.MediaSize;
				public static NA_INDEX_4X6: android.print.PrintAttributes.MediaSize;
				public static NA_INDEX_5X8: android.print.PrintAttributes.MediaSize;
				public static NA_JUNIOR_LEGAL: android.print.PrintAttributes.MediaSize;
				public static NA_LEDGER: android.print.PrintAttributes.MediaSize;
				public static NA_LEGAL: android.print.PrintAttributes.MediaSize;
				public static NA_LETTER: android.print.PrintAttributes.MediaSize;
				public static NA_MONARCH: android.print.PrintAttributes.MediaSize;
				public static NA_QUARTO: android.print.PrintAttributes.MediaSize;
				public static NA_TABLOID: android.print.PrintAttributes.MediaSize;
				public static OM_DAI_PA_KAI: android.print.PrintAttributes.MediaSize;
				public static OM_JUURO_KU_KAI: android.print.PrintAttributes.MediaSize;
				public static OM_PA_KAI: android.print.PrintAttributes.MediaSize;
				public static PRC_1: android.print.PrintAttributes.MediaSize;
				public static PRC_10: android.print.PrintAttributes.MediaSize;
				public static PRC_16K: android.print.PrintAttributes.MediaSize;
				public static PRC_2: android.print.PrintAttributes.MediaSize;
				public static PRC_3: android.print.PrintAttributes.MediaSize;
				public static PRC_4: android.print.PrintAttributes.MediaSize;
				public static PRC_5: android.print.PrintAttributes.MediaSize;
				public static PRC_6: android.print.PrintAttributes.MediaSize;
				public static PRC_7: android.print.PrintAttributes.MediaSize;
				public static PRC_8: android.print.PrintAttributes.MediaSize;
				public static PRC_9: android.print.PrintAttributes.MediaSize;
				public static ROC_16K: android.print.PrintAttributes.MediaSize;
				public static ROC_8K: android.print.PrintAttributes.MediaSize;
				public static UNKNOWN_LANDSCAPE: android.print.PrintAttributes.MediaSize;
				public static UNKNOWN_PORTRAIT: android.print.PrintAttributes.MediaSize;
			}
			export class Resolution {
				public constructor();
				public constructor(param0: string, param1: string, param2: number, param3: number);
				public getId(): string;
				public getLabel(): string;
				public getHorizontalDpi(): number;
				public getVerticalDpi(): number;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public toString(): string;
			}
		}
	}
}
