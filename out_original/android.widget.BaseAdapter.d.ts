/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module widget {
		export class BaseAdapter {
			public constructor();
			public hasStableIds(): boolean;
			public registerDataSetObserver(param0: android.database.DataSetObserver): void;
			public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
			public notifyDataSetChanged(): void;
			public notifyDataSetInvalidated(): void;
			public areAllItemsEnabled(): boolean;
			public isEnabled(param0: number): boolean;
			public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
			public getItemViewType(param0: number): number;
			public getViewTypeCount(): number;
			public isEmpty(): boolean;
		}
	}
}
