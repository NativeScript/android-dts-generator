/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuItemWrapperICS.d.ts" />
/// <reference path="./android.view.ActionProvider.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuItemWrapperJB {
					}
					export module MenuItemWrapperJB {
						export class ActionProviderWrapperJB {
							public constructor(param0: android.support.v7.view.menu.MenuItemWrapperICS, param1: android.content.Context, param2: android.view.ActionProvider);
							public constructor(param0: android.content.Context);
							public constructor();
							public constructor(param0: android.support.v7.view.menu.MenuItemWrapperJB, param1: android.content.Context, param2: android.view.ActionProvider);
							public onCreateActionView(): android.view.View;
							public onCreateActionView(param0: android.view.MenuItem): android.view.View;
							public overridesItemVisibility(): boolean;
							public isVisible(): boolean;
							public refreshVisibility(): void;
							public setVisibilityListener(param0: android.support.v4.view.ActionProvider.VisibilityListener): void;
							public onActionProviderVisibilityChanged(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}
