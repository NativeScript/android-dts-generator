/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.appwidget.AppWidgetManager.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />

declare module android {
	export module appwidget {
		export class AppWidgetProvider {
			public constructor();
			public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
			public onUpdate(param0: android.content.Context, param1: android.appwidget.AppWidgetManager, param2: native.Array<number>): void;
			public onAppWidgetOptionsChanged(param0: android.content.Context, param1: android.appwidget.AppWidgetManager, param2: number, param3: android.os.Bundle): void;
			public onDeleted(param0: android.content.Context, param1: native.Array<number>): void;
			public onEnabled(param0: android.content.Context): void;
			public onDisabled(param0: android.content.Context): void;
			public onRestored(param0: android.content.Context, param1: native.Array<number>, param2: native.Array<number>): void;
		}
	}
}
