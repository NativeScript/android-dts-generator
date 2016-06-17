/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentProviderClient.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.EntityIterator.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module provider {
		export class CalendarContract {
			public static ACCOUNT_TYPE_LOCAL: string;
			public static ACTION_EVENT_REMINDER: string;
			public static ACTION_HANDLE_CUSTOM_EVENT: string;
			public static AUTHORITY: string;
			public static CALLER_IS_SYNCADAPTER: string;
			public static CONTENT_URI: android.net.Uri;
			public static EXTRA_CUSTOM_APP_URI: string;
			public static EXTRA_EVENT_ALL_DAY: string;
			public static EXTRA_EVENT_BEGIN_TIME: string;
			public static EXTRA_EVENT_END_TIME: string;
		}
		export module CalendarContract {
			export class Attendees {
				public static query(param0: android.content.ContentResolver, param1: number, param2: native.Array<string>): android.database.Cursor;
				public static CONTENT_URI: android.net.Uri;
			}
			export class AttendeesColumns {
				public static ATTENDEE_EMAIL: string;
				public static ATTENDEE_IDENTITY: string;
				public static ATTENDEE_ID_NAMESPACE: string;
				public static ATTENDEE_NAME: string;
				public static ATTENDEE_RELATIONSHIP: string;
				public static ATTENDEE_STATUS: string;
				public static ATTENDEE_STATUS_ACCEPTED: number;
				public static ATTENDEE_STATUS_DECLINED: number;
				public static ATTENDEE_STATUS_INVITED: number;
				public static ATTENDEE_STATUS_NONE: number;
				public static ATTENDEE_STATUS_TENTATIVE: number;
				public static ATTENDEE_TYPE: string;
				public static EVENT_ID: string;
				public static RELATIONSHIP_ATTENDEE: number;
				public static RELATIONSHIP_NONE: number;
				public static RELATIONSHIP_ORGANIZER: number;
				public static RELATIONSHIP_PERFORMER: number;
				public static RELATIONSHIP_SPEAKER: number;
				public static TYPE_NONE: number;
				public static TYPE_OPTIONAL: number;
				public static TYPE_REQUIRED: number;
				public static TYPE_RESOURCE: number;
			}
			export class CalendarAlerts {
				public static CONTENT_URI: android.net.Uri;
				public static CONTENT_URI_BY_INSTANCE: android.net.Uri;
			}
			export class CalendarAlertsColumns {
				public static ALARM_TIME: string;
				public static BEGIN: string;
				public static CREATION_TIME: string;
				public static DEFAULT_SORT_ORDER: string;
				public static END: string;
				public static EVENT_ID: string;
				public static MINUTES: string;
				public static NOTIFY_TIME: string;
				public static RECEIVED_TIME: string;
				public static STATE: string;
				public static STATE_DISMISSED: number;
				public static STATE_FIRED: number;
				public static STATE_SCHEDULED: number;
			}
			export class CalendarCache {
				public static KEY_TIMEZONE_INSTANCES: string;
				public static KEY_TIMEZONE_INSTANCES_PREVIOUS: string;
				public static KEY_TIMEZONE_TYPE: string;
				public static TIMEZONE_TYPE_AUTO: string;
				public static TIMEZONE_TYPE_HOME: string;
				public static URI: android.net.Uri;
			}
			export class CalendarCacheColumns {
				public static KEY: string;
				public static VALUE: string;
			}
			export class CalendarColumns {
				public static ALLOWED_ATTENDEE_TYPES: string;
				public static ALLOWED_AVAILABILITY: string;
				public static ALLOWED_REMINDERS: string;
				public static CALENDAR_ACCESS_LEVEL: string;
				public static CALENDAR_COLOR: string;
				public static CALENDAR_COLOR_KEY: string;
				public static CALENDAR_DISPLAY_NAME: string;
				public static CALENDAR_TIME_ZONE: string;
				public static CAL_ACCESS_CONTRIBUTOR: number;
				public static CAL_ACCESS_EDITOR: number;
				public static CAL_ACCESS_FREEBUSY: number;
				public static CAL_ACCESS_NONE: number;
				public static CAL_ACCESS_OVERRIDE: number;
				public static CAL_ACCESS_OWNER: number;
				public static CAL_ACCESS_READ: number;
				public static CAL_ACCESS_RESPOND: number;
				public static CAL_ACCESS_ROOT: number;
				public static CAN_MODIFY_TIME_ZONE: string;
				public static CAN_ORGANIZER_RESPOND: string;
				public static IS_PRIMARY: string;
				public static MAX_REMINDERS: string;
				public static OWNER_ACCOUNT: string;
				public static SYNC_EVENTS: string;
				public static VISIBLE: string;
			}
			export class CalendarEntity {
				public static newEntityIterator(param0: android.database.Cursor): android.content.EntityIterator;
				public static CONTENT_URI: android.net.Uri;
			}
			export class CalendarSyncColumns {
				public static CAL_SYNC1: string;
				public static CAL_SYNC10: string;
				public static CAL_SYNC2: string;
				public static CAL_SYNC3: string;
				public static CAL_SYNC4: string;
				public static CAL_SYNC5: string;
				public static CAL_SYNC6: string;
				public static CAL_SYNC7: string;
				public static CAL_SYNC8: string;
				public static CAL_SYNC9: string;
			}
			export class Calendars {
				public static CALENDAR_LOCATION: string;
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
				public static NAME: string;
			}
			export class Colors {
				public static CONTENT_URI: android.net.Uri;
			}
			export class ColorsColumns {
				public static COLOR: string;
				public static COLOR_KEY: string;
				public static COLOR_TYPE: string;
				public static TYPE_CALENDAR: number;
				public static TYPE_EVENT: number;
			}
			export class EventDays {
				public static query(param0: android.content.ContentResolver, param1: number, param2: number, param3: native.Array<string>): android.database.Cursor;
				public static CONTENT_URI: android.net.Uri;
			}
			export class EventDaysColumns {
				public static ENDDAY: string;
				public static STARTDAY: string;
			}
			export class Events {
				public static CONTENT_EXCEPTION_URI: android.net.Uri;
				public static CONTENT_URI: android.net.Uri;
			}
			export class EventsColumns {
				public static ACCESS_CONFIDENTIAL: number;
				public static ACCESS_DEFAULT: number;
				public static ACCESS_LEVEL: string;
				public static ACCESS_PRIVATE: number;
				public static ACCESS_PUBLIC: number;
				public static ALL_DAY: string;
				public static AVAILABILITY: string;
				public static AVAILABILITY_BUSY: number;
				public static AVAILABILITY_FREE: number;
				public static AVAILABILITY_TENTATIVE: number;
				public static CALENDAR_ID: string;
				public static CAN_INVITE_OTHERS: string;
				public static CUSTOM_APP_PACKAGE: string;
				public static CUSTOM_APP_URI: string;
				public static DESCRIPTION: string;
				public static DISPLAY_COLOR: string;
				public static DTEND: string;
				public static DTSTART: string;
				public static DURATION: string;
				public static EVENT_COLOR: string;
				public static EVENT_COLOR_KEY: string;
				public static EVENT_END_TIMEZONE: string;
				public static EVENT_LOCATION: string;
				public static EVENT_TIMEZONE: string;
				public static EXDATE: string;
				public static EXRULE: string;
				public static GUESTS_CAN_INVITE_OTHERS: string;
				public static GUESTS_CAN_MODIFY: string;
				public static GUESTS_CAN_SEE_GUESTS: string;
				public static HAS_ALARM: string;
				public static HAS_ATTENDEE_DATA: string;
				public static HAS_EXTENDED_PROPERTIES: string;
				public static IS_ORGANIZER: string;
				public static LAST_DATE: string;
				public static LAST_SYNCED: string;
				public static ORGANIZER: string;
				public static ORIGINAL_ALL_DAY: string;
				public static ORIGINAL_ID: string;
				public static ORIGINAL_INSTANCE_TIME: string;
				public static ORIGINAL_SYNC_ID: string;
				public static RDATE: string;
				public static RRULE: string;
				public static SELF_ATTENDEE_STATUS: string;
				public static STATUS: string;
				public static STATUS_CANCELED: number;
				public static STATUS_CONFIRMED: number;
				public static STATUS_TENTATIVE: number;
				public static SYNC_DATA1: string;
				public static SYNC_DATA10: string;
				public static SYNC_DATA2: string;
				public static SYNC_DATA3: string;
				public static SYNC_DATA4: string;
				public static SYNC_DATA5: string;
				public static SYNC_DATA6: string;
				public static SYNC_DATA7: string;
				public static SYNC_DATA8: string;
				public static SYNC_DATA9: string;
				public static TITLE: string;
				public static UID_2445: string;
			}
			export class EventsEntity {
				public static newEntityIterator(param0: android.database.Cursor, param1: android.content.ContentResolver): android.content.EntityIterator;
				public static newEntityIterator(param0: android.database.Cursor, param1: android.content.ContentProviderClient): android.content.EntityIterator;
				public static CONTENT_URI: android.net.Uri;
			}
			export class ExtendedProperties {
				public static CONTENT_URI: android.net.Uri;
			}
			export class ExtendedPropertiesColumns {
				public static EVENT_ID: string;
				public static NAME: string;
				public static VALUE: string;
			}
			export class Instances {
				public static query(param0: android.content.ContentResolver, param1: native.Array<string>, param2: number, param3: number): android.database.Cursor;
				public static query(param0: android.content.ContentResolver, param1: native.Array<string>, param2: number, param3: number, param4: string): android.database.Cursor;
				public static BEGIN: string;
				public static CONTENT_BY_DAY_URI: android.net.Uri;
				public static CONTENT_SEARCH_BY_DAY_URI: android.net.Uri;
				public static CONTENT_SEARCH_URI: android.net.Uri;
				public static CONTENT_URI: android.net.Uri;
				public static END: string;
				public static END_DAY: string;
				public static END_MINUTE: string;
				public static EVENT_ID: string;
				public static START_DAY: string;
				public static START_MINUTE: string;
			}
			export class Reminders {
				public static query(param0: android.content.ContentResolver, param1: number, param2: native.Array<string>): android.database.Cursor;
				public static CONTENT_URI: android.net.Uri;
			}
			export class RemindersColumns {
				public static EVENT_ID: string;
				public static METHOD: string;
				public static METHOD_ALARM: number;
				public static METHOD_ALERT: number;
				public static METHOD_DEFAULT: number;
				public static METHOD_EMAIL: number;
				public static METHOD_SMS: number;
				public static MINUTES: string;
				public static MINUTES_DEFAULT: number;
			}
			export class SyncColumns {
				public static ACCOUNT_NAME: string;
				public static ACCOUNT_TYPE: string;
				public static CAN_PARTIALLY_UPDATE: string;
				public static DELETED: string;
				public static DIRTY: string;
				public static MUTATORS: string;
				public static _SYNC_ID: string;
			}
			export class SyncState {
				public static CONTENT_URI: android.net.Uri;
			}
		}
	}
}
