/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.textservice.SuggestionsInfo.d.ts" />

declare module android {
	export module view {
		export module textservice {
			export class SentenceSuggestionsInfo {
				public constructor();
				public constructor(param0: native.Array<android.view.textservice.SuggestionsInfo>, param1: native.Array<number>, param2: native.Array<number>);
				public constructor(param0: android.os.Parcel);
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public getSuggestionsCount(): number;
				public getSuggestionsInfoAt(param0: number): android.view.textservice.SuggestionsInfo;
				public getOffsetAt(param0: number): number;
				public getLengthAt(param0: number): number;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
