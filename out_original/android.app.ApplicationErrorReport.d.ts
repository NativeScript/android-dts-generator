/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module app {
		export class ApplicationErrorReport {
			public constructor();
			public static getErrorReportReceiver(param0: android.content.Context, param1: string, param2: number): android.content.ComponentName;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public readFromParcel(param0: android.os.Parcel): void;
			public describeContents(): number;
			public dump(param0: android.util.Printer, param1: string): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public static TYPE_ANR: number;
			public static TYPE_BATTERY: number;
			public static TYPE_CRASH: number;
			public static TYPE_NONE: number;
			public static TYPE_RUNNING_SERVICE: number;
			public anrInfo: android.app.ApplicationErrorReport.AnrInfo;
			public batteryInfo: android.app.ApplicationErrorReport.BatteryInfo;
			public crashInfo: android.app.ApplicationErrorReport.CrashInfo;
			public installerPackageName: string;
			public packageName: string;
			public processName: string;
			public runningServiceInfo: android.app.ApplicationErrorReport.RunningServiceInfo;
			public systemApp: boolean;
			public time: number;
			public type: number;
		}
		export module ApplicationErrorReport {
			export class AnrInfo {
				public constructor();
				public constructor(param0: android.os.Parcel);
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public dump(param0: android.util.Printer, param1: string): void;
				public activity: string;
				public cause: string;
				public info: string;
			}
			export class BatteryInfo {
				public constructor();
				public constructor(param0: android.os.Parcel);
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public dump(param0: android.util.Printer, param1: string): void;
				public checkinDetails: string;
				public durationMicros: number;
				public usageDetails: string;
				public usagePercent: number;
			}
			export class CrashInfo {
				public constructor();
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: android.os.Parcel);
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public dump(param0: android.util.Printer, param1: string): void;
				public exceptionClassName: string;
				public exceptionMessage: string;
				public stackTrace: string;
				public throwClassName: string;
				public throwFileName: string;
				public throwLineNumber: number;
				public throwMethodName: string;
			}
			export class RunningServiceInfo {
				public constructor();
				public constructor(param0: android.os.Parcel);
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public dump(param0: android.util.Printer, param1: string): void;
				public durationMillis: number;
				public serviceDetails: string;
			}
		}
	}
}
