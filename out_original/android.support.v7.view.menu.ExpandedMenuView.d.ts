/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuBuilder.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuItemImpl.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class ExpandedMenuView {
						public constructor(param0: android.content.Context);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public constructor();
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public initialize(param0: android.support.v7.view.menu.MenuBuilder): void;
						public onDetachedFromWindow(): void;
						public invokeItem(param0: android.support.v7.view.menu.MenuItemImpl): boolean;
						public onItemClick(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;
						public getWindowAnimations(): number;
					}
				}
			}
		}
	}
}
