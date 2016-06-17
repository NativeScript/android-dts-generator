/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />

declare module android {
	export module app {
		export module job {
			export class JobInfo {
				public getId(): number;
				public getExtras(): android.os.PersistableBundle;
				public getService(): android.content.ComponentName;
				public isRequireCharging(): boolean;
				public isRequireDeviceIdle(): boolean;
				public getNetworkType(): number;
				public getMinLatencyMillis(): number;
				public getMaxExecutionDelayMillis(): number;
				public isPeriodic(): boolean;
				public isPersisted(): boolean;
				public getIntervalMillis(): number;
				public getInitialBackoffMillis(): number;
				public getBackoffPolicy(): number;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public toString(): string;
				public static BACKOFF_POLICY_EXPONENTIAL: number;
				public static BACKOFF_POLICY_LINEAR: number;
				public static CREATOR: android.os.Parcelable.Creator;
				public static DEFAULT_INITIAL_BACKOFF_MILLIS: number;
				public static MAX_BACKOFF_DELAY_MILLIS: number;
				public static NETWORK_TYPE_ANY: number;
				public static NETWORK_TYPE_NONE: number;
				public static NETWORK_TYPE_UNMETERED: number;
			}
			export module JobInfo {
				export class Builder {
					public constructor();
					public constructor(param0: number, param1: android.content.ComponentName);
					public setExtras(param0: android.os.PersistableBundle): android.app.job.JobInfo.Builder;
					public setRequiredNetworkType(param0: number): android.app.job.JobInfo.Builder;
					public setRequiresCharging(param0: boolean): android.app.job.JobInfo.Builder;
					public setRequiresDeviceIdle(param0: boolean): android.app.job.JobInfo.Builder;
					public setPeriodic(param0: number): android.app.job.JobInfo.Builder;
					public setMinimumLatency(param0: number): android.app.job.JobInfo.Builder;
					public setOverrideDeadline(param0: number): android.app.job.JobInfo.Builder;
					public setBackoffCriteria(param0: number, param1: number): android.app.job.JobInfo.Builder;
					public setPersisted(param0: boolean): android.app.job.JobInfo.Builder;
					public build(): android.app.job.JobInfo;
				}
			}
		}
	}
}
