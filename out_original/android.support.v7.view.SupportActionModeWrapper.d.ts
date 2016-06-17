/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v7.view.ActionMode.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuInflater.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class SupportActionModeWrapper {
					public constructor();
					public constructor(param0: android.content.Context, param1: android.support.v7.view.ActionMode);
					public getTag(): java.lang.Object;
					public setTag(param0: java.lang.Object): void;
					public setTitle(param0: number): void;
					public setTitle(param0: string): void;
					public setSubtitle(param0: number): void;
					public setSubtitle(param0: string): void;
					public invalidate(): void;
					public finish(): void;
					public getMenu(): android.view.Menu;
					public getTitle(): string;
					public setTitle(param0: number): void;
					public getSubtitle(): string;
					public setSubtitle(param0: number): void;
					public getCustomView(): android.view.View;
					public setCustomView(param0: android.view.View): void;
					public getMenuInflater(): android.view.MenuInflater;
					public getTitleOptionalHint(): boolean;
					public setTitleOptionalHint(param0: boolean): void;
					public isTitleOptional(): boolean;
				}
				export module SupportActionModeWrapper {
					export class CallbackWrapper {
						public constructor();
						public constructor(param0: android.content.Context, param1: android.view.ActionMode.Callback);
						public onCreateActionMode(param0: android.support.v7.view.ActionMode, param1: android.view.Menu): boolean;
						public onPrepareActionMode(param0: android.support.v7.view.ActionMode, param1: android.view.Menu): boolean;
						public onActionItemClicked(param0: android.support.v7.view.ActionMode, param1: android.view.MenuItem): boolean;
						public onDestroyActionMode(param0: android.support.v7.view.ActionMode): void;
						public getActionModeWrapper(param0: android.support.v7.view.ActionMode): android.view.ActionMode;
					}
				}
			}
		}
	}
}
