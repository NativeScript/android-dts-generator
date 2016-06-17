/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module provider {
		export class Contacts {
			public static AUTHORITY: string;
			public static CONTENT_URI: android.net.Uri;
			public static KIND_EMAIL: number;
			public static KIND_IM: number;
			public static KIND_ORGANIZATION: number;
			public static KIND_PHONE: number;
			public static KIND_POSTAL: number;
		}
		export module Contacts {
			export class ContactMethods {
				public static encodePredefinedImProtocol(param0: number): string;
				public static encodeCustomImProtocol(param0: string): string;
				public static decodeImProtocol(param0: string): java.lang.Object;
				public static getDisplayLabel(param0: android.content.Context, param1: number, param2: number, param3: string): string;
				public addPostalLocation(param0: android.content.Context, param1: number, param2: number, param3: number): void;
				public static CONTENT_EMAIL_ITEM_TYPE: string;
				public static CONTENT_EMAIL_TYPE: string;
				public static CONTENT_EMAIL_URI: android.net.Uri;
				public static CONTENT_IM_ITEM_TYPE: string;
				public static CONTENT_POSTAL_ITEM_TYPE: string;
				public static CONTENT_POSTAL_TYPE: string;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
				public static PERSON_ID: string;
				public static POSTAL_LOCATION_LATITUDE: string;
				public static POSTAL_LOCATION_LONGITUDE: string;
				public static PROTOCOL_AIM: number;
				public static PROTOCOL_GOOGLE_TALK: number;
				public static PROTOCOL_ICQ: number;
				public static PROTOCOL_JABBER: number;
				public static PROTOCOL_MSN: number;
				public static PROTOCOL_QQ: number;
				public static PROTOCOL_SKYPE: number;
				public static PROTOCOL_YAHOO: number;
			}
			export class ContactMethodsColumns {
				public static AUX_DATA: string;
				public static DATA: string;
				public static ISPRIMARY: string;
				public static KIND: string;
				public static LABEL: string;
				public static TYPE: string;
				public static TYPE_CUSTOM: number;
				public static TYPE_HOME: number;
				public static TYPE_OTHER: number;
				public static TYPE_WORK: number;
			}
			export class Extensions {
				public static CONTENT_ITEM_TYPE: string;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
				public static PERSON_ID: string;
			}
			export class ExtensionsColumns {
				public static NAME: string;
				public static VALUE: string;
			}
			export class GroupMembership {
				public static CONTENT_DIRECTORY: string;
				public static CONTENT_ITEM_TYPE: string;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
				public static GROUP_ID: string;
				public static GROUP_SYNC_ACCOUNT: string;
				public static GROUP_SYNC_ACCOUNT_TYPE: string;
				public static GROUP_SYNC_ID: string;
				public static PERSON_ID: string;
				public static RAW_CONTENT_URI: android.net.Uri;
			}
			export class Groups {
				public static CONTENT_ITEM_TYPE: string;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
				public static DELETED_CONTENT_URI: android.net.Uri;
				public static GROUP_ANDROID_STARRED: string;
				public static GROUP_MY_CONTACTS: string;
			}
			export class GroupsColumns {
				public static NAME: string;
				public static NOTES: string;
				public static SHOULD_SYNC: string;
				public static SYSTEM_ID: string;
			}
			export class Intents {
				public constructor();
				public static ATTACH_IMAGE: string;
				public static EXTRA_CREATE_DESCRIPTION: string;
				public static EXTRA_FORCE_CREATE: string;
				public static SEARCH_SUGGESTION_CLICKED: string;
				public static SEARCH_SUGGESTION_CREATE_CONTACT_CLICKED: string;
				public static SEARCH_SUGGESTION_DIAL_NUMBER_CLICKED: string;
				public static SHOW_OR_CREATE_CONTACT: string;
			}
			export module Intents {
				export class Insert {
					public constructor();
					public static ACTION: string;
					public static COMPANY: string;
					public static EMAIL: string;
					public static EMAIL_ISPRIMARY: string;
					public static EMAIL_TYPE: string;
					public static FULL_MODE: string;
					public static IM_HANDLE: string;
					public static IM_ISPRIMARY: string;
					public static IM_PROTOCOL: string;
					public static JOB_TITLE: string;
					public static NAME: string;
					public static NOTES: string;
					public static PHONE: string;
					public static PHONETIC_NAME: string;
					public static PHONE_ISPRIMARY: string;
					public static PHONE_TYPE: string;
					public static POSTAL: string;
					public static POSTAL_ISPRIMARY: string;
					public static POSTAL_TYPE: string;
					public static SECONDARY_EMAIL: string;
					public static SECONDARY_EMAIL_TYPE: string;
					public static SECONDARY_PHONE: string;
					public static SECONDARY_PHONE_TYPE: string;
					public static TERTIARY_EMAIL: string;
					public static TERTIARY_EMAIL_TYPE: string;
					public static TERTIARY_PHONE: string;
					public static TERTIARY_PHONE_TYPE: string;
				}
				export class UI {
					public constructor();
					public static FILTER_CONTACTS_ACTION: string;
					public static FILTER_TEXT_EXTRA_KEY: string;
					public static GROUP_NAME_EXTRA_KEY: string;
					public static LIST_ALL_CONTACTS_ACTION: string;
					public static LIST_CONTACTS_WITH_PHONES_ACTION: string;
					public static LIST_DEFAULT: string;
					public static LIST_FREQUENT_ACTION: string;
					public static LIST_GROUP_ACTION: string;
					public static LIST_STARRED_ACTION: string;
					public static LIST_STREQUENT_ACTION: string;
					public static TITLE_EXTRA_KEY: string;
				}
			}
			export class OrganizationColumns {
				public static COMPANY: string;
				public static ISPRIMARY: string;
				public static LABEL: string;
				public static PERSON_ID: string;
				public static TITLE: string;
				public static TYPE: string;
				public static TYPE_CUSTOM: number;
				public static TYPE_OTHER: number;
				public static TYPE_WORK: number;
			}
			export class Organizations {
				public static getDisplayLabel(param0: android.content.Context, param1: number, param2: string): string;
				public static CONTENT_DIRECTORY: string;
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
			}
			export class People {
				public static markAsContacted(param0: android.content.ContentResolver, param1: number): void;
				public static addToMyContactsGroup(param0: android.content.ContentResolver, param1: number): android.net.Uri;
				public static addToGroup(param0: android.content.ContentResolver, param1: number, param2: string): android.net.Uri;
				public static addToGroup(param0: android.content.ContentResolver, param1: number, param2: number): android.net.Uri;
				public static createPersonInMyContactsGroup(param0: android.content.ContentResolver, param1: android.content.ContentValues): android.net.Uri;
				public static queryGroups(param0: android.content.ContentResolver, param1: number): android.database.Cursor;
				public static setPhotoData(param0: android.content.ContentResolver, param1: android.net.Uri, param2: native.Array<number>): void;
				public static openContactPhotoInputStream(param0: android.content.ContentResolver, param1: android.net.Uri): java.io.InputStream;
				public static loadContactPhoto(param0: android.content.Context, param1: android.net.Uri, param2: number, param3: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
				public static CONTENT_FILTER_URI: android.net.Uri;
				public static CONTENT_ITEM_TYPE: string;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
				public static DELETED_CONTENT_URI: android.net.Uri;
				public static PRIMARY_EMAIL_ID: string;
				public static PRIMARY_ORGANIZATION_ID: string;
				public static PRIMARY_PHONE_ID: string;
			}
			export module People {
				export class ContactMethods {
					public static CONTENT_DIRECTORY: string;
					public static DEFAULT_SORT_ORDER: string;
				}
				export class Extensions {
					public static CONTENT_DIRECTORY: string;
					public static DEFAULT_SORT_ORDER: string;
					public static PERSON_ID: string;
				}
				export class Phones {
					public static CONTENT_DIRECTORY: string;
					public static DEFAULT_SORT_ORDER: string;
				}
			}
			export class PeopleColumns {
				public static CUSTOM_RINGTONE: string;
				public static DISPLAY_NAME: string;
				public static LAST_TIME_CONTACTED: string;
				public static NAME: string;
				public static NOTES: string;
				public static PHONETIC_NAME: string;
				public static PHOTO_VERSION: string;
				public static SEND_TO_VOICEMAIL: string;
				public static STARRED: string;
				public static TIMES_CONTACTED: string;
			}
			export class Phones {
				public static getDisplayLabel(param0: android.content.Context, param1: number, param2: string, param3: native.Array<java.lang.CharSequence>): string;
				public static getDisplayLabel(param0: android.content.Context, param1: number, param2: string): string;
				public static CONTENT_FILTER_URL: android.net.Uri;
				public static CONTENT_ITEM_TYPE: string;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
				public static PERSON_ID: string;
			}
			export class PhonesColumns {
				public static ISPRIMARY: string;
				public static LABEL: string;
				public static NUMBER: string;
				public static NUMBER_KEY: string;
				public static TYPE: string;
				public static TYPE_CUSTOM: number;
				public static TYPE_FAX_HOME: number;
				public static TYPE_FAX_WORK: number;
				public static TYPE_HOME: number;
				public static TYPE_MOBILE: number;
				public static TYPE_OTHER: number;
				public static TYPE_PAGER: number;
				public static TYPE_WORK: number;
			}
			export class Photos {
				public static CONTENT_DIRECTORY: string;
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
			}
			export class PhotosColumns {
				public static DATA: string;
				public static DOWNLOAD_REQUIRED: string;
				public static EXISTS_ON_SERVER: string;
				public static LOCAL_VERSION: string;
				public static PERSON_ID: string;
				public static SYNC_ERROR: string;
			}
			export class PresenceColumns {
				public static AVAILABLE: number;
				public static AWAY: number;
				public static DO_NOT_DISTURB: number;
				public static IDLE: number;
				public static IM_ACCOUNT: string;
				public static IM_HANDLE: string;
				public static IM_PROTOCOL: string;
				public static INVISIBLE: number;
				public static OFFLINE: number;
				public static PRESENCE_CUSTOM_STATUS: string;
				public static PRESENCE_STATUS: string;
				public static PRIORITY: string;
			}
			export class Settings {
				public static getSetting(param0: android.content.ContentResolver, param1: string, param2: string): string;
				public static setSetting(param0: android.content.ContentResolver, param1: string, param2: string, param3: string): void;
				public static CONTENT_DIRECTORY: string;
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
				public static SYNC_EVERYTHING: string;
			}
			export class SettingsColumns {
				public static KEY: string;
				public static VALUE: string;
				public static _SYNC_ACCOUNT: string;
				public static _SYNC_ACCOUNT_TYPE: string;
			}
		}
	}
}
