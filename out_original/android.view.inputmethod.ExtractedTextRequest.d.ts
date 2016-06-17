/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module view {
		export module inputmethod {
			export class ExtractedTextRequest {
				public constructor();
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public static CREATOR: android.os.Parcelable.Creator;
				public flags: number;
				public hintMaxChars: number;
				public hintMaxLines: number;
				public token: number;
			}
		}
	}
}
