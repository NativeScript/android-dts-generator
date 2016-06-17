/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class RestrictionEntry {
			public constructor();
			public constructor(param0: number, param1: string);
			public constructor(param0: string, param1: string);
			public constructor(param0: string, param1: boolean);
			public constructor(param0: string, param1: native.Array<string>);
			public constructor(param0: string, param1: number);
			public constructor(param0: android.os.Parcel);
			public static createBundleEntry(param0: string, param1: native.Array<android.content.RestrictionEntry>): android.content.RestrictionEntry;
			public static createBundleArrayEntry(param0: string, param1: native.Array<android.content.RestrictionEntry>): android.content.RestrictionEntry;
			public setType(param0: number): void;
			public getType(): number;
			public getSelectedString(): string;
			public getAllSelectedStrings(): native.Array<string>;
			public getSelectedState(): boolean;
			public getIntValue(): number;
			public setIntValue(param0: number): void;
			public setSelectedString(param0: string): void;
			public setSelectedState(param0: boolean): void;
			public setAllSelectedStrings(param0: native.Array<string>): void;
			public setChoiceValues(param0: native.Array<string>): void;
			public setChoiceValues(param0: android.content.Context, param1: number): void;
			public getRestrictions(): native.Array<android.content.RestrictionEntry>;
			public setRestrictions(param0: native.Array<android.content.RestrictionEntry>): void;
			public getChoiceValues(): native.Array<string>;
			public setChoiceEntries(param0: native.Array<string>): void;
			public setChoiceEntries(param0: android.content.Context, param1: number): void;
			public getChoiceEntries(): native.Array<string>;
			public getDescription(): string;
			public setDescription(param0: string): void;
			public getKey(): string;
			public getTitle(): string;
			public setTitle(param0: string): void;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
			public static TYPE_BOOLEAN: number;
			public static TYPE_BUNDLE: number;
			public static TYPE_BUNDLE_ARRAY: number;
			public static TYPE_CHOICE: number;
			public static TYPE_INTEGER: number;
			public static TYPE_MULTI_SELECT: number;
			public static TYPE_NULL: number;
			public static TYPE_STRING: number;
		}
	}
}
