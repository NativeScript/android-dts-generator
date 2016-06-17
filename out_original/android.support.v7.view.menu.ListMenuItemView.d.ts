/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuItemImpl.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class ListMenuItemView {
						public constructor(param0: android.content.Context);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public constructor();
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public onFinishInflate(): void;
						public initialize(param0: android.support.v7.view.menu.MenuItemImpl, param1: number): void;
						public setForceShowIcon(param0: boolean): void;
						public setTitle(param0: string): void;
						public getItemData(): android.support.v7.view.menu.MenuItemImpl;
						public setCheckable(param0: boolean): void;
						public setChecked(param0: boolean): void;
						public setShortcut(param0: boolean, param1: string): void;
						public setIcon(param0: android.graphics.drawable.Drawable): void;
						public onMeasure(param0: number, param1: number): void;
						public prefersCondensedTitle(): boolean;
						public showsIcon(): boolean;
					}
				}
			}
		}
	}
}
