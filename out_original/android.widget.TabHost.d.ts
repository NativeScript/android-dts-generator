/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.LocalActivityManager.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.FrameLayout.d.ts" />
/// <reference path="./android.widget.TabWidget.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module widget {
		export class TabHost {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public newTabSpec(param0: string): android.widget.TabHost.TabSpec;
			public setup(): void;
			public setup(param0: android.app.LocalActivityManager): void;
			public onTouchModeChanged(param0: boolean): void;
			public addTab(param0: android.widget.TabHost.TabSpec): void;
			public clearAllTabs(): void;
			public getTabWidget(): android.widget.TabWidget;
			public getCurrentTab(): number;
			public getCurrentTabTag(): string;
			public getCurrentTabView(): android.view.View;
			public getCurrentView(): android.view.View;
			public setCurrentTabByTag(param0: string): void;
			public getTabContentView(): android.widget.FrameLayout;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public dispatchWindowFocusChanged(param0: boolean): void;
			public getAccessibilityClassName(): string;
			public setCurrentTab(param0: number): void;
			public setOnTabChangedListener(param0: android.widget.TabHost.OnTabChangeListener): void;
		}
		export module TabHost {
			export class OnTabChangeListener {
				public onTabChanged(param0: string): void;
			}
			export class TabContentFactory {
				public createTabContent(param0: string): android.view.View;
			}
			export class TabSpec {
				public setIndicator(param0: string): android.widget.TabHost.TabSpec;
				public setIndicator(param0: string, param1: android.graphics.drawable.Drawable): android.widget.TabHost.TabSpec;
				public setIndicator(param0: android.view.View): android.widget.TabHost.TabSpec;
				public setContent(param0: number): android.widget.TabHost.TabSpec;
				public setContent(param0: android.widget.TabHost.TabContentFactory): android.widget.TabHost.TabSpec;
				public setContent(param0: android.content.Intent): android.widget.TabHost.TabSpec;
				public getTag(): string;
			}
		}
	}
}
