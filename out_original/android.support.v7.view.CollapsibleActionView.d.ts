/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class CollapsibleActionView {
					public onActionViewExpanded(): void;
					public onActionViewCollapsed(): void;
				}
			}
		}
	}
}
