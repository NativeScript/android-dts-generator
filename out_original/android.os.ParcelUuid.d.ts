/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />

declare module android {
	export module os {
		export class ParcelUuid {
			public constructor();
			public constructor(param0: java.util.UUID);
			public static fromString(param0: string): android.os.ParcelUuid;
			public getUuid(): java.util.UUID;
			public toString(): string;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
