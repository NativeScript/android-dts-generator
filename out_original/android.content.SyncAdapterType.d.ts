/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class SyncAdapterType {
			public constructor();
			public constructor(param0: string, param1: string, param2: boolean, param3: boolean);
			public constructor(param0: android.os.Parcel);
			public supportsUploading(): boolean;
			public isUserVisible(): boolean;
			public allowParallelSyncs(): boolean;
			public isAlwaysSyncable(): boolean;
			public getSettingsActivity(): string;
			public static newKey(param0: string, param1: string): android.content.SyncAdapterType;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public accountType: string;
			public authority: string;
			public isKey: boolean;
		}
	}
}
