/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./android.support.v4.app.FragmentHostCallback.d.ts" />
/// <reference path="./android.support.v4.app.FragmentManager.d.ts" />
/// <reference path="./android.support.v4.app.LoaderManager.d.ts" />
/// <reference path="./android.support.v4.util.SimpleArrayMap.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class FragmentController {
					public static createController(param0: android.support.v4.app.FragmentHostCallback): android.support.v4.app.FragmentController;
					public getSupportFragmentManager(): android.support.v4.app.FragmentManager;
					public getSupportLoaderManager(): android.support.v4.app.LoaderManager;
					public getActiveFragmentsCount(): number;
					public getActiveFragments(param0: java.util.List): java.util.List;
					public attachHost(param0: android.support.v4.app.Fragment): void;
					public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
					public noteStateNotSaved(): void;
					public saveAllState(): android.os.Parcelable;
					public restoreAllState(param0: android.os.Parcelable, param1: java.util.List): void;
					public retainNonConfig(): java.util.List;
					public dispatchCreate(): void;
					public dispatchActivityCreated(): void;
					public dispatchStart(): void;
					public dispatchResume(): void;
					public dispatchPause(): void;
					public dispatchStop(): void;
					public dispatchReallyStop(): void;
					public dispatchDestroyView(): void;
					public dispatchDestroy(): void;
					public dispatchConfigurationChanged(param0: android.content.res.Configuration): void;
					public dispatchLowMemory(): void;
					public dispatchCreateOptionsMenu(param0: android.view.Menu, param1: android.view.MenuInflater): boolean;
					public dispatchPrepareOptionsMenu(param0: android.view.Menu): boolean;
					public dispatchOptionsItemSelected(param0: android.view.MenuItem): boolean;
					public dispatchContextItemSelected(param0: android.view.MenuItem): boolean;
					public dispatchOptionsMenuClosed(param0: android.view.Menu): void;
					public execPendingActions(): boolean;
					public doLoaderStart(): void;
					public doLoaderStop(param0: boolean): void;
					public doLoaderRetain(): void;
					public doLoaderDestroy(): void;
					public reportLoaderStart(): void;
					public retainLoaderNonConfig(): android.support.v4.util.SimpleArrayMap;
					public restoreLoaderNonConfig(param0: android.support.v4.util.SimpleArrayMap): void;
					public dumpLoaders(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				}
			}
		}
	}
}
