/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module widget {
		export class ExpandableListAdapter {
			public registerDataSetObserver(param0: android.database.DataSetObserver): void;
			public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
			public getGroupCount(): number;
			public getChildrenCount(param0: number): number;
			public getGroup(param0: number): java.lang.Object;
			public getChild(param0: number, param1: number): java.lang.Object;
			public getGroupId(param0: number): number;
			public getChildId(param0: number, param1: number): number;
			public hasStableIds(): boolean;
			public getGroupView(param0: number, param1: boolean, param2: android.view.View, param3: android.view.ViewGroup): android.view.View;
			public getChildView(param0: number, param1: number, param2: boolean, param3: android.view.View, param4: android.view.ViewGroup): android.view.View;
			public isChildSelectable(param0: number, param1: number): boolean;
			public areAllItemsEnabled(): boolean;
			public isEmpty(): boolean;
			public onGroupExpanded(param0: number): void;
			public onGroupCollapsed(param0: number): void;
			public getCombinedChildId(param0: number, param1: number): number;
			public getCombinedGroupId(param0: number): number;
		}
	}
}
