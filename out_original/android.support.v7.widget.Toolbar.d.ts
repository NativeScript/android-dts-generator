/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuBuilder.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuItemImpl.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuView.d.ts" />
/// <reference path="./android.support.v7.view.menu.SubMenuBuilder.d.ts" />
/// <reference path="./android.support.v7.widget.ActionMenuPresenter.d.ts" />
/// <reference path="./android.support.v7.widget.DecorToolbar.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class Toolbar {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setPopupTheme(param0: number): void;
					public getPopupTheme(): number;
					public onRtlPropertiesChanged(param0: number): void;
					public setLogo(param0: number): void;
					public canShowOverflowMenu(): boolean;
					public isOverflowMenuShowing(): boolean;
					public isOverflowMenuShowPending(): boolean;
					public showOverflowMenu(): boolean;
					public hideOverflowMenu(): boolean;
					public setMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.widget.ActionMenuPresenter): void;
					public dismissPopupMenus(): void;
					public isTitleTruncated(): boolean;
					public setLogo(param0: android.graphics.drawable.Drawable): void;
					public getLogo(): android.graphics.drawable.Drawable;
					public setLogoDescription(param0: number): void;
					public setLogoDescription(param0: string): void;
					public getLogoDescription(): string;
					public hasExpandedActionView(): boolean;
					public collapseActionView(): void;
					public getTitle(): string;
					public setTitle(param0: number): void;
					public setTitle(param0: string): void;
					public getSubtitle(): string;
					public setSubtitle(param0: number): void;
					public setSubtitle(param0: string): void;
					public setTitleTextAppearance(param0: android.content.Context, param1: number): void;
					public setSubtitleTextAppearance(param0: android.content.Context, param1: number): void;
					public setTitleTextColor(param0: number): void;
					public setSubtitleTextColor(param0: number): void;
					public getNavigationContentDescription(): string;
					public setNavigationContentDescription(param0: number): void;
					public setNavigationContentDescription(param0: string): void;
					public setNavigationIcon(param0: number): void;
					public setNavigationIcon(param0: android.graphics.drawable.Drawable): void;
					public getNavigationIcon(): android.graphics.drawable.Drawable;
					public setNavigationOnClickListener(param0: android.view.View.OnClickListener): void;
					public getMenu(): android.view.Menu;
					public setOverflowIcon(param0: android.graphics.drawable.Drawable): void;
					public getOverflowIcon(): android.graphics.drawable.Drawable;
					public inflateMenu(param0: number): void;
					public setOnMenuItemClickListener(param0: android.support.v7.widget.Toolbar.OnMenuItemClickListener): void;
					public setContentInsetsRelative(param0: number, param1: number): void;
					public getContentInsetStart(): number;
					public getContentInsetEnd(): number;
					public setContentInsetsAbsolute(param0: number, param1: number): void;
					public getContentInsetLeft(): number;
					public getContentInsetRight(): number;
					public onSaveInstanceState(): android.os.Parcelable;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public onDetachedFromWindow(): void;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public onHoverEvent(param0: android.view.MotionEvent): boolean;
					public onMeasure(param0: number, param1: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(param0: android.util.AttributeSet): android.support.v7.widget.Toolbar.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.support.v7.widget.Toolbar.LayoutParams;
					public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
					public generateDefaultLayoutParams(): android.support.v7.widget.Toolbar.LayoutParams;
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public getWrapper(): android.support.v7.widget.DecorToolbar;
					public setCollapsible(param0: boolean): void;
					public setMenuCallbacks(param0: android.support.v7.view.menu.MenuPresenter.Callback, param1: android.support.v7.view.menu.MenuBuilder.Callback): void;
				}
				export module Toolbar {
					export class ExpandedActionViewMenuPresenter {
						public initForMenu(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder): void;
						public getMenuView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView;
						public updateMenuView(param0: boolean): void;
						public setCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public flagActionItems(): boolean;
						public expandItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public collapseItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public getId(): number;
						public onSaveInstanceState(): android.os.Parcelable;
						public onRestoreInstanceState(param0: android.os.Parcelable): void;
					}
					export class LayoutParams {
						public constructor(param0: number, param1: number);
						public constructor(param0: number, param1: number, param2: number);
						public constructor(param0: number);
						public constructor(param0: android.support.v7.app.ActionBar.LayoutParams);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor();
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: number, param1: number);
						public constructor(param0: number, param1: number, param2: number);
						public constructor(param0: number);
						public constructor(param0: android.support.v7.widget.Toolbar.LayoutParams);
						public constructor(param0: android.support.v7.app.ActionBar.LayoutParams);
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
					}
					export class OnMenuItemClickListener {
						public onMenuItemClick(param0: android.view.MenuItem): boolean;
					}
					export class SavedState {
						public constructor(param0: android.os.Parcelable);
						public constructor();
						public constructor(param0: android.os.Parcel);
						public constructor(param0: android.os.Parcelable);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public static CREATOR: android.os.Parcelable.Creator;
					}
				}
			}
		}
	}
}
