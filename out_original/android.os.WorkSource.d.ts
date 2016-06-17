/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module os {
		export class WorkSource {
			public constructor();
			public constructor(param0: android.os.WorkSource);
			public clear(): void;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public diff(param0: android.os.WorkSource): boolean;
			public set(param0: android.os.WorkSource): void;
			public add(param0: android.os.WorkSource): boolean;
			public remove(param0: android.os.WorkSource): boolean;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
