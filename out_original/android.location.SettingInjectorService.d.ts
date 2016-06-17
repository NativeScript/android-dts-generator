/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module location {
		export class SettingInjectorService {
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: string);
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public onStart(param0: android.content.Intent, param1: number): void;
			public onStartCommand(param0: android.content.Intent, param1: number, param2: number): number;
			public onGetSummary(): string;
			public onGetEnabled(): boolean;
			public static ACTION_INJECTED_SETTING_CHANGED: string;
			public static ACTION_SERVICE_INTENT: string;
			public static ATTRIBUTES_NAME: string;
			public static META_DATA_NAME: string;
		}
	}
}
