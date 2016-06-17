/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Loader.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class LoaderManager {
			public constructor();
			public initLoader(param0: number, param1: android.os.Bundle, param2: android.app.LoaderManager.LoaderCallbacks): android.content.Loader;
			public restartLoader(param0: number, param1: android.os.Bundle, param2: android.app.LoaderManager.LoaderCallbacks): android.content.Loader;
			public destroyLoader(param0: number): void;
			public getLoader(param0: number): android.content.Loader;
			public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
			public static enableDebugLogging(param0: boolean): void;
		}
		export module LoaderManager {
			export class LoaderCallbacks {
				public onCreateLoader(param0: number, param1: android.os.Bundle): android.content.Loader;
				public onLoadFinished(param0: android.content.Loader, param1: java.lang.Object): void;
				public onLoaderReset(param0: android.content.Loader): void;
			}
		}
	}
}
