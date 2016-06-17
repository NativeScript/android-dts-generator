/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module print {
		export class PrintDocumentInfo {
			public getName(): string;
			public getPageCount(): number;
			public getContentType(): number;
			public getDataSize(): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public static CONTENT_TYPE_DOCUMENT: number;
			public static CONTENT_TYPE_PHOTO: number;
			public static CONTENT_TYPE_UNKNOWN: number;
			public static CREATOR: android.os.Parcelable.Creator;
			public static PAGE_COUNT_UNKNOWN: number;
		}
		export module PrintDocumentInfo {
			export class Builder {
				public constructor();
				public constructor(param0: string);
				public setPageCount(param0: number): android.print.PrintDocumentInfo.Builder;
				public setContentType(param0: number): android.print.PrintDocumentInfo.Builder;
				public build(): android.print.PrintDocumentInfo;
			}
		}
	}
}
