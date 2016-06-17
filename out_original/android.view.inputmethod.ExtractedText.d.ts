/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module view {
		export module inputmethod {
			export class ExtractedText {
				public constructor();
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public static CREATOR: android.os.Parcelable.Creator;
				public static FLAG_SELECTING: number;
				public static FLAG_SINGLE_LINE: number;
				public flags: number;
				public partialEndOffset: number;
				public partialStartOffset: number;
				public selectionEnd: number;
				public selectionStart: number;
				public startOffset: number;
				public text: string;
			}
		}
	}
}
