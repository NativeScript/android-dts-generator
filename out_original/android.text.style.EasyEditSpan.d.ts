/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module text {
		export module style {
			export class EasyEditSpan {
				public constructor();
				public constructor(param0: android.app.PendingIntent);
				public constructor(param0: android.os.Parcel);
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getSpanTypeId(): number;
				public static EXTRA_TEXT_CHANGED_TYPE: string;
				public static TEXT_DELETED: number;
				public static TEXT_MODIFIED: number;
			}
		}
	}
}
