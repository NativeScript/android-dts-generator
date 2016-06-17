/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class PatternMatcher {
			public constructor();
			public constructor(param0: string, param1: number);
			public constructor(param0: android.os.Parcel);
			public getPath(): string;
			public getType(): number;
			public match(param0: string): boolean;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public static PATTERN_LITERAL: number;
			public static PATTERN_PREFIX: number;
			public static PATTERN_SIMPLE_GLOB: number;
		}
	}
}
