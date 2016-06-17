/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.appwidget.AppWidgetHostView.d.ts" />
/// <reference path="./android.appwidget.AppWidgetProviderInfo.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />

declare module android {
	export module appwidget {
		export class AppWidgetHost {
			public constructor();
			public constructor(param0: android.content.Context, param1: number);
			public startListening(): void;
			public stopListening(): void;
			public allocateAppWidgetId(): number;
			public startAppWidgetConfigureActivityForResult(param0: android.app.Activity, param1: number, param2: number, param3: number, param4: android.os.Bundle): void;
			public deleteAppWidgetId(param0: number): void;
			public deleteHost(): void;
			public static deleteAllHosts(): void;
			public createView(param0: android.content.Context, param1: number, param2: android.appwidget.AppWidgetProviderInfo): android.appwidget.AppWidgetHostView;
			public onCreateView(param0: android.content.Context, param1: number, param2: android.appwidget.AppWidgetProviderInfo): android.appwidget.AppWidgetHostView;
			public onProviderChanged(param0: number, param1: android.appwidget.AppWidgetProviderInfo): void;
			public onProvidersChanged(): void;
			public clearViews(): void;
		}
	}
}
