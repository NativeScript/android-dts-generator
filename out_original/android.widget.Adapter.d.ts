/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module widget {
		export class Adapter {
			public registerDataSetObserver(param0: android.database.DataSetObserver): void;
			public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
			public getCount(): number;
			public getItem(param0: number): java.lang.Object;
			public getItemId(param0: number): number;
			public hasStableIds(): boolean;
			public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
			public getItemViewType(param0: number): number;
			public getViewTypeCount(): number;
			public isEmpty(): boolean;
			public static IGNORE_ITEM_VIEW_TYPE: number;
			public static NO_SELECTION: number;
		}
	}
}
