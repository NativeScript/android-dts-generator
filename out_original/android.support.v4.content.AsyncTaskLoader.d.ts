/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class AsyncTaskLoader {
					public constructor();
					public constructor(param0: android.content.Context);
					public setUpdateThrottle(param0: number): void;
					public onForceLoad(): void;
					public onCancelLoad(): boolean;
					public onCanceled(param0: java.lang.Object): void;
					public loadInBackground(): java.lang.Object;
					public onLoadInBackground(): java.lang.Object;
					public cancelLoadInBackground(): void;
					public isLoadInBackgroundCanceled(): boolean;
					public waitForLoader(): void;
					public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				}
				export module AsyncTaskLoader {
					export class LoadTask {
						public doInBackground(param0: native.Array<java.lang.Object>): java.lang.Object;
						public doInBackground(param0: native.Array<java.lang.Void>): java.lang.Object;
						public onPostExecute(param0: java.lang.Object): void;
						public onCancelled(): void;
						public onCancelled(param0: java.lang.Object): void;
						public run(): void;
						public waitForLoader(): void;
					}
				}
			}
		}
	}
}
