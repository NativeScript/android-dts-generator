/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.appwidget.AppWidgetProviderInfo.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./android.widget.RemoteViews.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module appwidget {
		export class AppWidgetManager {
			public static getInstance(param0: android.content.Context): android.appwidget.AppWidgetManager;
			public updateAppWidget(param0: native.Array<number>, param1: android.widget.RemoteViews): void;
			public updateAppWidgetOptions(param0: number, param1: android.os.Bundle): void;
			public getAppWidgetOptions(param0: number): android.os.Bundle;
			public updateAppWidget(param0: number, param1: android.widget.RemoteViews): void;
			public partiallyUpdateAppWidget(param0: native.Array<number>, param1: android.widget.RemoteViews): void;
			public partiallyUpdateAppWidget(param0: number, param1: android.widget.RemoteViews): void;
			public updateAppWidget(param0: android.content.ComponentName, param1: android.widget.RemoteViews): void;
			public notifyAppWidgetViewDataChanged(param0: native.Array<number>, param1: number): void;
			public notifyAppWidgetViewDataChanged(param0: number, param1: number): void;
			public getInstalledProvidersForProfile(param0: android.os.UserHandle): java.util.List;
			public getInstalledProviders(): java.util.List;
			public getAppWidgetInfo(param0: number): android.appwidget.AppWidgetProviderInfo;
			public bindAppWidgetIdIfAllowed(param0: number, param1: android.content.ComponentName): boolean;
			public bindAppWidgetIdIfAllowed(param0: number, param1: android.content.ComponentName, param2: android.os.Bundle): boolean;
			public bindAppWidgetIdIfAllowed(param0: number, param1: android.os.UserHandle, param2: android.content.ComponentName, param3: android.os.Bundle): boolean;
			public getAppWidgetIds(param0: android.content.ComponentName): native.Array<number>;
			public static ACTION_APPWIDGET_BIND: string;
			public static ACTION_APPWIDGET_CONFIGURE: string;
			public static ACTION_APPWIDGET_DELETED: string;
			public static ACTION_APPWIDGET_DISABLED: string;
			public static ACTION_APPWIDGET_ENABLED: string;
			public static ACTION_APPWIDGET_HOST_RESTORED: string;
			public static ACTION_APPWIDGET_OPTIONS_CHANGED: string;
			public static ACTION_APPWIDGET_PICK: string;
			public static ACTION_APPWIDGET_RESTORED: string;
			public static ACTION_APPWIDGET_UPDATE: string;
			public static EXTRA_APPWIDGET_ID: string;
			public static EXTRA_APPWIDGET_IDS: string;
			public static EXTRA_APPWIDGET_OLD_IDS: string;
			public static EXTRA_APPWIDGET_OPTIONS: string;
			public static EXTRA_APPWIDGET_PROVIDER: string;
			public static EXTRA_APPWIDGET_PROVIDER_PROFILE: string;
			public static EXTRA_CUSTOM_EXTRAS: string;
			public static EXTRA_CUSTOM_INFO: string;
			public static EXTRA_HOST_ID: string;
			public static INVALID_APPWIDGET_ID: number;
			public static META_DATA_APPWIDGET_PROVIDER: string;
			public static OPTION_APPWIDGET_HOST_CATEGORY: string;
			public static OPTION_APPWIDGET_MAX_HEIGHT: string;
			public static OPTION_APPWIDGET_MAX_WIDTH: string;
			public static OPTION_APPWIDGET_MIN_HEIGHT: string;
			public static OPTION_APPWIDGET_MIN_WIDTH: string;
		}
	}
}
