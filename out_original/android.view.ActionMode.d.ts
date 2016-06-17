/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module view {
		export class ActionMode {
			public constructor();
			public setTag(param0: java.lang.Object): void;
			public getTag(): java.lang.Object;
			public setTitle(param0: string): void;
			public setTitle(param0: number): void;
			public setSubtitle(param0: string): void;
			public setSubtitle(param0: number): void;
			public setTitleOptionalHint(param0: boolean): void;
			public getTitleOptionalHint(): boolean;
			public isTitleOptional(): boolean;
			public setCustomView(param0: android.view.View): void;
			public setType(param0: number): void;
			public getType(): number;
			public invalidate(): void;
			public invalidateContentRect(): void;
			public hide(param0: number): void;
			public finish(): void;
			public getMenu(): android.view.Menu;
			public getTitle(): string;
			public getSubtitle(): string;
			public getCustomView(): android.view.View;
			public getMenuInflater(): android.view.MenuInflater;
			public onWindowFocusChanged(param0: boolean): void;
			public static DEFAULT_HIDE_DURATION: number;
			public static TYPE_FLOATING: number;
			public static TYPE_PRIMARY: number;
		}
		export module ActionMode {
			export class Callback {
				public onCreateActionMode(param0: android.view.ActionMode, param1: android.view.Menu): boolean;
				public onPrepareActionMode(param0: android.view.ActionMode, param1: android.view.Menu): boolean;
				public onActionItemClicked(param0: android.view.ActionMode, param1: android.view.MenuItem): boolean;
				public onDestroyActionMode(param0: android.view.ActionMode): void;
			}
			export class Callback2 {
				public constructor();
				public onGetContentRect(param0: android.view.ActionMode, param1: android.view.View, param2: android.graphics.Rect): void;
			}
		}
	}
}
