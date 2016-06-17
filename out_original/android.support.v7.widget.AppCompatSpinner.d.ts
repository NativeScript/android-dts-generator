/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./android.widget.SpinnerAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatSpinner {
					public constructor(param0: android.content.Context, param1: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number, param4: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number, param4: number, param5: android.content.res.Resources.Theme);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number, param4: android.content.res.Resources.Theme);
					public getPopupContext(): android.content.Context;
					public setPopupBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setPopupBackgroundResource(param0: number): void;
					public getPopupBackground(): android.graphics.drawable.Drawable;
					public setDropDownVerticalOffset(param0: number): void;
					public getDropDownVerticalOffset(): number;
					public setDropDownHorizontalOffset(param0: number): void;
					public getDropDownHorizontalOffset(): number;
					public setDropDownWidth(param0: number): void;
					public getDropDownWidth(): number;
					public setAdapter(param0: android.widget.Adapter): void;
					public setAdapter(param0: android.widget.SpinnerAdapter): void;
					public onDetachedFromWindow(): void;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public onMeasure(param0: number, param1: number): void;
					public performClick(): boolean;
					public setPrompt(param0: string): void;
					public getPrompt(): string;
					public setBackgroundResource(param0: number): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
					public drawableStateChanged(): void;
				}
				export module AppCompatSpinner {
					export class DropDownAdapter {
						public constructor();
						public constructor(param0: android.widget.SpinnerAdapter, param1: android.content.res.Resources.Theme);
						public getCount(): number;
						public getItem(param0: number): java.lang.Object;
						public getItemId(param0: number): number;
						public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
						public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
						public hasStableIds(): boolean;
						public registerDataSetObserver(param0: android.database.DataSetObserver): void;
						public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
						public areAllItemsEnabled(): boolean;
						public isEnabled(param0: number): boolean;
						public getItemViewType(param0: number): number;
						public getViewTypeCount(): number;
						public isEmpty(): boolean;
					}
					export class DropdownPopup {
						public constructor(param0: android.content.Context);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public constructor();
						public constructor(param0: android.support.v7.widget.AppCompatSpinner, param1: android.content.Context, param2: android.util.AttributeSet, param3: number);
						public setAdapter(param0: android.widget.ListAdapter): void;
						public getHintText(): string;
						public setPromptText(param0: string): void;
						public show(): void;
					}
				}
			}
		}
	}
}
