/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module view {
		export module inputmethod {
			export class CorrectionInfo {
				public constructor();
				public constructor(param0: number, param1: string, param2: string);
				public getOffset(): number;
				public getOldText(): string;
				public getNewText(): string;
				public toString(): string;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
