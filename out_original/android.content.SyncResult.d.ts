/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.SyncStats.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module content {
		export class SyncResult {
			public constructor();
			public hasHardError(): boolean;
			public hasSoftError(): boolean;
			public hasError(): boolean;
			public madeSomeProgress(): boolean;
			public clear(): void;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public toDebugString(): string;
			public static ALREADY_IN_PROGRESS: android.content.SyncResult;
			public static CREATOR: android.os.Parcelable.Creator;
			public databaseError: boolean;
			public delayUntil: number;
			public fullSyncRequested: boolean;
			public moreRecordsToGet: boolean;
			public partialSyncUnavailable: boolean;
			public stats: android.content.SyncStats;
			public syncAlreadyInProgress: boolean;
			public tooManyDeletions: boolean;
			public tooManyRetries: boolean;
		}
	}
}
