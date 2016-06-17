/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module view {
		export module textservice {
			export class SuggestionsInfo {
				public constructor();
				public constructor(param0: number, param1: native.Array<string>);
				public constructor(param0: number, param1: native.Array<string>, param2: number, param3: number);
				public constructor(param0: android.os.Parcel);
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public setCookieAndSequence(param0: number, param1: number): void;
				public getCookie(): number;
				public getSequence(): number;
				public getSuggestionsAttributes(): number;
				public getSuggestionsCount(): number;
				public getSuggestionAt(param0: number): string;
				public describeContents(): number;
				public static CREATOR: android.os.Parcelable.Creator;
				public static RESULT_ATTR_HAS_RECOMMENDED_SUGGESTIONS: number;
				public static RESULT_ATTR_IN_THE_DICTIONARY: number;
				public static RESULT_ATTR_LOOKS_LIKE_TYPO: number;
			}
		}
	}
}
