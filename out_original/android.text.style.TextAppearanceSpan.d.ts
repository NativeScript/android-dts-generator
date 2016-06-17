/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module text {
		export module style {
			export class TextAppearanceSpan {
				public constructor();
				public constructor(param0: android.content.Context, param1: number);
				public constructor(param0: android.content.Context, param1: number, param2: number);
				public constructor(param0: string, param1: number, param2: number, param3: android.content.res.ColorStateList, param4: android.content.res.ColorStateList);
				public constructor(param0: android.os.Parcel);
				public getSpanTypeId(): number;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getFamily(): string;
				public getTextColor(): android.content.res.ColorStateList;
				public getLinkTextColor(): android.content.res.ColorStateList;
				public getTextSize(): number;
				public getTextStyle(): number;
				public updateDrawState(param0: android.text.TextPaint): void;
				public updateMeasureState(param0: android.text.TextPaint): void;
			}
		}
	}
}
