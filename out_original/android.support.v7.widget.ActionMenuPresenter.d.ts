/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuBuilder.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuItemImpl.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuView.d.ts" />
/// <reference path="./android.support.v7.view.menu.SubMenuBuilder.d.ts" />
/// <reference path="./android.support.v7.widget.ActionMenuView.d.ts" />
/// <reference path="./android.support.v7.widget.ListPopupWindow.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActionMenuPresenter {
					public constructor(param0: android.content.Context, param1: number, param2: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public initForMenu(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public setWidthLimit(param0: number, param1: boolean): void;
					public setReserveOverflow(param0: boolean): void;
					public setItemLimit(param0: number): void;
					public setExpandedActionViewsExclusive(param0: boolean): void;
					public setOverflowIcon(param0: android.graphics.drawable.Drawable): void;
					public getOverflowIcon(): android.graphics.drawable.Drawable;
					public getMenuView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView;
					public getItemView(param0: android.support.v7.view.menu.MenuItemImpl, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					public bindItemView(param0: android.support.v7.view.menu.MenuItemImpl, param1: android.support.v7.view.menu.MenuView.ItemView): void;
					public shouldIncludeItem(param0: number, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
					public updateMenuView(param0: boolean): void;
					public filterLeftoverView(param0: android.view.ViewGroup, param1: number): boolean;
					public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
					public showOverflowMenu(): boolean;
					public hideOverflowMenu(): boolean;
					public dismissPopupMenus(): boolean;
					public hideSubMenus(): boolean;
					public isOverflowMenuShowing(): boolean;
					public isOverflowMenuShowPending(): boolean;
					public isOverflowReserved(): boolean;
					public flagActionItems(): boolean;
					public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public onSubUiVisibilityChanged(param0: boolean): void;
					public setMenuView(param0: android.support.v7.widget.ActionMenuView): void;
				}
				export module ActionMenuPresenter {
					export class ActionButtonSubmenu {
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder);
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View);
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View, param3: boolean, param4: number);
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View, param3: boolean, param4: number, param5: number);
						public constructor();
						public constructor(param0: android.support.v7.widget.ActionMenuPresenter, param1: android.content.Context, param2: android.support.v7.view.menu.SubMenuBuilder);
						public onDismiss(): void;
					}
					export class ActionMenuPopupCallback {
						public getPopup(): android.support.v7.widget.ListPopupWindow;
					}
					export class OpenOverflowRunnable {
						public constructor();
						public constructor(param0: android.support.v7.widget.ActionMenuPresenter, param1: android.support.v7.widget.ActionMenuPresenter.OverflowPopup);
						public run(): void;
					}
					export class OverflowMenuButton {
						public constructor(param0: android.content.Context);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public constructor();
						public constructor(param0: android.support.v7.widget.ActionMenuPresenter, param1: android.content.Context);
						public performClick(): boolean;
						public needsDividerBefore(): boolean;
						public needsDividerAfter(): boolean;
						public setFrame(param0: number, param1: number, param2: number, param3: number): boolean;
					}
					export class OverflowPopup {
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder);
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View);
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View, param3: boolean, param4: number);
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View, param3: boolean, param4: number, param5: number);
						public constructor();
						public constructor(param0: android.support.v7.widget.ActionMenuPresenter, param1: android.content.Context, param2: android.support.v7.view.menu.MenuBuilder, param3: android.view.View, param4: boolean);
						public onDismiss(): void;
					}
					export class PopupPresenterCallback {
						public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
					}
					export class SavedState {
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public openSubMenuId: number;
						public static CREATOR: android.os.Parcelable.Creator;
					}
				}
			}
		}
	}
}
