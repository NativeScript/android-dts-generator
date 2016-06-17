/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module text {
		export module style {
			export class URLSpan {
				public constructor();
				public constructor(param0: string);
				public constructor(param0: android.os.Parcel);
				public getSpanTypeId(): number;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getURL(): string;
				public onClick(param0: android.view.View): void;
			}
		}
	}
}
