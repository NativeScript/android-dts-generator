/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.PackageManager.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module appwidget {
		export class AppWidgetProviderInfo {
			public constructor();
			public constructor(param0: android.os.Parcel);
			public loadLabel(param0: android.content.pm.PackageManager): string;
			public loadIcon(param0: android.content.Context, param1: number): android.graphics.drawable.Drawable;
			public loadPreviewImage(param0: android.content.Context, param1: number): android.graphics.drawable.Drawable;
			public getProfile(): android.os.UserHandle;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public clone(): java.lang.Object;
			public clone(): android.appwidget.AppWidgetProviderInfo;
			public describeContents(): number;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
			public static RESIZE_BOTH: number;
			public static RESIZE_HORIZONTAL: number;
			public static RESIZE_NONE: number;
			public static RESIZE_VERTICAL: number;
			public static WIDGET_CATEGORY_HOME_SCREEN: number;
			public static WIDGET_CATEGORY_KEYGUARD: number;
			public static WIDGET_CATEGORY_SEARCHBOX: number;
			public autoAdvanceViewId: number;
			public configure: android.content.ComponentName;
			public icon: number;
			public initialKeyguardLayout: number;
			public initialLayout: number;
			public label: string;
			public minHeight: number;
			public minResizeHeight: number;
			public minResizeWidth: number;
			public minWidth: number;
			public previewImage: number;
			public provider: android.content.ComponentName;
			public resizeMode: number;
			public updatePeriodMillis: number;
			public widgetCategory: number;
		}
	}
}
