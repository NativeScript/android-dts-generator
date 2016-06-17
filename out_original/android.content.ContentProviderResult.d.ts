/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />

declare module android {
	export module content {
		export class ContentProviderResult {
			public constructor();
			public constructor(param0: android.net.Uri);
			public constructor(param0: number);
			public constructor(param0: android.os.Parcel);
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public describeContents(): number;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
			public count: java.lang.Integer;
			public uri: android.net.Uri;
		}
	}
}
