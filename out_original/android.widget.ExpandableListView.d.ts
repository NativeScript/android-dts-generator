/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./android.widget.ExpandableListAdapter.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />

declare module android {
	export module widget {
		export class ExpandableListView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public onRtlPropertiesChanged(param0: number): void;
			public dispatchDraw(param0: android.graphics.Canvas): void;
			public setChildDivider(param0: android.graphics.drawable.Drawable): void;
			public setAdapter(param0: android.widget.Adapter): void;
			public setAdapter(param0: android.widget.ListAdapter): void;
			public getAdapter(): android.widget.Adapter;
			public getAdapter(): android.widget.ListAdapter;
			public setOnItemClickListener(param0: android.widget.AdapterView.OnItemClickListener): void;
			public setAdapter(param0: android.widget.ExpandableListAdapter): void;
			public getExpandableListAdapter(): android.widget.ExpandableListAdapter;
			public performItemClick(param0: android.view.View, param1: number, param2: number): boolean;
			public expandGroup(param0: number): boolean;
			public expandGroup(param0: number, param1: boolean): boolean;
			public collapseGroup(param0: number): boolean;
			public setOnGroupCollapseListener(param0: android.widget.ExpandableListView.OnGroupCollapseListener): void;
			public setOnGroupExpandListener(param0: android.widget.ExpandableListView.OnGroupExpandListener): void;
			public setOnGroupClickListener(param0: android.widget.ExpandableListView.OnGroupClickListener): void;
			public setOnChildClickListener(param0: android.widget.ExpandableListView.OnChildClickListener): void;
			public getExpandableListPosition(param0: number): number;
			public getFlatListPosition(param0: number): number;
			public getSelectedPosition(): number;
			public getSelectedId(): number;
			public setSelectedGroup(param0: number): void;
			public setSelectedChild(param0: number, param1: number, param2: boolean): boolean;
			public isGroupExpanded(param0: number): boolean;
			public static getPackedPositionType(param0: number): number;
			public static getPackedPositionGroup(param0: number): number;
			public static getPackedPositionChild(param0: number): number;
			public static getPackedPositionForChild(param0: number, param1: number): number;
			public static getPackedPositionForGroup(param0: number): number;
			public setChildIndicator(param0: android.graphics.drawable.Drawable): void;
			public setChildIndicatorBounds(param0: number, param1: number): void;
			public setChildIndicatorBoundsRelative(param0: number, param1: number): void;
			public setGroupIndicator(param0: android.graphics.drawable.Drawable): void;
			public setIndicatorBounds(param0: number, param1: number): void;
			public setIndicatorBoundsRelative(param0: number, param1: number): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
			public getAccessibilityClassName(): string;
			public static CHILD_INDICATOR_INHERIT: number;
			public static PACKED_POSITION_TYPE_CHILD: number;
			public static PACKED_POSITION_TYPE_GROUP: number;
			public static PACKED_POSITION_TYPE_NULL: number;
			public static PACKED_POSITION_VALUE_NULL: number;
		}
		export module ExpandableListView {
			export class ExpandableListContextMenuInfo {
				public constructor();
				public constructor(param0: android.view.View, param1: number, param2: number);
				public id: number;
				public packedPosition: number;
				public targetView: android.view.View;
			}
			export class OnChildClickListener {
				public onChildClick(param0: android.widget.ExpandableListView, param1: android.view.View, param2: number, param3: number, param4: number): boolean;
			}
			export class OnGroupClickListener {
				public onGroupClick(param0: android.widget.ExpandableListView, param1: android.view.View, param2: number, param3: number): boolean;
			}
			export class OnGroupCollapseListener {
				public onGroupCollapse(param0: number): void;
			}
			export class OnGroupExpandListener {
				public onGroupExpand(param0: number): void;
			}
		}
	}
}
