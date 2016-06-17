/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class AlarmManager {
			public set(param0: number, param1: number, param2: android.app.PendingIntent): void;
			public setRepeating(param0: number, param1: number, param2: number, param3: android.app.PendingIntent): void;
			public setWindow(param0: number, param1: number, param2: number, param3: android.app.PendingIntent): void;
			public setExact(param0: number, param1: number, param2: android.app.PendingIntent): void;
			public setAlarmClock(param0: android.app.AlarmManager.AlarmClockInfo, param1: android.app.PendingIntent): void;
			public setInexactRepeating(param0: number, param1: number, param2: number, param3: android.app.PendingIntent): void;
			public setAndAllowWhileIdle(param0: number, param1: number, param2: android.app.PendingIntent): void;
			public setExactAndAllowWhileIdle(param0: number, param1: number, param2: android.app.PendingIntent): void;
			public cancel(param0: android.app.PendingIntent): void;
			public setTime(param0: number): void;
			public setTimeZone(param0: string): void;
			public getNextAlarmClock(): android.app.AlarmManager.AlarmClockInfo;
			public static ACTION_NEXT_ALARM_CLOCK_CHANGED: string;
			public static ELAPSED_REALTIME: number;
			public static ELAPSED_REALTIME_WAKEUP: number;
			public static INTERVAL_DAY: number;
			public static INTERVAL_FIFTEEN_MINUTES: number;
			public static INTERVAL_HALF_DAY: number;
			public static INTERVAL_HALF_HOUR: number;
			public static INTERVAL_HOUR: number;
			public static RTC: number;
			public static RTC_WAKEUP: number;
		}
		export module AlarmManager {
			export class AlarmClockInfo {
				public constructor();
				public constructor(param0: number, param1: android.app.PendingIntent);
				public getTriggerTime(): number;
				public getShowIntent(): android.app.PendingIntent;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
