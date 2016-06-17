/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />

declare module android {
	export module app {
		export class ListActivity {
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
			public constructor(param0: android.content.Context);
			public constructor();
			public onListItemClick(param0: android.widget.ListView, param1: android.view.View, param2: number, param3: number): void;
			public onRestoreInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onRestoreInstanceState(param0: android.os.Bundle): void;
			public onDestroy(): void;
			public onContentChanged(): void;
			public setListAdapter(param0: android.widget.ListAdapter): void;
			public setSelection(param0: number): void;
			public getSelectedItemPosition(): number;
			public getSelectedItemId(): number;
			public getListView(): android.widget.ListView;
			public getListAdapter(): android.widget.ListAdapter;
		}
	}
}
