/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />

declare module android {
	export module widget {
		export class BaseExpandableListAdapter {
			public constructor();
			public registerDataSetObserver(param0: android.database.DataSetObserver): void;
			public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
			public notifyDataSetInvalidated(): void;
			public notifyDataSetChanged(): void;
			public areAllItemsEnabled(): boolean;
			public onGroupCollapsed(param0: number): void;
			public onGroupExpanded(param0: number): void;
			public getCombinedChildId(param0: number, param1: number): number;
			public getCombinedGroupId(param0: number): number;
			public isEmpty(): boolean;
			public getChildType(param0: number, param1: number): number;
			public getChildTypeCount(): number;
			public getGroupType(param0: number): number;
			public getGroupTypeCount(): number;
		}
	}
}
