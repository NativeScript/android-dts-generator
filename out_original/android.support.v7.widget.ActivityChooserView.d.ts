/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v4.view.ActionProvider.d.ts" />
/// <reference path="./android.support.v7.widget.ActivityChooserModel.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActivityChooserView {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setActivityChooserModel(param0: android.support.v7.widget.ActivityChooserModel): void;
					public setExpandActivityOverflowButtonDrawable(param0: android.graphics.drawable.Drawable): void;
					public setExpandActivityOverflowButtonContentDescription(param0: number): void;
					public setProvider(param0: android.support.v4.view.ActionProvider): void;
					public showPopup(): boolean;
					public dismissPopup(): boolean;
					public isShowingPopup(): boolean;
					public onAttachedToWindow(): void;
					public onDetachedFromWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public getDataModel(): android.support.v7.widget.ActivityChooserModel;
					public setOnDismissListener(param0: android.widget.PopupWindow.OnDismissListener): void;
					public setInitialActivityCount(param0: number): void;
					public setDefaultActionButtonContentDescription(param0: number): void;
				}
				export module ActivityChooserView {
					export class ActivityChooserViewAdapter {
						public setDataModel(param0: android.support.v7.widget.ActivityChooserModel): void;
						public getItemViewType(param0: number): number;
						public getViewTypeCount(): number;
						public getCount(): number;
						public getItem(param0: number): java.lang.Object;
						public getItemId(param0: number): number;
						public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
						public measureContentWidth(): number;
						public setMaxActivityCount(param0: number): void;
						public getDefaultActivity(): android.content.pm.ResolveInfo;
						public setShowFooterView(param0: boolean): void;
						public getActivityCount(): number;
						public getHistorySize(): number;
						public getDataModel(): android.support.v7.widget.ActivityChooserModel;
						public setShowDefaultActivity(param0: boolean, param1: boolean): void;
						public getShowDefaultActivity(): boolean;
						public static MAX_ACTIVITY_COUNT_UNLIMITED: number;
						public static MAX_ACTIVITY_COUNT_DEFAULT: number;
					}
					export class Callbacks {
						public onItemClick(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;
						public onClick(param0: android.view.View): void;
						public onLongClick(param0: android.view.View): boolean;
						public onDismiss(): void;
					}
					export class InnerLayout {
						public constructor(param0: android.content.Context);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public constructor();
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					}
				}
			}
		}
	}
}
