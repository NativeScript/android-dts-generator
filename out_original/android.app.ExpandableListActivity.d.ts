/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ExpandableListAdapter.d.ts" />
/// <reference path="./android.widget.ExpandableListView.d.ts" />

declare module android {
	export module app {
		export class ExpandableListActivity {
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
			public constructor(param0: android.content.Context);
			public constructor();
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public onChildClick(param0: android.widget.ExpandableListView, param1: android.view.View, param2: number, param3: number, param4: number): boolean;
			public onGroupCollapse(param0: number): void;
			public onGroupExpand(param0: number): void;
			public onRestoreInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onRestoreInstanceState(param0: android.os.Bundle): void;
			public onContentChanged(): void;
			public setListAdapter(param0: android.widget.ExpandableListAdapter): void;
			public getExpandableListView(): android.widget.ExpandableListView;
			public getExpandableListAdapter(): android.widget.ExpandableListAdapter;
			public getSelectedId(): number;
			public getSelectedPosition(): number;
			public setSelectedChild(param0: number, param1: number, param2: boolean): boolean;
			public setSelectedGroup(param0: number): void;
		}
	}
}
