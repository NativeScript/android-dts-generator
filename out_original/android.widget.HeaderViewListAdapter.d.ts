/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module widget {
		export class HeaderViewListAdapter {
			public constructor();
			public constructor(param0: java.util.ArrayList, param1: java.util.ArrayList, param2: android.widget.ListAdapter);
			public getHeadersCount(): number;
			public getFootersCount(): number;
			public isEmpty(): boolean;
			public removeHeader(param0: android.view.View): boolean;
			public removeFooter(param0: android.view.View): boolean;
			public getCount(): number;
			public areAllItemsEnabled(): boolean;
			public isEnabled(param0: number): boolean;
			public getItem(param0: number): java.lang.Object;
			public getItemId(param0: number): number;
			public hasStableIds(): boolean;
			public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
			public getItemViewType(param0: number): number;
			public getViewTypeCount(): number;
			public registerDataSetObserver(param0: android.database.DataSetObserver): void;
			public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
			public getFilter(): android.widget.Filter;
			public getWrappedAdapter(): android.widget.ListAdapter;
		}
	}
}
