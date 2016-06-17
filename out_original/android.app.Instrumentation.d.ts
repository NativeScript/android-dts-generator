/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Application.d.ts" />
/// <reference path="./android.app.UiAutomation.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.content.pm.ActivityInfo.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module app {
		export class Instrumentation {
			public constructor();
			public onCreate(param0: android.os.Bundle): void;
			public start(): void;
			public onStart(): void;
			public onException(param0: java.lang.Object, param1: java.lang.Throwable): boolean;
			public sendStatus(param0: number, param1: android.os.Bundle): void;
			public finish(param0: number, param1: android.os.Bundle): void;
			public setAutomaticPerformanceSnapshots(): void;
			public startPerformanceSnapshot(): void;
			public endPerformanceSnapshot(): void;
			public onDestroy(): void;
			public getContext(): android.content.Context;
			public getComponentName(): android.content.ComponentName;
			public getTargetContext(): android.content.Context;
			public isProfiling(): boolean;
			public startProfiling(): void;
			public stopProfiling(): void;
			public setInTouchMode(param0: boolean): void;
			public waitForIdle(param0: java.lang.Runnable): void;
			public waitForIdleSync(): void;
			public runOnMainSync(param0: java.lang.Runnable): void;
			public startActivitySync(param0: android.content.Intent): android.app.Activity;
			public addMonitor(param0: android.app.Instrumentation.ActivityMonitor): void;
			public addMonitor(param0: android.content.IntentFilter, param1: android.app.Instrumentation.ActivityResult, param2: boolean): android.app.Instrumentation.ActivityMonitor;
			public addMonitor(param0: string, param1: android.app.Instrumentation.ActivityResult, param2: boolean): android.app.Instrumentation.ActivityMonitor;
			public checkMonitorHit(param0: android.app.Instrumentation.ActivityMonitor, param1: number): boolean;
			public waitForMonitor(param0: android.app.Instrumentation.ActivityMonitor): android.app.Activity;
			public waitForMonitorWithTimeout(param0: android.app.Instrumentation.ActivityMonitor, param1: number): android.app.Activity;
			public removeMonitor(param0: android.app.Instrumentation.ActivityMonitor): void;
			public invokeMenuActionSync(param0: android.app.Activity, param1: number, param2: number): boolean;
			public invokeContextMenuAction(param0: android.app.Activity, param1: number, param2: number): boolean;
			public sendStringSync(param0: string): void;
			public sendKeySync(param0: android.view.KeyEvent): void;
			public sendKeyDownUpSync(param0: number): void;
			public sendCharacterSync(param0: number): void;
			public sendPointerSync(param0: android.view.MotionEvent): void;
			public sendTrackballEventSync(param0: android.view.MotionEvent): void;
			public newApplication(param0: java.lang.ClassLoader, param1: string, param2: android.content.Context): android.app.Application;
			public static newApplication(param0: java.lang.Class, param1: android.content.Context): android.app.Application;
			public callApplicationOnCreate(param0: android.app.Application): void;
			public newActivity(param0: java.lang.Class, param1: android.content.Context, param2: android.os.IBinder, param3: android.app.Application, param4: android.content.Intent, param5: android.content.pm.ActivityInfo, param6: string, param7: android.app.Activity, param8: string, param9: java.lang.Object): android.app.Activity;
			public newActivity(param0: java.lang.ClassLoader, param1: string, param2: android.content.Intent): android.app.Activity;
			public callActivityOnCreate(param0: android.app.Activity, param1: android.os.Bundle): void;
			public callActivityOnCreate(param0: android.app.Activity, param1: android.os.Bundle, param2: android.os.PersistableBundle): void;
			public callActivityOnDestroy(param0: android.app.Activity): void;
			public callActivityOnRestoreInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
			public callActivityOnRestoreInstanceState(param0: android.app.Activity, param1: android.os.Bundle, param2: android.os.PersistableBundle): void;
			public callActivityOnPostCreate(param0: android.app.Activity, param1: android.os.Bundle): void;
			public callActivityOnPostCreate(param0: android.app.Activity, param1: android.os.Bundle, param2: android.os.PersistableBundle): void;
			public callActivityOnNewIntent(param0: android.app.Activity, param1: android.content.Intent): void;
			public callActivityOnStart(param0: android.app.Activity): void;
			public callActivityOnRestart(param0: android.app.Activity): void;
			public callActivityOnResume(param0: android.app.Activity): void;
			public callActivityOnStop(param0: android.app.Activity): void;
			public callActivityOnSaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
			public callActivityOnSaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle, param2: android.os.PersistableBundle): void;
			public callActivityOnPause(param0: android.app.Activity): void;
			public callActivityOnUserLeaving(param0: android.app.Activity): void;
			public startAllocCounting(): void;
			public stopAllocCounting(): void;
			public getAllocCounts(): android.os.Bundle;
			public getBinderCounts(): android.os.Bundle;
			public getUiAutomation(): android.app.UiAutomation;
			public static REPORT_KEY_IDENTIFIER: string;
			public static REPORT_KEY_STREAMRESULT: string;
		}
		export module Instrumentation {
			export class ActivityMonitor {
				public constructor();
				public constructor(param0: android.content.IntentFilter, param1: android.app.Instrumentation.ActivityResult, param2: boolean);
				public constructor(param0: string, param1: android.app.Instrumentation.ActivityResult, param2: boolean);
				public getFilter(): android.content.IntentFilter;
				public getResult(): android.app.Instrumentation.ActivityResult;
				public isBlocking(): boolean;
				public getHits(): number;
				public getLastActivity(): android.app.Activity;
				public waitForActivity(): android.app.Activity;
				public waitForActivityWithTimeout(param0: number): android.app.Activity;
			}
			export class ActivityResult {
				public constructor();
				public constructor(param0: number, param1: android.content.Intent);
				public getResultCode(): number;
				public getResultData(): android.content.Intent;
			}
		}
	}
}
