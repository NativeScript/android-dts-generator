/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuItemImpl.d.ts" />
/// <reference path="./android.support.v7.widget.ListPopupWindow.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class ActionMenuItemView {
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public constructor();
						public constructor(param0: android.content.Context);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public onConfigurationChanged(param0: android.content.res.Configuration): void;
						public setPadding(param0: number, param1: number, param2: number, param3: number): void;
						public getItemData(): android.support.v7.view.menu.MenuItemImpl;
						public initialize(param0: android.support.v7.view.menu.MenuItemImpl, param1: number): void;
						public onTouchEvent(param0: android.view.MotionEvent): boolean;
						public onClick(param0: android.view.View): void;
						public setItemInvoker(param0: android.support.v7.view.menu.MenuBuilder.ItemInvoker): void;
						public setPopupCallback(param0: android.support.v7.view.menu.ActionMenuItemView.PopupCallback): void;
						public prefersCondensedTitle(): boolean;
						public setCheckable(param0: boolean): void;
						public setChecked(param0: boolean): void;
						public setExpandedFormat(param0: boolean): void;
						public setIcon(param0: android.graphics.drawable.Drawable): void;
						public hasText(): boolean;
						public setShortcut(param0: boolean, param1: string): void;
						public setTitle(param0: string): void;
						public showsIcon(): boolean;
						public needsDividerBefore(): boolean;
						public needsDividerAfter(): boolean;
						public onLongClick(param0: android.view.View): boolean;
						public onMeasure(param0: number, param1: number): void;
					}
					export module ActionMenuItemView {
						export class ActionMenuItemForwardingListener {
							public constructor(param0: android.view.View);
							public constructor();
							public constructor(param0: android.support.v7.view.menu.ActionMenuItemView);
							public getPopup(): android.support.v7.widget.ListPopupWindow;
							public onForwardingStarted(): boolean;
						}
						export class PopupCallback {
							public constructor();
							public getPopup(): android.support.v7.widget.ListPopupWindow;
						}
					}
				}
			}
		}
	}
}
