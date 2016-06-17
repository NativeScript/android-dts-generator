/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module widget {
		export class ListView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public getMaxScrollAmount(): number;
			public addHeaderView(param0: android.view.View, param1: java.lang.Object, param2: boolean): void;
			public addHeaderView(param0: android.view.View): void;
			public getHeaderViewsCount(): number;
			public removeHeaderView(param0: android.view.View): boolean;
			public addFooterView(param0: android.view.View, param1: java.lang.Object, param2: boolean): void;
			public addFooterView(param0: android.view.View): void;
			public getFooterViewsCount(): number;
			public removeFooterView(param0: android.view.View): boolean;
			public getAdapter(): android.widget.Adapter;
			public getAdapter(): android.widget.ListAdapter;
			public setRemoteViewsAdapter(param0: android.content.Intent): void;
			public setAdapter(param0: android.widget.Adapter): void;
			public setAdapter(param0: android.widget.ListAdapter): void;
			public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
			public smoothScrollToPosition(param0: number, param1: number): void;
			public smoothScrollToPosition(param0: number): void;
			public smoothScrollByOffset(param0: number): void;
			public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
			public onMeasure(param0: number, param1: number): void;
			public layoutChildren(): void;
			public canAnimate(): boolean;
			public setSelection(param0: number): void;
			public setSelectionAfterHeaderView(): void;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public setItemsCanFocus(param0: boolean): void;
			public getItemsCanFocus(): boolean;
			public isOpaque(): boolean;
			public setCacheColorHint(param0: number): void;
			public dispatchDraw(param0: android.graphics.Canvas): void;
			public drawChild(param0: android.graphics.Canvas, param1: android.view.View, param2: number): boolean;
			public getDivider(): android.graphics.drawable.Drawable;
			public setDivider(param0: android.graphics.drawable.Drawable): void;
			public getDividerHeight(): number;
			public setDividerHeight(param0: number): void;
			public setHeaderDividersEnabled(param0: boolean): void;
			public areHeaderDividersEnabled(): boolean;
			public setFooterDividersEnabled(param0: boolean): void;
			public areFooterDividersEnabled(): boolean;
			public setOverscrollHeader(param0: android.graphics.drawable.Drawable): void;
			public getOverscrollHeader(): android.graphics.drawable.Drawable;
			public setOverscrollFooter(param0: android.graphics.drawable.Drawable): void;
			public getOverscrollFooter(): android.graphics.drawable.Drawable;
			public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;
			public onFinishInflate(): void;
			public findViewTraversal(param0: number): android.view.View;
			public findViewWithTagTraversal(param0: java.lang.Object): android.view.View;
			public getCheckItemIds(): native.Array<number>;
			public getAccessibilityClassName(): string;
			public onInitializeAccessibilityNodeInfoForItem(param0: android.view.View, param1: number, param2: android.view.accessibility.AccessibilityNodeInfo): void;
		}
		export module ListView {
			export class FixedViewInfo {
				public constructor();
				public constructor(param0: android.widget.ListView);
				public data: java.lang.Object;
				public isSelectable: boolean;
				public view: android.view.View;
			}
		}
	}
}
