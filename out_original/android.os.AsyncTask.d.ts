/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module android {
	export module os {
		export class AsyncTask {
			public constructor();
			public getStatus(): android.os.AsyncTask.Status;
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
			public execute(param0: native.Array<java.lang.Object>): android.os.AsyncTask;
			public executeOnExecutor(param0: java.util.concurrent.Executor, param1: native.Array<java.lang.Object>): android.os.AsyncTask;
			public static execute(param0: java.lang.Runnable): void;
			public publishProgress(param0: native.Array<java.lang.Object>): void;
			public static SERIAL_EXECUTOR: java.util.concurrent.Executor;
			public static THREAD_POOL_EXECUTOR: java.util.concurrent.Executor;
		}
		export module AsyncTask {
			export class Status {
				public static values(): native.Array<android.os.AsyncTask.Status>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.os.AsyncTask.Status;
				public static FINISHED: android.os.AsyncTask.Status;
				public static PENDING: android.os.AsyncTask.Status;
				public static RUNNING: android.os.AsyncTask.Status;
			}
		}
	}
}
