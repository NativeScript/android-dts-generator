/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.pm.ConfigurationInfo.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Size.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module app {
		export class ActivityManager {
			public getMemoryClass(): number;
			public getLargeMemoryClass(): number;
			public isLowRamDevice(): boolean;
			public getRecentTasks(param0: number, param1: number): java.util.List;
			public getAppTasks(): java.util.List;
			public getAppTaskThumbnailSize(): android.util.Size;
			public addAppTask(param0: android.app.Activity, param1: android.content.Intent, param2: android.app.ActivityManager.TaskDescription, param3: android.graphics.Bitmap): number;
			public getRunningTasks(param0: number): java.util.List;
			public moveTaskToFront(param0: number, param1: number): void;
			public moveTaskToFront(param0: number, param1: number, param2: android.os.Bundle): void;
			public getRunningServices(param0: number): java.util.List;
			public getRunningServiceControlPanel(param0: android.content.ComponentName): android.app.PendingIntent;
			public getMemoryInfo(param0: android.app.ActivityManager.MemoryInfo): void;
			public clearApplicationUserData(): boolean;
			public getProcessesInErrorState(): java.util.List;
			public getRunningAppProcesses(): java.util.List;
			public static getMyMemoryState(param0: android.app.ActivityManager.RunningAppProcessInfo): void;
			public getProcessMemoryInfo(param0: native.Array<number>): native.Array<android.os.Debug.MemoryInfo>;
			public restartPackage(param0: string): void;
			public killBackgroundProcesses(param0: string): void;
			public getDeviceConfigurationInfo(): android.content.pm.ConfigurationInfo;
			public getLauncherLargeIconDensity(): number;
			public getLauncherLargeIconSize(): number;
			public static isUserAMonkey(): boolean;
			public static isRunningInTestHarness(): boolean;
			public dumpPackageState(param0: java.io.FileDescriptor, param1: string): void;
			public setWatchHeapLimit(param0: number): void;
			public clearWatchHeapLimit(): void;
			public isInLockTaskMode(): boolean;
			public getLockTaskModeState(): number;
			public static ACTION_REPORT_HEAP_LIMIT: string;
			public static LOCK_TASK_MODE_LOCKED: number;
			public static LOCK_TASK_MODE_NONE: number;
			public static LOCK_TASK_MODE_PINNED: number;
			public static META_HOME_ALTERNATE: string;
			public static MOVE_TASK_NO_USER_ACTION: number;
			public static MOVE_TASK_WITH_HOME: number;
			public static RECENT_IGNORE_UNAVAILABLE: number;
			public static RECENT_WITH_EXCLUDED: number;
		}
		export module ActivityManager {
			export class AppTask {
				public finishAndRemoveTask(): void;
				public getTaskInfo(): android.app.ActivityManager.RecentTaskInfo;
				public moveToFront(): void;
				public startActivity(param0: android.content.Context, param1: android.content.Intent, param2: android.os.Bundle): void;
				public setExcludeFromRecents(param0: boolean): void;
			}
			export class MemoryInfo {
				public constructor();
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public readFromParcel(param0: android.os.Parcel): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public availMem: number;
				public lowMemory: boolean;
				public threshold: number;
				public totalMem: number;
			}
			export class ProcessErrorStateInfo {
				public constructor();
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public readFromParcel(param0: android.os.Parcel): void;
				public static CRASHED: number;
				public static CREATOR: android.os.Parcelable.Creator;
				public static NOT_RESPONDING: number;
				public static NO_ERROR: number;
				public condition: number;
				public crashData: native.Array<number>;
				public longMsg: string;
				public pid: number;
				public processName: string;
				public shortMsg: string;
				public stackTrace: string;
				public tag: string;
				public uid: number;
			}
			export class RecentTaskInfo {
				public constructor();
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public readFromParcel(param0: android.os.Parcel): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public affiliatedTaskId: number;
				public baseActivity: android.content.ComponentName;
				public baseIntent: android.content.Intent;
				public description: string;
				public id: number;
				public numActivities: number;
				public origActivity: android.content.ComponentName;
				public persistentId: number;
				public taskDescription: android.app.ActivityManager.TaskDescription;
				public topActivity: android.content.ComponentName;
			}
			export class RunningAppProcessInfo {
				public constructor();
				public constructor(param0: string, param1: number, param2: native.Array<string>);
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public readFromParcel(param0: android.os.Parcel): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public static IMPORTANCE_BACKGROUND: number;
				public static IMPORTANCE_EMPTY: number;
				public static IMPORTANCE_FOREGROUND: number;
				public static IMPORTANCE_FOREGROUND_SERVICE: number;
				public static IMPORTANCE_GONE: number;
				public static IMPORTANCE_PERCEPTIBLE: number;
				public static IMPORTANCE_SERVICE: number;
				public static IMPORTANCE_TOP_SLEEPING: number;
				public static IMPORTANCE_VISIBLE: number;
				public static REASON_PROVIDER_IN_USE: number;
				public static REASON_SERVICE_IN_USE: number;
				public static REASON_UNKNOWN: number;
				public importance: number;
				public importanceReasonCode: number;
				public importanceReasonComponent: android.content.ComponentName;
				public importanceReasonPid: number;
				public lastTrimLevel: number;
				public lru: number;
				public pid: number;
				public pkgList: native.Array<string>;
				public processName: string;
				public uid: number;
			}
			export class RunningServiceInfo {
				public constructor();
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public readFromParcel(param0: android.os.Parcel): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public static FLAG_FOREGROUND: number;
				public static FLAG_PERSISTENT_PROCESS: number;
				public static FLAG_STARTED: number;
				public static FLAG_SYSTEM_PROCESS: number;
				public activeSince: number;
				public clientCount: number;
				public clientLabel: number;
				public clientPackage: string;
				public crashCount: number;
				public flags: number;
				public foreground: boolean;
				public lastActivityTime: number;
				public pid: number;
				public process: string;
				public restarting: number;
				public service: android.content.ComponentName;
				public started: boolean;
				public uid: number;
			}
			export class RunningTaskInfo {
				public constructor();
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public readFromParcel(param0: android.os.Parcel): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public baseActivity: android.content.ComponentName;
				public description: string;
				public id: number;
				public numActivities: number;
				public numRunning: number;
				public thumbnail: android.graphics.Bitmap;
				public topActivity: android.content.ComponentName;
			}
			export class TaskDescription {
				public constructor();
				public constructor(param0: string, param1: android.graphics.Bitmap, param2: number);
				public constructor(param0: string, param1: android.graphics.Bitmap);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: android.app.ActivityManager.TaskDescription);
				public getLabel(): string;
				public getIcon(): android.graphics.Bitmap;
				public getPrimaryColor(): number;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public readFromParcel(param0: android.os.Parcel): void;
				public toString(): string;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
