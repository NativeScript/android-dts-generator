/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module widget {
		export class AdapterView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setOnItemClickListener(param0: android.widget.AdapterView.OnItemClickListener): void;
			public getOnItemClickListener(): android.widget.AdapterView.OnItemClickListener;
			public performItemClick(param0: android.view.View, param1: number, param2: number): boolean;
			public setOnItemLongClickListener(param0: android.widget.AdapterView.OnItemLongClickListener): void;
			public getOnItemLongClickListener(): android.widget.AdapterView.OnItemLongClickListener;
			public setOnItemSelectedListener(param0: android.widget.AdapterView.OnItemSelectedListener): void;
			public getOnItemSelectedListener(): android.widget.AdapterView.OnItemSelectedListener;
			public getAdapter(): android.widget.Adapter;
			public setAdapter(param0: android.widget.Adapter): void;
			public addView(param0: android.view.View, param1: number): void;
			public addView(param0: android.view.View, param1: number, param2: number): void;
			public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
			public addView(param0: android.view.View): void;
			public addView(param0: android.view.View, param1: number): void;
			public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
			public removeView(param0: android.view.View): void;
			public removeViewAt(param0: number): void;
			public removeAllViews(): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public getSelectedItemPosition(): number;
			public getSelectedItemId(): number;
			public getSelectedView(): android.view.View;
			public getSelectedItem(): java.lang.Object;
			public getCount(): number;
			public getPositionForView(param0: android.view.View): number;
			public getFirstVisiblePosition(): number;
			public getLastVisiblePosition(): number;
			public setSelection(param0: number): void;
			public setEmptyView(param0: android.view.View): void;
			public getEmptyView(): android.view.View;
			public setFocusable(param0: boolean): void;
			public setFocusableInTouchMode(param0: boolean): void;
			public getItemAtPosition(param0: number): java.lang.Object;
			public getItemIdAtPosition(param0: number): number;
			public setOnClickListener(param0: android.view.View.OnClickListener): void;
			public dispatchSaveInstanceState(param0: android.util.SparseArray): void;
			public dispatchRestoreInstanceState(param0: android.util.SparseArray): void;
			public onDetachedFromWindow(): void;
			public getAccessibilityClassName(): string;
			public canAnimate(): boolean;
			public static INVALID_POSITION: number;
			public static INVALID_ROW_ID: number;
			public static ITEM_VIEW_TYPE_HEADER_OR_FOOTER: number;
			public static ITEM_VIEW_TYPE_IGNORE: number;
		}
		export module AdapterView {
			export class AdapterContextMenuInfo {
				public constructor();
				public constructor(param0: android.view.View, param1: number, param2: number);
				public id: number;
				public position: number;
				public targetView: android.view.View;
			}
			export class OnItemClickListener {
				public onItemClick(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;
			}
			export class OnItemLongClickListener {
				public onItemLongClick(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): boolean;
			}
			export class OnItemSelectedListener {
				public onItemSelected(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;
				public onNothingSelected(param0: android.widget.AdapterView): void;
			}
		}
	}
}
