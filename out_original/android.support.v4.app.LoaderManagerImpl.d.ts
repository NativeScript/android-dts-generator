/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.content.Loader.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class LoaderManagerImpl {
					public initLoader(param0: number, param1: android.os.Bundle, param2: android.support.v4.app.LoaderManager.LoaderCallbacks): android.support.v4.content.Loader;
					public restartLoader(param0: number, param1: android.os.Bundle, param2: android.support.v4.app.LoaderManager.LoaderCallbacks): android.support.v4.content.Loader;
					public destroyLoader(param0: number): void;
					public getLoader(param0: number): android.support.v4.content.Loader;
					public toString(): string;
					public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
					public hasRunningLoaders(): boolean;
				}
				export module LoaderManagerImpl {
					export class LoaderInfo {
						public constructor();
						public constructor(param0: android.support.v4.app.LoaderManagerImpl, param1: number, param2: android.os.Bundle, param3: android.support.v4.app.LoaderManager.LoaderCallbacks);
						public onLoadCanceled(param0: android.support.v4.content.Loader): void;
						public onLoadComplete(param0: android.support.v4.content.Loader, param1: java.lang.Object): void;
						public toString(): string;
						public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
					}
				}
			}
		}
	}
}
