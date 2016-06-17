/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.job.JobParameters.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />

declare module android {
	export module app {
		export module job {
			export class JobService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onStartJob(param0: android.app.job.JobParameters): boolean;
				public onStopJob(param0: android.app.job.JobParameters): boolean;
				public jobFinished(param0: android.app.job.JobParameters, param1: boolean): void;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public static PERMISSION_BIND: string;
			}
		}
	}
}
