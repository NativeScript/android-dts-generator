/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module service {
		export module carrier {
			export class MessagePdu {
				public constructor();
				public constructor(param0: java.util.List);
				public getPdus(): java.util.List;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
