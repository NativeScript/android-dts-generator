/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module content {
		export class SyncStats {
			public constructor();
			public constructor(param0: android.os.Parcel);
			public toString(): string;
			public clear(): void;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public numAuthExceptions: number;
			public numConflictDetectedExceptions: number;
			public numDeletes: number;
			public numEntries: number;
			public numInserts: number;
			public numIoExceptions: number;
			public numParseExceptions: number;
			public numSkippedEntries: number;
			public numUpdates: number;
		}
	}
}
