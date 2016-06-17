/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />

declare module android {
	export module widget {
		export class GridView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public getAdapter(): android.widget.Adapter;
			public getAdapter(): android.widget.ListAdapter;
			public setRemoteViewsAdapter(param0: android.content.Intent): void;
			public setAdapter(param0: android.widget.Adapter): void;
			public setAdapter(param0: android.widget.ListAdapter): void;
			public smoothScrollToPosition(param0: number, param1: number): void;
			public smoothScrollToPosition(param0: number): void;
			public smoothScrollByOffset(param0: number): void;
			public onMeasure(param0: number, param1: number): void;
			public attachLayoutAnimationParameters(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams, param2: number, param3: number): void;
			public layoutChildren(): void;
			public setSelection(param0: number): void;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;
			public setGravity(param0: number): void;
			public getGravity(): number;
			public setHorizontalSpacing(param0: number): void;
			public getHorizontalSpacing(): number;
			public getRequestedHorizontalSpacing(): number;
			public setVerticalSpacing(param0: number): void;
			public getVerticalSpacing(): number;
			public setStretchMode(param0: number): void;
			public getStretchMode(): number;
			public setColumnWidth(param0: number): void;
			public getColumnWidth(): number;
			public getRequestedColumnWidth(): number;
			public setNumColumns(param0: number): void;
			public getNumColumns(): number;
			public computeVerticalScrollExtent(): number;
			public computeVerticalScrollOffset(): number;
			public computeVerticalScrollRange(): number;
			public getAccessibilityClassName(): string;
			public onInitializeAccessibilityNodeInfoForItem(param0: android.view.View, param1: number, param2: android.view.accessibility.AccessibilityNodeInfo): void;
			public static AUTO_FIT: number;
			public static NO_STRETCH: number;
			public static STRETCH_COLUMN_WIDTH: number;
			public static STRETCH_SPACING: number;
			public static STRETCH_SPACING_UNIFORM: number;
		}
	}
}
