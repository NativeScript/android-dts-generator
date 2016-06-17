/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.Layout.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module text {
		export module style {
			export class QuoteSpan {
				public constructor();
				public constructor(param0: number);
				public constructor(param0: android.os.Parcel);
				public getSpanTypeId(): number;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getColor(): number;
				public getLeadingMargin(param0: boolean): number;
				public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;
			}
		}
	}
}
