/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.print.PageRange.d.ts" />
/// <reference path="./android.print.PrintAttributes.d.ts" />
/// <reference path="./android.print.PrintJobId.d.ts" />
/// <reference path="./android.print.PrinterId.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module print {
		export class PrintJobInfo {
			public getId(): android.print.PrintJobId;
			public getLabel(): string;
			public getPrinterId(): android.print.PrinterId;
			public getState(): number;
			public getCreationTime(): number;
			public getCopies(): number;
			public getPages(): native.Array<android.print.PageRange>;
			public getAttributes(): android.print.PrintAttributes;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
			public static STATE_BLOCKED: number;
			public static STATE_CANCELED: number;
			public static STATE_COMPLETED: number;
			public static STATE_CREATED: number;
			public static STATE_FAILED: number;
			public static STATE_QUEUED: number;
			public static STATE_STARTED: number;
		}
		export module PrintJobInfo {
			export class Builder {
				public constructor();
				public constructor(param0: android.print.PrintJobInfo);
				public setCopies(param0: number): void;
				public setAttributes(param0: android.print.PrintAttributes): void;
				public setPages(param0: native.Array<android.print.PageRange>): void;
				public putAdvancedOption(param0: string, param1: string): void;
				public putAdvancedOption(param0: string, param1: number): void;
				public build(): android.print.PrintJobInfo;
			}
		}
	}
}
