/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class ActionBarPolicy {
					public static get(param0: android.content.Context): android.support.v7.view.ActionBarPolicy;
					public getMaxActionButtons(): number;
					public showsOverflowMenuButton(): boolean;
					public getEmbeddedMenuWidthLimit(): number;
					public hasEmbeddedTabs(): boolean;
					public getTabContainerHeight(): number;
					public enableHomeButtonByDefault(): boolean;
					public getStackedTabMaxWidth(): number;
				}
			}
		}
	}
}
