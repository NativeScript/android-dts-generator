/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module view {
		export module textservice {
			export class SpellCheckerSubtype {
				public constructor();
				public constructor(param0: number, param1: string, param2: string);
				public getNameResId(): number;
				public getLocale(): string;
				public getExtraValue(): string;
				public containsExtraValueKey(param0: string): boolean;
				public getExtraValueOf(param0: string): string;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public getDisplayName(param0: android.content.Context, param1: string, param2: android.content.pm.ApplicationInfo): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
