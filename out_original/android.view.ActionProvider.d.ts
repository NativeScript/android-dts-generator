/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module view {
		export class ActionProvider {
			public constructor();
			public constructor(param0: android.content.Context);
			public onCreateActionView(): android.view.View;
			public onCreateActionView(param0: android.view.MenuItem): android.view.View;
			public overridesItemVisibility(): boolean;
			public isVisible(): boolean;
			public refreshVisibility(): void;
			public onPerformDefaultAction(): boolean;
			public hasSubMenu(): boolean;
			public onPrepareSubMenu(param0: android.view.SubMenu): void;
			public setVisibilityListener(param0: android.view.ActionProvider.VisibilityListener): void;
		}
		export module ActionProvider {
			export class VisibilityListener {
				public onActionProviderVisibilityChanged(param0: boolean): void;
			}
		}
	}
}
