/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
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
			public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
		}
	}
}
