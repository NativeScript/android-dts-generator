/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module view {
		export module textservice {
			export class TextInfo {
				public constructor();
				public constructor(param0: string);
				public constructor(param0: string, param1: number, param2: number);
				public constructor(param0: string, param1: number, param2: number, param3: number, param4: number);
				public constructor(param0: android.os.Parcel);
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getText(): string;
				public getCharSequence(): string;
				public getCookie(): number;
				public getSequence(): number;
				public describeContents(): number;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
