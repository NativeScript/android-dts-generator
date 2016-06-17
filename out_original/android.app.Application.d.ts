/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.ComponentCallbacks.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />

declare module android {
	export module app {
		export class Application {
			public constructor(param0: android.content.Context);
			public constructor();
			public onCreate(): void;
			public onTerminate(): void;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public onLowMemory(): void;
			public onTrimMemory(param0: number): void;
			public registerComponentCallbacks(param0: android.content.ComponentCallbacks): void;
			public unregisterComponentCallbacks(param0: android.content.ComponentCallbacks): void;
			public registerActivityLifecycleCallbacks(param0: android.app.Application.ActivityLifecycleCallbacks): void;
			public unregisterActivityLifecycleCallbacks(param0: android.app.Application.ActivityLifecycleCallbacks): void;
			public registerOnProvideAssistDataListener(param0: android.app.Application.OnProvideAssistDataListener): void;
			public unregisterOnProvideAssistDataListener(param0: android.app.Application.OnProvideAssistDataListener): void;
		}
		export module Application {
			export class ActivityLifecycleCallbacks {
				public onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;
				public onActivityStarted(param0: android.app.Activity): void;
				public onActivityResumed(param0: android.app.Activity): void;
				public onActivityPaused(param0: android.app.Activity): void;
				public onActivityStopped(param0: android.app.Activity): void;
				public onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
				public onActivityDestroyed(param0: android.app.Activity): void;
			}
			export class OnProvideAssistDataListener {
				public onProvideAssistData(param0: android.app.Activity, param1: android.os.Bundle): void;
			}
		}
	}
}
