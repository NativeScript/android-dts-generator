/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class PersistableBundle {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: android.os.PersistableBundle);
			public clone(): java.lang.Object;
			public putPersistableBundle(param0: string, param1: android.os.PersistableBundle): void;
			public getPersistableBundle(param0: string): android.os.PersistableBundle;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
			public static EMPTY: android.os.PersistableBundle;
		}
	}
}
