/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />

declare module android {
	export module widget {
		export class ActionMenuView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public setPopupTheme(param0: number): void;
			public getPopupTheme(): number;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public setOnMenuItemClickListener(param0: android.widget.ActionMenuView.OnMenuItemClickListener): void;
			public onMeasure(param0: number, param1: number): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public onDetachedFromWindow(): void;
			public setOverflowIcon(param0: android.graphics.drawable.Drawable): void;
			public getOverflowIcon(): android.graphics.drawable.Drawable;
			public generateDefaultLayoutParams(): android.widget.LinearLayout.LayoutParams;
			public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
			public generateDefaultLayoutParams(): android.widget.ActionMenuView.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.widget.LinearLayout.LayoutParams;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.LinearLayout.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.widget.ActionMenuView.LayoutParams;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.widget.ActionMenuView.LayoutParams;
			public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
			public getMenu(): android.view.Menu;
			public showOverflowMenu(): boolean;
			public hideOverflowMenu(): boolean;
			public isOverflowMenuShowing(): boolean;
			public dismissPopupMenus(): void;
		}
		export module ActionMenuView {
			export class LayoutParams {
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
				public constructor(param0: android.widget.LinearLayout.LayoutParams);
				public constructor();
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: android.view.ViewGroup.LayoutParams);
				public constructor(param0: android.widget.ActionMenuView.LayoutParams);
				public constructor(param0: number, param1: number);
			}
			export class OnMenuItemClickListener {
				public onMenuItemClick(param0: android.view.MenuItem): boolean;
			}
		}
	}
}
