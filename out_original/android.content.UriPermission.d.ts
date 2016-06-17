/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module content {
		export class UriPermission {
			public getUri(): android.net.Uri;
			public isReadPermission(): boolean;
			public isWritePermission(): boolean;
			public getPersistedTime(): number;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public static INVALID_TIME: number;
		}
	}
}
