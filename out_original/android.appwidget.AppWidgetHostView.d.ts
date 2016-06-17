/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.appwidget.AppWidgetProviderInfo.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.RemoteViews.d.ts" />

declare module android {
	export module appwidget {
		export class AppWidgetHostView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: number, param2: number);
			public setAppWidget(param0: number, param1: android.appwidget.AppWidgetProviderInfo): void;
			public static getDefaultPaddingForWidget(param0: android.content.Context, param1: android.content.ComponentName, param2: android.graphics.Rect): android.graphics.Rect;
			public getAppWidgetId(): number;
			public getAppWidgetInfo(): android.appwidget.AppWidgetProviderInfo;
			public dispatchSaveInstanceState(param0: android.util.SparseArray): void;
			public dispatchRestoreInstanceState(param0: android.util.SparseArray): void;
			public updateAppWidgetSize(param0: android.os.Bundle, param1: number, param2: number, param3: number, param4: number): void;
			public updateAppWidgetOptions(param0: android.os.Bundle): void;
			public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
			public generateLayoutParams(param0: android.util.AttributeSet): android.widget.FrameLayout.LayoutParams;
			public updateAppWidget(param0: android.widget.RemoteViews): void;
			public drawChild(param0: android.graphics.Canvas, param1: android.view.View, param2: number): boolean;
			public prepareView(param0: android.view.View): void;
			public getDefaultView(): android.view.View;
			public getErrorView(): android.view.View;
		}
	}
}
