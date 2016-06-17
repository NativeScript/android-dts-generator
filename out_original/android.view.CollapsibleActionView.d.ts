/// <reference path="./_helpers.d.ts" />

declare module android {
	export module view {
		export class CollapsibleActionView {
			public onActionViewExpanded(): void;
			public onActionViewCollapsed(): void;
		}
	}
}
