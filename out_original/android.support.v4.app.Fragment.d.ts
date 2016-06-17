/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.support.v4.app.FragmentActivity.d.ts" />
/// <reference path="./android.support.v4.app.FragmentManager.d.ts" />
/// <reference path="./android.support.v4.app.LoaderManager.d.ts" />
/// <reference path="./android.support.v4.app.SharedElementCallback.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class Fragment {
					public constructor();
					public static instantiate(param0: android.content.Context, param1: string): android.support.v4.app.Fragment;
					public static instantiate(param0: android.content.Context, param1: string, param2: android.os.Bundle): android.support.v4.app.Fragment;
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
					public toString(): string;
					public getId(): number;
					public getTag(): string;
					public setArguments(param0: android.os.Bundle): void;
					public getArguments(): android.os.Bundle;
					public setInitialSavedState(param0: android.support.v4.app.Fragment.SavedState): void;
					public setTargetFragment(param0: android.support.v4.app.Fragment, param1: number): void;
					public getTargetFragment(): android.support.v4.app.Fragment;
					public getTargetRequestCode(): number;
					public getContext(): android.content.Context;
					public getActivity(): android.support.v4.app.FragmentActivity;
					public getHost(): java.lang.Object;
					public getResources(): android.content.res.Resources;
					public getText(param0: number): string;
					public getString(param0: number): string;
					public getString(param0: number, param1: native.Array<java.lang.Object>): string;
					public getFragmentManager(): android.support.v4.app.FragmentManager;
					public getChildFragmentManager(): android.support.v4.app.FragmentManager;
					public getParentFragment(): android.support.v4.app.Fragment;
					public isAdded(): boolean;
					public isDetached(): boolean;
					public isRemoving(): boolean;
					public isInLayout(): boolean;
					public isResumed(): boolean;
					public isVisible(): boolean;
					public isHidden(): boolean;
					public hasOptionsMenu(): boolean;
					public isMenuVisible(): boolean;
					public onHiddenChanged(param0: boolean): void;
					public setRetainInstance(param0: boolean): void;
					public getRetainInstance(): boolean;
					public setHasOptionsMenu(param0: boolean): void;
					public setMenuVisibility(param0: boolean): void;
					public setUserVisibleHint(param0: boolean): void;
					public getUserVisibleHint(): boolean;
					public getLoaderManager(): android.support.v4.app.LoaderManager;
					public startActivity(param0: android.content.Intent): void;
					public startActivity(param0: android.content.Intent, param1: android.os.Bundle): void;
					public startActivityForResult(param0: android.content.Intent, param1: number): void;
					public startActivityForResult(param0: android.content.Intent, param1: number, param2: android.os.Bundle): void;
					public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
					public requestPermissions(param0: native.Array<string>, param1: number): void;
					public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
					public shouldShowRequestPermissionRationale(param0: string): boolean;
					public getLayoutInflater(param0: android.os.Bundle): android.view.LayoutInflater;
					public onInflate(param0: android.content.Context, param1: android.util.AttributeSet, param2: android.os.Bundle): void;
					public onInflate(param0: android.app.Activity, param1: android.util.AttributeSet, param2: android.os.Bundle): void;
					public onAttach(param0: android.content.Context): void;
					public onAttach(param0: android.app.Activity): void;
					public onCreateAnimation(param0: number, param1: boolean, param2: number): android.view.animation.Animation;
					public onCreate(param0: android.os.Bundle): void;
					public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
					public onViewCreated(param0: android.view.View, param1: android.os.Bundle): void;
					public getView(): android.view.View;
					public onActivityCreated(param0: android.os.Bundle): void;
					public onViewStateRestored(param0: android.os.Bundle): void;
					public onStart(): void;
					public onResume(): void;
					public onSaveInstanceState(param0: android.os.Bundle): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public onPause(): void;
					public onStop(): void;
					public onLowMemory(): void;
					public onDestroyView(): void;
					public onDestroy(): void;
					public onDetach(): void;
					public onCreateOptionsMenu(param0: android.view.Menu, param1: android.view.MenuInflater): void;
					public onPrepareOptionsMenu(param0: android.view.Menu): void;
					public onDestroyOptionsMenu(): void;
					public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
					public onOptionsMenuClosed(param0: android.view.Menu): void;
					public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
					public registerForContextMenu(param0: android.view.View): void;
					public unregisterForContextMenu(param0: android.view.View): void;
					public onContextItemSelected(param0: android.view.MenuItem): boolean;
					public setEnterSharedElementCallback(param0: android.support.v4.app.SharedElementCallback): void;
					public setExitSharedElementCallback(param0: android.support.v4.app.SharedElementCallback): void;
					public setEnterTransition(param0: java.lang.Object): void;
					public getEnterTransition(): java.lang.Object;
					public setReturnTransition(param0: java.lang.Object): void;
					public getReturnTransition(): java.lang.Object;
					public setExitTransition(param0: java.lang.Object): void;
					public getExitTransition(): java.lang.Object;
					public setReenterTransition(param0: java.lang.Object): void;
					public getReenterTransition(): java.lang.Object;
					public setSharedElementEnterTransition(param0: java.lang.Object): void;
					public getSharedElementEnterTransition(): java.lang.Object;
					public setSharedElementReturnTransition(param0: java.lang.Object): void;
					public getSharedElementReturnTransition(): java.lang.Object;
					public setAllowEnterTransitionOverlap(param0: boolean): void;
					public getAllowEnterTransitionOverlap(): boolean;
					public setAllowReturnTransitionOverlap(param0: boolean): void;
					public getAllowReturnTransitionOverlap(): boolean;
					public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				}
				export module Fragment {
					export class InstantiationException {
						public constructor();
						public constructor(param0: string);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string, param1: java.lang.Exception);
					}
					export class SavedState {
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public static CREATOR: android.os.Parcelable.Creator;
					}
				}
			}
		}
	}
}
