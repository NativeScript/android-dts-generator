/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module telephony {
		export class IccOpenLogicalChannelResponse {
			public getChannel(): number;
			public getStatus(): number;
			public getSelectResponse(): native.Array<number>;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
			public static INVALID_CHANNEL: number;
			public static STATUS_MISSING_RESOURCE: number;
			public static STATUS_NO_ERROR: number;
			public static STATUS_NO_SUCH_ELEMENT: number;
			public static STATUS_UNKNOWN_ERROR: number;
		}
	}
}
