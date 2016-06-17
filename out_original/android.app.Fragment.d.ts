/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.Animator.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.FragmentManager.d.ts" />
/// <reference path="./android.app.LoaderManager.d.ts" />
/// <reference path="./android.app.SharedElementCallback.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module app {
		export class Fragment {
			public constructor();
			public static instantiate(param0: android.content.Context, param1: string): android.app.Fragment;
			public static instantiate(param0: android.content.Context, param1: string, param2: android.os.Bundle): android.app.Fragment;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public getId(): number;
			public getTag(): string;
			public setArguments(param0: android.os.Bundle): void;
			public getArguments(): android.os.Bundle;
			public setInitialSavedState(param0: android.app.Fragment.SavedState): void;
			public setTargetFragment(param0: android.app.Fragment, param1: number): void;
			public getTargetFragment(): android.app.Fragment;
			public getTargetRequestCode(): number;
			public getContext(): android.content.Context;
			public getActivity(): android.app.Activity;
			public getHost(): java.lang.Object;
			public getResources(): android.content.res.Resources;
			public getText(param0: number): string;
			public getString(param0: number): string;
			public getString(param0: number, param1: native.Array<java.lang.Object>): string;
			public getFragmentManager(): android.app.FragmentManager;
			public getChildFragmentManager(): android.app.FragmentManager;
			public getParentFragment(): android.app.Fragment;
			public isAdded(): boolean;
			public isDetached(): boolean;
			public isRemoving(): boolean;
			public isInLayout(): boolean;
			public isResumed(): boolean;
			public isVisible(): boolean;
			public isHidden(): boolean;
			public onHiddenChanged(param0: boolean): void;
			public setRetainInstance(param0: boolean): void;
			public getRetainInstance(): boolean;
			public setHasOptionsMenu(param0: boolean): void;
			public setMenuVisibility(param0: boolean): void;
			public setUserVisibleHint(param0: boolean): void;
			public getUserVisibleHint(): boolean;
			public getLoaderManager(): android.app.LoaderManager;
			public startActivity(param0: android.content.Intent): void;
			public startActivity(param0: android.content.Intent, param1: android.os.Bundle): void;
			public startActivityForResult(param0: android.content.Intent, param1: number): void;
			public startActivityForResult(param0: android.content.Intent, param1: number, param2: android.os.Bundle): void;
			public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
			public requestPermissions(param0: native.Array<string>, param1: number): void;
			public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
			public shouldShowRequestPermissionRationale(param0: string): boolean;
			public onInflate(param0: android.util.AttributeSet, param1: android.os.Bundle): void;
			public onInflate(param0: android.content.Context, param1: android.util.AttributeSet, param2: android.os.Bundle): void;
			public onInflate(param0: android.app.Activity, param1: android.util.AttributeSet, param2: android.os.Bundle): void;
			public onAttach(param0: android.content.Context): void;
			public onAttach(param0: android.app.Activity): void;
			public onCreateAnimator(param0: number, param1: boolean, param2: number): android.animation.Animator;
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
			public onTrimMemory(param0: number): void;
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
			public setEnterSharedElementCallback(param0: android.app.SharedElementCallback): void;
			public setExitSharedElementCallback(param0: android.app.SharedElementCallback): void;
			public setEnterTransition(param0: android.transition.Transition): void;
			public getEnterTransition(): android.transition.Transition;
			public setReturnTransition(param0: android.transition.Transition): void;
			public getReturnTransition(): android.transition.Transition;
			public setExitTransition(param0: android.transition.Transition): void;
			public getExitTransition(): android.transition.Transition;
			public setReenterTransition(param0: android.transition.Transition): void;
			public getReenterTransition(): android.transition.Transition;
			public setSharedElementEnterTransition(param0: android.transition.Transition): void;
			public getSharedElementEnterTransition(): android.transition.Transition;
			public setSharedElementReturnTransition(param0: android.transition.Transition): void;
			public getSharedElementReturnTransition(): android.transition.Transition;
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
				public constructor(param0: java.lang.Exception);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: string, param1: java.lang.Exception);
			}
			export class SavedState {
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.ClassLoaderCreator;
			}
		}
	}
}
