/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./android.support.v4.app.FragmentTransaction.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class FragmentManager {
					public constructor();
					public beginTransaction(): android.support.v4.app.FragmentTransaction;
					public openTransaction(): android.support.v4.app.FragmentTransaction;
					public executePendingTransactions(): boolean;
					public findFragmentById(param0: number): android.support.v4.app.Fragment;
					public findFragmentByTag(param0: string): android.support.v4.app.Fragment;
					public popBackStack(): void;
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
					public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
					public static enableDebugLogging(param0: boolean): void;
					public static POP_BACK_STACK_INCLUSIVE: number;
				}
				export module FragmentManager {
					export class BackStackEntry {
						public getId(): number;
						public getName(): string;
						public getBreadCrumbTitleRes(): number;
						public getBreadCrumbShortTitleRes(): number;
						public getBreadCrumbTitle(): string;
						public getBreadCrumbShortTitle(): string;
					}
					export class OnBackStackChangedListener {
						public onBackStackChanged(): void;
					}
				}
			}
		}
	}
}
