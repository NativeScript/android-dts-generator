/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.app.BackStackRecord.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./android.support.v4.app.FragmentContainer.d.ts" />
/// <reference path="./android.support.v4.app.FragmentHostCallback.d.ts" />
/// <reference path="./android.support.v4.app.FragmentTransaction.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class FragmentManagerImpl {
					public beginTransaction(): android.support.v4.app.FragmentTransaction;
					public executePendingTransactions(): boolean;
					public popBackStack(param0: string, param1: number): void;
					public popBackStack(param0: number, param1: number): void;
					public popBackStack(): void;
					public popBackStackImmediate(param0: string, param1: number): boolean;
					public popBackStackImmediate(param0: number, param1: number): boolean;
					public popBackStackImmediate(): boolean;
					public popBackStack(param0: string, param1: number): void;
					public popBackStackImmediate(param0: string, param1: number): boolean;
					public popBackStack(param0: number, param1: number): void;
					public popBackStackImmediate(param0: number, param1: number): boolean;
					public getBackStackEntryCount(): number;
					public getBackStackEntryAt(param0: number): android.support.v4.app.FragmentManager.BackStackEntry;
					public addOnBackStackChangedListener(param0: android.support.v4.app.FragmentManager.OnBackStackChangedListener): void;
					public removeOnBackStackChangedListener(param0: android.support.v4.app.FragmentManager.OnBackStackChangedListener): void;
					public putFragment(param0: android.os.Bundle, param1: string, param2: android.support.v4.app.Fragment): void;
					public getFragment(param0: android.os.Bundle, param1: string): android.support.v4.app.Fragment;
					public getFragments(): java.util.List;
					public saveFragmentInstanceState(param0: android.support.v4.app.Fragment): android.support.v4.app.Fragment.SavedState;
					public isDestroyed(): boolean;
					public toString(): string;
					public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
					public performPendingDeferredStart(param0: android.support.v4.app.Fragment): void;
					public addFragment(param0: android.support.v4.app.Fragment, param1: boolean): void;
					public removeFragment(param0: android.support.v4.app.Fragment, param1: number, param2: number): void;
					public hideFragment(param0: android.support.v4.app.Fragment, param1: number, param2: number): void;
					public showFragment(param0: android.support.v4.app.Fragment, param1: number, param2: number): void;
					public detachFragment(param0: android.support.v4.app.Fragment, param1: number, param2: number): void;
					public attachFragment(param0: android.support.v4.app.Fragment, param1: number, param2: number): void;
					public findFragmentById(param0: number): android.support.v4.app.Fragment;
					public findFragmentByTag(param0: string): android.support.v4.app.Fragment;
					public findFragmentByWho(param0: string): android.support.v4.app.Fragment;
					public enqueueAction(param0: java.lang.Runnable, param1: boolean): void;
					public allocBackStackIndex(param0: android.support.v4.app.BackStackRecord): number;
					public setBackStackIndex(param0: number, param1: android.support.v4.app.BackStackRecord): void;
					public freeBackStackIndex(param0: number): void;
					public execPendingActions(): boolean;
					public attachController(param0: android.support.v4.app.FragmentHostCallback, param1: android.support.v4.app.FragmentContainer, param2: android.support.v4.app.Fragment): void;
					public noteStateNotSaved(): void;
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
					public static reverseTransit(param0: number): number;
					public static transitToStyleIndex(param0: number, param1: boolean): number;
					public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
					public static ANIM_STYLE_OPEN_ENTER: number;
					public static ANIM_STYLE_OPEN_EXIT: number;
					public static ANIM_STYLE_CLOSE_ENTER: number;
					public static ANIM_STYLE_CLOSE_EXIT: number;
					public static ANIM_STYLE_FADE_ENTER: number;
					public static ANIM_STYLE_FADE_EXIT: number;
				}
				export module FragmentManagerImpl {
					export class AnimateOnHWLayerIfNeededListener {
						public constructor();
						public constructor(param0: android.view.View, param1: android.view.animation.Animation);
						public constructor(param0: android.view.View, param1: android.view.animation.Animation, param2: android.view.animation.Animation.AnimationListener);
						public onAnimationStart(param0: android.view.animation.Animation): void;
						public onAnimationEnd(param0: android.view.animation.Animation): void;
						public onAnimationRepeat(param0: android.view.animation.Animation): void;
					}
					export class FragmentTag {
						public static Fragment: native.Array<number>;
						public static Fragment_id: number;
						public static Fragment_name: number;
						public static Fragment_tag: number;
					}
				}
			}
		}
	}
}
