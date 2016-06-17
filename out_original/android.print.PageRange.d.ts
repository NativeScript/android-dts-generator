/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module print {
		export class PageRange {
			public constructor();
			public constructor(param0: number, param1: number);
			public getStart(): number;
			public getEnd(): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public static ALL_PAGES: android.print.PageRange;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
