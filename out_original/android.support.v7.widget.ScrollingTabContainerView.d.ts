/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ScrollingTabContainerView {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public onMeasure(param0: number, param1: number): void;
					public setAllowCollapse(param0: boolean): void;
					public setTabSelected(param0: number): void;
					public setContentHeight(param0: number): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public animateToVisibility(param0: number): void;
					public animateToTab(param0: number): void;
					public onAttachedToWindow(): void;
					public onDetachedFromWindow(): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: boolean): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number, param2: boolean): void;
					public updateTab(param0: number): void;
					public removeTabAt(param0: number): void;
					public removeAllTabs(): void;
					public onItemSelected(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;
					public onNothingSelected(param0: android.widget.AdapterView): void;
					public mVisibilityAnim: android.support.v4.view.ViewPropertyAnimatorCompat;
					public mVisAnimListener: android.support.v7.widget.ScrollingTabContainerView.VisibilityAnimListener;
				}
				export module ScrollingTabContainerView {
					export class TabAdapter {
						public getCount(): number;
						public getItem(param0: number): java.lang.Object;
						public getItemId(param0: number): number;
						public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					}
					export class TabClickListener {
						public onClick(param0: android.view.View): void;
					}
					export class TabView {
						public constructor(param0: android.content.Context);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public constructor();
						public constructor(param0: android.support.v7.widget.ScrollingTabContainerView, param1: android.content.Context, param2: android.support.v7.app.ActionBar.Tab, param3: boolean);
						public bindTab(param0: android.support.v7.app.ActionBar.Tab): void;
						public setSelected(param0: boolean): void;
						public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
						public onInitializeAccessibilityNodeInfo(param0: android.view.accessibility.AccessibilityNodeInfo): void;
						public onMeasure(param0: number, param1: number): void;
						public update(): void;
						public onLongClick(param0: android.view.View): boolean;
						public getTab(): android.support.v7.app.ActionBar.Tab;
					}
					export class VisibilityAnimListener {
						public constructor();
						public constructor(param0: android.support.v7.widget.ScrollingTabContainerView);
						public withFinalVisibility(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: number): android.support.v7.widget.ScrollingTabContainerView.VisibilityAnimListener;
						public onAnimationStart(param0: android.view.View): void;
						public onAnimationEnd(param0: android.view.View): void;
						public onAnimationCancel(param0: android.view.View): void;
					}
				}
			}
		}
	}
}
