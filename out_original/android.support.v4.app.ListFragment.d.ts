/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class ListFragment {
					public constructor();
					public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
					public onViewCreated(param0: android.view.View, param1: android.os.Bundle): void;
					public onDestroyView(): void;
					public onListItemClick(param0: android.widget.ListView, param1: android.view.View, param2: number, param3: number): void;
					public setListAdapter(param0: android.widget.ListAdapter): void;
					public setSelection(param0: number): void;
					public getSelectedItemPosition(): number;
					public getSelectedItemId(): number;
					public getListView(): android.widget.ListView;
					public setEmptyText(param0: string): void;
					public setListShown(param0: boolean): void;
					public setListShownNoAnimation(param0: boolean): void;
					public getListAdapter(): android.widget.ListAdapter;
				}
			}
		}
	}
}
