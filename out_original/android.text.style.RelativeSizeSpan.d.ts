/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />

declare module android {
	export module text {
		export module style {
			export class RelativeSizeSpan {
				public constructor();
				public constructor(param0: number);
				public constructor(param0: android.os.Parcel);
				public getSpanTypeId(): number;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getSizeChange(): number;
				public updateDrawState(param0: android.text.TextPaint): void;
				public updateMeasureState(param0: android.text.TextPaint): void;
			}
		}
	}
}
