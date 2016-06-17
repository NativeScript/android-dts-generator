/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./android.widget.FilterQueryProvider.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module widget {
		export class CursorTreeAdapter {
			public constructor();
			public constructor(param0: android.database.Cursor, param1: android.content.Context);
			public constructor(param0: android.database.Cursor, param1: android.content.Context, param2: boolean);
			public getChildrenCursor(param0: android.database.Cursor): android.database.Cursor;
			public setGroupCursor(param0: android.database.Cursor): void;
			public setChildrenCursor(param0: number, param1: android.database.Cursor): void;
			public getChild(param0: number, param1: number): android.database.Cursor;
			public getChildId(param0: number, param1: number): number;
			public getChildrenCount(param0: number): number;
			public getGroup(param0: number): android.database.Cursor;
			public getGroupCount(): number;
			public getGroupId(param0: number): number;
			public getGroupView(param0: number, param1: boolean, param2: android.view.View, param3: android.view.ViewGroup): android.view.View;
			public newGroupView(param0: android.content.Context, param1: android.database.Cursor, param2: boolean, param3: android.view.ViewGroup): android.view.View;
			public bindGroupView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor, param3: boolean): void;
			public getChildView(param0: number, param1: number, param2: boolean, param3: android.view.View, param4: android.view.ViewGroup): android.view.View;
			public newChildView(param0: android.content.Context, param1: android.database.Cursor, param2: boolean, param3: android.view.ViewGroup): android.view.View;
			public bindChildView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor, param3: boolean): void;
			public isChildSelectable(param0: number, param1: number): boolean;
			public hasStableIds(): boolean;
			public notifyDataSetChanged(): void;
			public notifyDataSetChanged(param0: boolean): void;
			public notifyDataSetInvalidated(): void;
			public onGroupCollapsed(param0: number): void;
			public convertToString(param0: android.database.Cursor): string;
			public runQueryOnBackgroundThread(param0: string): android.database.Cursor;
			public getFilter(): android.widget.Filter;
			public getFilterQueryProvider(): android.widget.FilterQueryProvider;
			public setFilterQueryProvider(param0: android.widget.FilterQueryProvider): void;
			public changeCursor(param0: android.database.Cursor): void;
			public getCursor(): android.database.Cursor;
		}
	}
}
