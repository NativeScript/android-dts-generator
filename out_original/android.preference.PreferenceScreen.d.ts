/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />

declare module android {
	export module preference {
		export class PreferenceScreen {
			public getRootAdapter(): android.widget.ListAdapter;
			public onCreateRootAdapter(): android.widget.ListAdapter;
			public bind(param0: android.widget.ListView): void;
			public onClick(): void;
			public onDismiss(param0: android.content.DialogInterface): void;
			public getDialog(): android.app.Dialog;
			public onItemClick(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;
			public isOnSameScreenAsChildren(): boolean;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
		}
	}
}
