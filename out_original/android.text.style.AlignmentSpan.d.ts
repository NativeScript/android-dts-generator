/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module text {
		export module style {
			export class AlignmentSpan {
				public getAlignment(): android.text.Layout.Alignment;
			}
			export module AlignmentSpan {
				export class Standard {
					public constructor();
					public constructor(param0: android.text.Layout.Alignment);
					public constructor(param0: android.os.Parcel);
					public getSpanTypeId(): number;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public getAlignment(): android.text.Layout.Alignment;
				}
			}
		}
	}
}
