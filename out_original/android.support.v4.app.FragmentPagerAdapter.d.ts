/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./android.support.v4.app.FragmentManager.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class FragmentPagerAdapter {
					public constructor();
					public constructor(param0: android.support.v4.app.FragmentManager);
					public getItem(param0: number): android.support.v4.app.Fragment;
					public startUpdate(param0: android.view.View): void;
					public startUpdate(param0: android.view.ViewGroup): void;
					public instantiateItem(param0: android.view.View, param1: number): java.lang.Object;
					public instantiateItem(param0: android.view.ViewGroup, param1: number): java.lang.Object;
					public destroyItem(param0: android.view.View, param1: number, param2: java.lang.Object): void;
					public destroyItem(param0: android.view.ViewGroup, param1: number, param2: java.lang.Object): void;
					public setPrimaryItem(param0: android.view.View, param1: number, param2: java.lang.Object): void;
					public setPrimaryItem(param0: android.view.ViewGroup, param1: number, param2: java.lang.Object): void;
					public finishUpdate(param0: android.view.View): void;
					public finishUpdate(param0: android.view.ViewGroup): void;
					public isViewFromObject(param0: android.view.View, param1: java.lang.Object): boolean;
					public saveState(): android.os.Parcelable;
					public restoreState(param0: android.os.Parcelable, param1: java.lang.ClassLoader): void;
					public getItemId(param0: number): number;
				}
			}
		}
	}
}
