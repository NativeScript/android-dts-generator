/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module widget {
		export class PopupMenu {
			public constructor();
			public constructor(param0: android.content.Context, param1: android.view.View);
			public constructor(param0: android.content.Context, param1: android.view.View, param2: number);
			public constructor(param0: android.content.Context, param1: android.view.View, param2: number, param3: number, param4: number);
			public setGravity(param0: number): void;
			public getGravity(): number;
			public getDragToOpenListener(): android.view.View.OnTouchListener;
			public getMenu(): android.view.Menu;
			public getMenuInflater(): android.view.MenuInflater;
			public inflate(param0: number): void;
			public show(): void;
			public dismiss(): void;
			public setOnMenuItemClickListener(param0: android.widget.PopupMenu.OnMenuItemClickListener): void;
			public setOnDismissListener(param0: android.widget.PopupMenu.OnDismissListener): void;
		}
		export module PopupMenu {
			export class OnDismissListener {
				public onDismiss(param0: android.widget.PopupMenu): void;
			}
			export class OnMenuItemClickListener {
				public onMenuItemClick(param0: android.view.MenuItem): boolean;
			}
		}
	}
}
