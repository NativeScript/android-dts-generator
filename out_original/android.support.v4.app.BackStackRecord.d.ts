/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./android.support.v4.app.FragmentManagerImpl.d.ts" />
/// <reference path="./android.support.v4.app.FragmentTransaction.d.ts" />
/// <reference path="./android.support.v4.util.ArrayMap.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class BackStackRecord {
					public toString(): string;
					public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
					public dump(param0: string, param1: java.io.PrintWriter, param2: boolean): void;
					public constructor();
					public constructor(param0: android.support.v4.app.FragmentManagerImpl);
					public getId(): number;
					public getBreadCrumbTitleRes(): number;
					public getBreadCrumbShortTitleRes(): number;
					public getBreadCrumbTitle(): string;
					public getBreadCrumbShortTitle(): string;
					public add(param0: number, param1: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public add(param0: number, param1: android.support.v4.app.Fragment, param2: string): android.support.v4.app.FragmentTransaction;
					public add(param0: android.support.v4.app.Fragment, param1: string): android.support.v4.app.FragmentTransaction;
					public add(param0: number, param1: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public add(param0: number, param1: android.support.v4.app.Fragment, param2: string): android.support.v4.app.FragmentTransaction;
					public replace(param0: number, param1: android.support.v4.app.Fragment, param2: string): android.support.v4.app.FragmentTransaction;
					public replace(param0: number, param1: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public replace(param0: number, param1: android.support.v4.app.Fragment, param2: string): android.support.v4.app.FragmentTransaction;
					public remove(param0: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public hide(param0: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public show(param0: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public detach(param0: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public attach(param0: android.support.v4.app.Fragment): android.support.v4.app.FragmentTransaction;
					public setCustomAnimations(param0: number, param1: number, param2: number, param3: number): android.support.v4.app.FragmentTransaction;
					public setCustomAnimations(param0: number, param1: number): android.support.v4.app.FragmentTransaction;
					public setCustomAnimations(param0: number, param1: number, param2: number, param3: number): android.support.v4.app.FragmentTransaction;
					public setTransition(param0: number): android.support.v4.app.FragmentTransaction;
					public addSharedElement(param0: android.view.View, param1: string): android.support.v4.app.FragmentTransaction;
					public setTransitionStyle(param0: number): android.support.v4.app.FragmentTransaction;
					public addToBackStack(param0: string): android.support.v4.app.FragmentTransaction;
					public isAddToBackStackAllowed(): boolean;
					public disallowAddToBackStack(): android.support.v4.app.FragmentTransaction;
					public setBreadCrumbTitle(param0: string): android.support.v4.app.FragmentTransaction;
					public setBreadCrumbTitle(param0: number): android.support.v4.app.FragmentTransaction;
					public setBreadCrumbTitle(param0: string): android.support.v4.app.FragmentTransaction;
					public setBreadCrumbShortTitle(param0: string): android.support.v4.app.FragmentTransaction;
					public setBreadCrumbShortTitle(param0: number): android.support.v4.app.FragmentTransaction;
					public setBreadCrumbShortTitle(param0: string): android.support.v4.app.FragmentTransaction;
					public commit(): number;
					public commitAllowingStateLoss(): number;
					public run(): void;
					public calculateBackFragments(param0: android.util.SparseArray, param1: android.util.SparseArray): void;
					public popFromBackStack(param0: boolean, param1: android.support.v4.app.BackStackRecord.TransitionState, param2: android.util.SparseArray, param3: android.util.SparseArray): android.support.v4.app.BackStackRecord.TransitionState;
					public getName(): string;
					public getTransition(): number;
					public getTransitionStyle(): number;
					public isEmpty(): boolean;
				}
				export module BackStackRecord {
					export class Op {
					}
					export class TransitionState {
						public constructor();
						public constructor(param0: android.support.v4.app.BackStackRecord);
						public nameOverrides: android.support.v4.util.ArrayMap;
						public hiddenFragmentViews: java.util.ArrayList;
						public enteringEpicenterView: android.support.v4.app.FragmentTransitionCompat21.EpicenterView;
						public nonExistentView: android.view.View;
					}
				}
			}
		}
	}
}
