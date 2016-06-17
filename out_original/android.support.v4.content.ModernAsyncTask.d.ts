/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class ModernAsyncTask {
					public static setDefaultExecutor(param0: java.util.concurrent.Executor): void;
					public constructor();
					public getStatus(): android.support.v4.content.ModernAsyncTask.Status;
					public doInBackground(param0: native.Array<java.lang.Object>): java.lang.Object;
					public onPreExecute(): void;
					public onPostExecute(param0: java.lang.Object): void;
					public onProgressUpdate(param0: native.Array<java.lang.Object>): void;
					public onCancelled(param0: java.lang.Object): void;
					public onCancelled(): void;
					public isCancelled(): boolean;
					public cancel(param0: boolean): boolean;
					public get(): java.lang.Object;
					public get(param0: number, param1: java.util.concurrent.TimeUnit): java.lang.Object;
					public execute(param0: native.Array<java.lang.Object>): android.support.v4.content.ModernAsyncTask;
					public executeOnExecutor(param0: java.util.concurrent.Executor, param1: native.Array<java.lang.Object>): android.support.v4.content.ModernAsyncTask;
					public static execute(param0: java.lang.Runnable): void;
					public publishProgress(param0: native.Array<java.lang.Object>): void;
					public static THREAD_POOL_EXECUTOR: java.util.concurrent.Executor;
				}
				export module ModernAsyncTask {
					export class AsyncTaskResult {
					}
					export class InternalHandler {
						public constructor(param0: android.os.Handler.Callback);
						public constructor(param0: android.os.Looper);
						public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);
						public constructor();
						public handleMessage(param0: android.os.Message): void;
					}
					export class Status {
						public static values(): native.Array<android.support.v4.content.ModernAsyncTask.Status>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): android.support.v4.content.ModernAsyncTask.Status;
						public static PENDING: android.support.v4.content.ModernAsyncTask.Status;
						public static RUNNING: android.support.v4.content.ModernAsyncTask.Status;
						public static FINISHED: android.support.v4.content.ModernAsyncTask.Status;
					}
					export class WorkerRunnable {
					}
				}
			}
		}
	}
}
