/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.job.JobInfo.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module app {
		export module job {
			export class JobScheduler {
				public constructor();
				public schedule(param0: android.app.job.JobInfo): number;
				public cancel(param0: number): void;
				public cancelAll(): void;
				public getAllPendingJobs(): java.util.List;
				public static RESULT_FAILURE: number;
				public static RESULT_SUCCESS: number;
			}
		}
	}
}
