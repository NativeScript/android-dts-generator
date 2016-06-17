/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class IntentService {
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: string);
			public setIntentRedelivery(param0: boolean): void;
			public onCreate(): void;
			public onStart(param0: android.content.Intent, param1: number): void;
			public onStartCommand(param0: android.content.Intent, param1: number, param2: number): number;
			public onDestroy(): void;
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public onHandleIntent(param0: android.content.Intent): void;
		}
	}
}
