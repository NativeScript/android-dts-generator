/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class PagerAdapter {
					public constructor();
					public getCount(): number;
					public startUpdate(param0: android.view.ViewGroup): void;
					public instantiateItem(param0: android.view.ViewGroup, param1: number): java.lang.Object;
					public destroyItem(param0: android.view.ViewGroup, param1: number, param2: java.lang.Object): void;
					public setPrimaryItem(param0: android.view.ViewGroup, param1: number, param2: java.lang.Object): void;
					public finishUpdate(param0: android.view.ViewGroup): void;
					public startUpdate(param0: android.view.View): void;
					public instantiateItem(param0: android.view.View, param1: number): java.lang.Object;
					public destroyItem(param0: android.view.View, param1: number, param2: java.lang.Object): void;
					public setPrimaryItem(param0: android.view.View, param1: number, param2: java.lang.Object): void;
					public finishUpdate(param0: android.view.View): void;
					public isViewFromObject(param0: android.view.View, param1: java.lang.Object): boolean;
					public saveState(): android.os.Parcelable;
					public restoreState(param0: android.os.Parcelable, param1: java.lang.ClassLoader): void;
					public getItemPosition(param0: java.lang.Object): number;
					public notifyDataSetChanged(): void;
					public registerDataSetObserver(param0: android.database.DataSetObserver): void;
					public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
					public getPageTitle(param0: number): string;
					public getPageWidth(param0: number): number;
					public static POSITION_UNCHANGED: number;
					public static POSITION_NONE: number;
				}
			}
		}
	}
}
