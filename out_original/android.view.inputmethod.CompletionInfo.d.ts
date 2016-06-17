/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module view {
		export module inputmethod {
			export class CompletionInfo {
				public constructor();
				public constructor(param0: number, param1: number, param2: string);
				public constructor(param0: number, param1: number, param2: string, param3: string);
				public getId(): number;
				public getPosition(): number;
				public getText(): string;
				public getLabel(): string;
				public toString(): string;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
