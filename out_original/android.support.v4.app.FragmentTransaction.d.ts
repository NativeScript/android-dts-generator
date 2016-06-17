/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class FragmentTransaction {
					public constructor();
					public add(param0: android.support.v4.app.Fragment, param1: string): android.support.v4.app.FragmentTransaction;
					public add(param0: number, param1: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public add(param0: number, param1: android.support.v4.app.Fragment, param2: string): android.support.v4.app.FragmentTransaction;
					public replace(param0: number, param1: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public replace(param0: number, param1: android.support.v4.app.Fragment, param2: string): android.support.v4.app.FragmentTransaction;
					public remove(param0: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public hide(param0: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public show(param0: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public detach(param0: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public attach(param0: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public isEmpty(): boolean;
					public setCustomAnimations(param0: number, param1: number): android.support.v4.app.FragmentTransaction;
					public setCustomAnimations(param0: number, param1: number, param2: number, param3: number): android.support.v4.app.FragmentTransaction;
					public addSharedElement(param0: android.view.View, param1: string): android.support.v4.app.FragmentTransaction;
					public setTransition(param0: number): android.support.v4.app.FragmentTransaction;
					public setTransitionStyle(param0: number): android.support.v4.app.FragmentTransaction;
					public addToBackStack(param0: string): android.support.v4.app.FragmentTransaction;
					public isAddToBackStackAllowed(): boolean;
					public disallowAddToBackStack(): android.support.v4.app.FragmentTransaction;
					public setBreadCrumbTitle(param0: number): android.support.v4.app.FragmentTransaction;
					public setBreadCrumbTitle(param0: string): android.support.v4.app.FragmentTransaction;
					public setBreadCrumbShortTitle(param0: number): android.support.v4.app.FragmentTransaction;
					public setBreadCrumbShortTitle(param0: string): android.support.v4.app.FragmentTransaction;
					public commit(): number;
					public commitAllowingStateLoss(): number;
					public static TRANSIT_ENTER_MASK: number;
					public static TRANSIT_EXIT_MASK: number;
					public static TRANSIT_UNSET: number;
					public static TRANSIT_NONE: number;
					public static TRANSIT_FRAGMENT_OPEN: number;
					public static TRANSIT_FRAGMENT_CLOSE: number;
					public static TRANSIT_FRAGMENT_FADE: number;
				}
			}
		}
	}
}
