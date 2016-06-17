/// <reference path="./_helpers.d.ts" />

declare module android {
	export module provider {
		export class AlarmClock {
			public constructor();
			public static ACTION_DISMISS_ALARM: string;
			public static ACTION_SET_ALARM: string;
			public static ACTION_SET_TIMER: string;
			public static ACTION_SHOW_ALARMS: string;
			public static ACTION_SNOOZE_ALARM: string;
			public static ALARM_SEARCH_MODE_ALL: string;
			public static ALARM_SEARCH_MODE_LABEL: string;
			public static ALARM_SEARCH_MODE_NEXT: string;
			public static ALARM_SEARCH_MODE_TIME: string;
			public static EXTRA_ALARM_SEARCH_MODE: string;
			public static EXTRA_ALARM_SNOOZE_DURATION: string;
			public static EXTRA_DAYS: string;
			public static EXTRA_HOUR: string;
			public static EXTRA_IS_PM: string;
			public static EXTRA_LENGTH: string;
			public static EXTRA_MESSAGE: string;
			public static EXTRA_MINUTES: string;
			public static EXTRA_RINGTONE: string;
			public static EXTRA_SKIP_UI: string;
			public static EXTRA_VIBRATE: string;
			public static VALUE_RINGTONE_SILENT: string;
		}
	}
}
