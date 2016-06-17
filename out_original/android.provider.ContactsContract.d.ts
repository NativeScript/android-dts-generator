/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.content.ContentProviderClient.d.ts" />
/// <reference path="./android.content.ContentProviderOperation.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.EntityIterator.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.util.Pair.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module provider {
		export class ContactsContract {
			public constructor();
			public static isProfileId(param0: number): boolean;
			public static AUTHORITY: string;
			public static AUTHORITY_URI: android.net.Uri;
			public static CALLER_IS_SYNCADAPTER: string;
			public static DEFERRED_SNIPPETING: string;
			public static DEFERRED_SNIPPETING_QUERY: string;
			public static DIRECTORY_PARAM_KEY: string;
			public static LIMIT_PARAM_KEY: string;
			public static PRIMARY_ACCOUNT_NAME: string;
			public static PRIMARY_ACCOUNT_TYPE: string;
			public static REMOVE_DUPLICATE_ENTRIES: string;
			public static STREQUENT_PHONE_ONLY: string;
		}
		export module ContactsContract {
			export class AggregationExceptions {
				public static CONTENT_ITEM_TYPE: string;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static RAW_CONTACT_ID1: string;
				public static RAW_CONTACT_ID2: string;
				public static TYPE: string;
				public static TYPE_AUTOMATIC: number;
				public static TYPE_KEEP_SEPARATE: number;
				public static TYPE_KEEP_TOGETHER: number;
			}
			export class BaseSyncColumns {
				public static SYNC1: string;
				public static SYNC2: string;
				public static SYNC3: string;
				public static SYNC4: string;
			}
			export class CommonDataKinds {
			}
			export module CommonDataKinds {
				export class BaseTypes {
					public static TYPE_CUSTOM: number;
				}
				export class Callable {
					public constructor();
					public static CONTENT_FILTER_URI: android.net.Uri;
					public static CONTENT_URI: android.net.Uri;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
				}
				export class CommonColumns {
					public static DATA: string;
					public static LABEL: string;
					public static TYPE: string;
				}
				export class Contactables {
					public constructor();
					public static CONTENT_FILTER_URI: android.net.Uri;
					public static CONTENT_URI: android.net.Uri;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static VISIBLE_CONTACTS_ONLY: string;
				}
				export class Email {
					public static getTypeLabelResource(param0: number): number;
					public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;
					public static ADDRESS: string;
					public static CONTENT_FILTER_URI: android.net.Uri;
					public static CONTENT_ITEM_TYPE: string;
					public static CONTENT_LOOKUP_URI: android.net.Uri;
					public static CONTENT_TYPE: string;
					public static CONTENT_URI: android.net.Uri;
					public static DISPLAY_NAME: string;
					public static ENTERPRISE_CONTENT_LOOKUP_URI: android.net.Uri;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static TYPE_HOME: number;
					public static TYPE_MOBILE: number;
					public static TYPE_OTHER: number;
					public static TYPE_WORK: number;
				}
				export class Event {
					public static getTypeResource(param0: java.lang.Integer): number;
					public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;
					public static CONTENT_ITEM_TYPE: string;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static START_DATE: string;
					public static TYPE_ANNIVERSARY: number;
					public static TYPE_BIRTHDAY: number;
					public static TYPE_OTHER: number;
				}
				export class GroupMembership {
					public static CONTENT_ITEM_TYPE: string;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static GROUP_ROW_ID: string;
					public static GROUP_SOURCE_ID: string;
				}
				export class Identity {
					public static CONTENT_ITEM_TYPE: string;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static IDENTITY: string;
					public static NAMESPACE: string;
				}
				export class Im {
					public static getTypeLabelResource(param0: number): number;
					public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;
					public static getProtocolLabelResource(param0: number): number;
					public static getProtocolLabel(param0: android.content.res.Resources, param1: number, param2: string): string;
					public static CONTENT_ITEM_TYPE: string;
					public static CUSTOM_PROTOCOL: string;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static PROTOCOL: string;
					public static PROTOCOL_AIM: number;
					public static PROTOCOL_CUSTOM: number;
					public static PROTOCOL_GOOGLE_TALK: number;
					public static PROTOCOL_ICQ: number;
					public static PROTOCOL_JABBER: number;
					public static PROTOCOL_MSN: number;
					public static PROTOCOL_NETMEETING: number;
					public static PROTOCOL_QQ: number;
					public static PROTOCOL_SKYPE: number;
					public static PROTOCOL_YAHOO: number;
					public static TYPE_HOME: number;
					public static TYPE_OTHER: number;
					public static TYPE_WORK: number;
				}
				export class Nickname {
					public static CONTENT_ITEM_TYPE: string;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static NAME: string;
					public static TYPE_DEFAULT: number;
					public static TYPE_INITIALS: number;
					public static TYPE_MAIDEN_NAME: number;
					public static TYPE_MAINDEN_NAME: number;
					public static TYPE_OTHER_NAME: number;
					public static TYPE_SHORT_NAME: number;
				}
				export class Note {
					public static CONTENT_ITEM_TYPE: string;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static NOTE: string;
				}
				export class Organization {
					public static getTypeLabelResource(param0: number): number;
					public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;
					public static COMPANY: string;
					public static CONTENT_ITEM_TYPE: string;
					public static DEPARTMENT: string;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static JOB_DESCRIPTION: string;
					public static OFFICE_LOCATION: string;
					public static PHONETIC_NAME: string;
					public static SYMBOL: string;
					public static TITLE: string;
					public static TYPE_OTHER: number;
					public static TYPE_WORK: number;
				}
				export class Phone {
					public static getTypeLabelResource(param0: number): number;
					public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;
					public static CONTENT_FILTER_URI: android.net.Uri;
					public static CONTENT_ITEM_TYPE: string;
					public static CONTENT_TYPE: string;
					public static CONTENT_URI: android.net.Uri;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static NORMALIZED_NUMBER: string;
					public static NUMBER: string;
					public static SEARCH_DISPLAY_NAME_KEY: string;
					public static SEARCH_PHONE_NUMBER_KEY: string;
					public static TYPE_ASSISTANT: number;
					public static TYPE_CALLBACK: number;
					public static TYPE_CAR: number;
					public static TYPE_COMPANY_MAIN: number;
					public static TYPE_FAX_HOME: number;
					public static TYPE_FAX_WORK: number;
					public static TYPE_HOME: number;
					public static TYPE_ISDN: number;
					public static TYPE_MAIN: number;
					public static TYPE_MMS: number;
					public static TYPE_MOBILE: number;
					public static TYPE_OTHER: number;
					public static TYPE_OTHER_FAX: number;
					public static TYPE_PAGER: number;
					public static TYPE_RADIO: number;
					public static TYPE_TELEX: number;
					public static TYPE_TTY_TDD: number;
					public static TYPE_WORK: number;
					public static TYPE_WORK_MOBILE: number;
					public static TYPE_WORK_PAGER: number;
				}
				export class Photo {
					public static CONTENT_ITEM_TYPE: string;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static PHOTO: string;
					public static PHOTO_FILE_ID: string;
				}
				export class Relation {
					public static getTypeLabelResource(param0: number): number;
					public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;
					public static CONTENT_ITEM_TYPE: string;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static NAME: string;
					public static TYPE_ASSISTANT: number;
					public static TYPE_BROTHER: number;
					public static TYPE_CHILD: number;
					public static TYPE_DOMESTIC_PARTNER: number;
					public static TYPE_FATHER: number;
					public static TYPE_FRIEND: number;
					public static TYPE_MANAGER: number;
					public static TYPE_MOTHER: number;
					public static TYPE_PARENT: number;
					public static TYPE_PARTNER: number;
					public static TYPE_REFERRED_BY: number;
					public static TYPE_RELATIVE: number;
					public static TYPE_SISTER: number;
					public static TYPE_SPOUSE: number;
				}
				export class SipAddress {
					public static getTypeLabelResource(param0: number): number;
					public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;
					public static CONTENT_ITEM_TYPE: string;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static SIP_ADDRESS: string;
					public static TYPE_HOME: number;
					public static TYPE_OTHER: number;
					public static TYPE_WORK: number;
				}
				export class StructuredName {
					public static CONTENT_ITEM_TYPE: string;
					public static DISPLAY_NAME: string;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static FAMILY_NAME: string;
					public static FULL_NAME_STYLE: string;
					public static GIVEN_NAME: string;
					public static MIDDLE_NAME: string;
					public static PHONETIC_FAMILY_NAME: string;
					public static PHONETIC_GIVEN_NAME: string;
					public static PHONETIC_MIDDLE_NAME: string;
					public static PREFIX: string;
					public static SUFFIX: string;
				}
				export class StructuredPostal {
					public static getTypeLabelResource(param0: number): number;
					public static getTypeLabel(param0: android.content.res.Resources, param1: number, param2: string): string;
					public static CITY: string;
					public static CONTENT_ITEM_TYPE: string;
					public static CONTENT_TYPE: string;
					public static CONTENT_URI: android.net.Uri;
					public static COUNTRY: string;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static FORMATTED_ADDRESS: string;
					public static NEIGHBORHOOD: string;
					public static POBOX: string;
					public static POSTCODE: string;
					public static REGION: string;
					public static STREET: string;
					public static TYPE_HOME: number;
					public static TYPE_OTHER: number;
					public static TYPE_WORK: number;
				}
				export class Website {
					public static CONTENT_ITEM_TYPE: string;
					public static EXTRA_ADDRESS_BOOK_INDEX: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
					public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
					public static TYPE_BLOG: number;
					public static TYPE_FTP: number;
					public static TYPE_HOME: number;
					public static TYPE_HOMEPAGE: number;
					public static TYPE_OTHER: number;
					public static TYPE_PROFILE: number;
					public static TYPE_WORK: number;
					public static URL: string;
				}
			}
			export class ContactNameColumns {
				public static DISPLAY_NAME_ALTERNATIVE: string;
				public static DISPLAY_NAME_PRIMARY: string;
				public static DISPLAY_NAME_SOURCE: string;
				public static PHONETIC_NAME: string;
				public static PHONETIC_NAME_STYLE: string;
				public static SORT_KEY_ALTERNATIVE: string;
				public static SORT_KEY_PRIMARY: string;
			}
			export class ContactOptionsColumns {
				public static CUSTOM_RINGTONE: string;
				public static LAST_TIME_CONTACTED: string;
				public static PINNED: string;
				public static SEND_TO_VOICEMAIL: string;
				public static STARRED: string;
				public static TIMES_CONTACTED: string;
			}
			export class ContactStatusColumns {
				public static CONTACT_CHAT_CAPABILITY: string;
				public static CONTACT_PRESENCE: string;
				public static CONTACT_STATUS: string;
				public static CONTACT_STATUS_ICON: string;
				public static CONTACT_STATUS_LABEL: string;
				public static CONTACT_STATUS_RES_PACKAGE: string;
				public static CONTACT_STATUS_TIMESTAMP: string;
			}
			export class Contacts {
				public static getLookupUri(param0: android.content.ContentResolver, param1: android.net.Uri): android.net.Uri;
				public static getLookupUri(param0: number, param1: string): android.net.Uri;
				public static lookupContact(param0: android.content.ContentResolver, param1: android.net.Uri): android.net.Uri;
				public static markAsContacted(param0: android.content.ContentResolver, param1: number): void;
				public static isEnterpriseContactId(param0: number): boolean;
				public static openContactPhotoInputStream(param0: android.content.ContentResolver, param1: android.net.Uri, param2: boolean): java.io.InputStream;
				public static openContactPhotoInputStream(param0: android.content.ContentResolver, param1: android.net.Uri): java.io.InputStream;
				public static CONTENT_FILTER_URI: android.net.Uri;
				public static CONTENT_FREQUENT_URI: android.net.Uri;
				public static CONTENT_GROUP_URI: android.net.Uri;
				public static CONTENT_ITEM_TYPE: string;
				public static CONTENT_LOOKUP_URI: android.net.Uri;
				public static CONTENT_MULTI_VCARD_URI: android.net.Uri;
				public static CONTENT_STREQUENT_FILTER_URI: android.net.Uri;
				public static CONTENT_STREQUENT_URI: android.net.Uri;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static CONTENT_VCARD_TYPE: string;
				public static CONTENT_VCARD_URI: android.net.Uri;
				public static EXTRA_ADDRESS_BOOK_INDEX: string;
				public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
				public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
				public static QUERY_PARAMETER_VCARD_NO_PHOTO: string;
			}
			export module Contacts {
				export class AggregationSuggestions {
					public static CONTENT_DIRECTORY: string;
				}
				export module AggregationSuggestions {
					export class Builder {
						public constructor();
						public setContactId(param0: number): android.provider.ContactsContract.Contacts.AggregationSuggestions.Builder;
						public addNameParameter(param0: string): android.provider.ContactsContract.Contacts.AggregationSuggestions.Builder;
						public setLimit(param0: number): android.provider.ContactsContract.Contacts.AggregationSuggestions.Builder;
						public build(): android.net.Uri;
					}
				}
				export class Data {
					public static CONTENT_DIRECTORY: string;
				}
				export class Entity {
					public static CONTENT_DIRECTORY: string;
					public static DATA_ID: string;
					public static RAW_CONTACT_ID: string;
				}
				export class Photo {
					public static CONTENT_DIRECTORY: string;
					public static DISPLAY_PHOTO: string;
					public static PHOTO: string;
					public static PHOTO_FILE_ID: string;
				}
			}
			export class ContactsColumns {
				public static CONTACT_LAST_UPDATED_TIMESTAMP: string;
				public static DISPLAY_NAME: string;
				public static HAS_PHONE_NUMBER: string;
				public static IN_DEFAULT_DIRECTORY: string;
				public static IN_VISIBLE_GROUP: string;
				public static IS_USER_PROFILE: string;
				public static LOOKUP_KEY: string;
				public static NAME_RAW_CONTACT_ID: string;
				public static PHOTO_FILE_ID: string;
				public static PHOTO_ID: string;
				public static PHOTO_THUMBNAIL_URI: string;
				public static PHOTO_URI: string;
			}
			export class Data {
				public static getContactLookupUri(param0: android.content.ContentResolver, param1: android.net.Uri): android.net.Uri;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static EXTRA_ADDRESS_BOOK_INDEX: string;
				public static EXTRA_ADDRESS_BOOK_INDEX_COUNTS: string;
				public static EXTRA_ADDRESS_BOOK_INDEX_TITLES: string;
				public static VISIBLE_CONTACTS_ONLY: string;
			}
			export class DataColumns {
				public static CARRIER_PRESENCE: string;
				public static CARRIER_PRESENCE_VT_CAPABLE: number;
				public static DATA1: string;
				public static DATA10: string;
				public static DATA11: string;
				public static DATA12: string;
				public static DATA13: string;
				public static DATA14: string;
				public static DATA15: string;
				public static DATA2: string;
				public static DATA3: string;
				public static DATA4: string;
				public static DATA5: string;
				public static DATA6: string;
				public static DATA7: string;
				public static DATA8: string;
				public static DATA9: string;
				public static DATA_VERSION: string;
				public static IS_PRIMARY: string;
				public static IS_READ_ONLY: string;
				public static IS_SUPER_PRIMARY: string;
				public static MIMETYPE: string;
				public static RAW_CONTACT_ID: string;
				public static RES_PACKAGE: string;
				public static SYNC1: string;
				public static SYNC2: string;
				public static SYNC3: string;
				public static SYNC4: string;
			}
			export class DataColumnsWithJoins {
			}
			export class DataUsageFeedback {
				public constructor();
				public static DELETE_USAGE_URI: android.net.Uri;
				public static FEEDBACK_URI: android.net.Uri;
				public static USAGE_TYPE: string;
				public static USAGE_TYPE_CALL: string;
				public static USAGE_TYPE_LONG_TEXT: string;
				public static USAGE_TYPE_SHORT_TEXT: string;
			}
			export class DataUsageStatColumns {
				public static LAST_TIME_USED: string;
				public static TIMES_USED: string;
			}
			export class DeletedContacts {
				public static CONTENT_URI: android.net.Uri;
				public static DAYS_KEPT_MILLISECONDS: number;
			}
			export class DeletedContactsColumns {
				public static CONTACT_DELETED_TIMESTAMP: string;
				public static CONTACT_ID: string;
			}
			export class Directory {
				public static notifyDirectoryChange(param0: android.content.ContentResolver): void;
				public static ACCOUNT_NAME: string;
				public static ACCOUNT_TYPE: string;
				public static CONTENT_ITEM_TYPE: string;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT: number;
				public static DIRECTORY_AUTHORITY: string;
				public static DISPLAY_NAME: string;
				public static EXPORT_SUPPORT: string;
				public static EXPORT_SUPPORT_ANY_ACCOUNT: number;
				public static EXPORT_SUPPORT_NONE: number;
				public static EXPORT_SUPPORT_SAME_ACCOUNT_ONLY: number;
				public static LOCAL_INVISIBLE: number;
				public static PACKAGE_NAME: string;
				public static PHOTO_SUPPORT: string;
				public static PHOTO_SUPPORT_FULL: number;
				public static PHOTO_SUPPORT_FULL_SIZE_ONLY: number;
				public static PHOTO_SUPPORT_NONE: number;
				public static PHOTO_SUPPORT_THUMBNAIL_ONLY: number;
				public static SHORTCUT_SUPPORT: string;
				public static SHORTCUT_SUPPORT_DATA_ITEMS_ONLY: number;
				public static SHORTCUT_SUPPORT_FULL: number;
				public static SHORTCUT_SUPPORT_NONE: number;
				public static TYPE_RESOURCE_ID: string;
			}
			export class DisplayNameSources {
				public static EMAIL: number;
				public static NICKNAME: number;
				public static ORGANIZATION: number;
				public static PHONE: number;
				public static STRUCTURED_NAME: number;
				public static STRUCTURED_PHONETIC_NAME: number;
				public static UNDEFINED: number;
			}
			export class DisplayPhoto {
				public static CONTENT_MAX_DIMENSIONS_URI: android.net.Uri;
				public static CONTENT_URI: android.net.Uri;
				public static DISPLAY_MAX_DIM: string;
				public static THUMBNAIL_MAX_DIM: string;
			}
			export class FullNameStyle {
				public static CHINESE: number;
				public static CJK: number;
				public static JAPANESE: number;
				public static KOREAN: number;
				public static UNDEFINED: number;
				public static WESTERN: number;
			}
			export class Groups {
				public static newEntityIterator(param0: android.database.Cursor): android.content.EntityIterator;
				public static CONTENT_ITEM_TYPE: string;
				public static CONTENT_SUMMARY_URI: android.net.Uri;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
			}
			export class GroupsColumns {
				public static AUTO_ADD: string;
				public static DATA_SET: string;
				public static DELETED: string;
				public static FAVORITES: string;
				public static GROUP_IS_READ_ONLY: string;
				public static GROUP_VISIBLE: string;
				public static NOTES: string;
				public static RES_PACKAGE: string;
				public static SHOULD_SYNC: string;
				public static SUMMARY_COUNT: string;
				public static SUMMARY_WITH_PHONES: string;
				public static SYSTEM_ID: string;
				public static TITLE: string;
				public static TITLE_RES: string;
			}
			export class Intents {
				public constructor();
				public static ATTACH_IMAGE: string;
				public static CONTACTS_DATABASE_CREATED: string;
				public static EXTRA_CREATE_DESCRIPTION: string;
				public static EXTRA_FORCE_CREATE: string;
				public static INVITE_CONTACT: string;
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
					public static DATA: string;
					public static EMAIL: string;
					public static EMAIL_ISPRIMARY: string;
					public static EMAIL_TYPE: string;
					public static EXTRA_ACCOUNT: string;
					public static EXTRA_DATA_SET: string;
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
			}
			export class PhoneLookup {
				public static CONTENT_FILTER_URI: android.net.Uri;
				public static ENTERPRISE_CONTENT_FILTER_URI: android.net.Uri;
				public static QUERY_PARAMETER_SIP_ADDRESS: string;
			}
			export class PhoneLookupColumns {
				public static LABEL: string;
				public static NORMALIZED_NUMBER: string;
				public static NUMBER: string;
				public static TYPE: string;
			}
			export class PhoneticNameStyle {
				public static JAPANESE: number;
				public static KOREAN: number;
				public static PINYIN: number;
				public static UNDEFINED: number;
			}
			export class PinnedPositions {
				public constructor();
				public static undemote(param0: android.content.ContentResolver, param1: number): void;
				public static pin(param0: android.content.ContentResolver, param1: number, param2: number): void;
				public static DEMOTED: number;
				public static UNPINNED: number;
			}
			export class Presence {
				public constructor();
			}
			export class PresenceColumns {
				public static CUSTOM_PROTOCOL: string;
				public static DATA_ID: string;
				public static IM_ACCOUNT: string;
				public static IM_HANDLE: string;
				public static PROTOCOL: string;
			}
			export class Profile {
				public static CONTENT_RAW_CONTACTS_URI: android.net.Uri;
				public static CONTENT_URI: android.net.Uri;
				public static CONTENT_VCARD_URI: android.net.Uri;
				public static MIN_ID: number;
			}
			export class ProfileSyncState {
				public static get(param0: android.content.ContentProviderClient, param1: android.accounts.Account): native.Array<number>;
				public static getWithUri(param0: android.content.ContentProviderClient, param1: android.accounts.Account): android.util.Pair;
				public static set(param0: android.content.ContentProviderClient, param1: android.accounts.Account, param2: native.Array<number>): void;
				public static newSetOperation(param0: android.accounts.Account, param1: native.Array<number>): android.content.ContentProviderOperation;
				public static CONTENT_DIRECTORY: string;
				public static CONTENT_URI: android.net.Uri;
			}
			export class ProviderStatus {
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static STATUS: string;
				public static STATUS_BUSY: number;
				public static STATUS_EMPTY: number;
				public static STATUS_NORMAL: number;
			}
			export class QuickContact {
				public constructor();
				public static showQuickContact(param0: android.content.Context, param1: android.view.View, param2: android.net.Uri, param3: number, param4: native.Array<string>): void;
				public static showQuickContact(param0: android.content.Context, param1: android.graphics.Rect, param2: android.net.Uri, param3: number, param4: native.Array<string>): void;
				public static showQuickContact(param0: android.content.Context, param1: android.view.View, param2: android.net.Uri, param3: native.Array<string>, param4: string): void;
				public static showQuickContact(param0: android.content.Context, param1: android.graphics.Rect, param2: android.net.Uri, param3: native.Array<string>, param4: string): void;
				public static ACTION_QUICK_CONTACT: string;
				public static EXTRA_EXCLUDE_MIMES: string;
				public static EXTRA_MODE: string;
				public static EXTRA_PRIORITIZED_MIMETYPE: string;
				public static MODE_LARGE: number;
				public static MODE_MEDIUM: number;
				public static MODE_SMALL: number;
			}
			export class RawContacts {
				public static getContactLookupUri(param0: android.content.ContentResolver, param1: android.net.Uri): android.net.Uri;
				public static newEntityIterator(param0: android.database.Cursor): android.content.EntityIterator;
				public static AGGREGATION_MODE_DEFAULT: number;
				public static AGGREGATION_MODE_DISABLED: number;
				public static AGGREGATION_MODE_IMMEDIATE: number;
				public static AGGREGATION_MODE_SUSPENDED: number;
				public static CONTENT_ITEM_TYPE: string;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
			}
			export module RawContacts {
				export class Data {
					public static CONTENT_DIRECTORY: string;
				}
				export class DisplayPhoto {
					public static CONTENT_DIRECTORY: string;
				}
				export class Entity {
					public static CONTENT_DIRECTORY: string;
					public static DATA_ID: string;
				}
			}
			export class RawContactsColumns {
				public static ACCOUNT_TYPE_AND_DATA_SET: string;
				public static AGGREGATION_MODE: string;
				public static CONTACT_ID: string;
				public static DATA_SET: string;
				public static DELETED: string;
				public static RAW_CONTACT_IS_READ_ONLY: string;
				public static RAW_CONTACT_IS_USER_PROFILE: string;
			}
			export class RawContactsEntity {
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static DATA_ID: string;
				public static PROFILE_CONTENT_URI: android.net.Uri;
			}
			export class SearchSnippets {
				public constructor();
				public static DEFERRED_SNIPPETING_KEY: string;
				public static SNIPPET: string;
			}
			export class Settings {
				public static CONTENT_ITEM_TYPE: string;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
			}
			export class SettingsColumns {
				public static ACCOUNT_NAME: string;
				public static ACCOUNT_TYPE: string;
				public static ANY_UNSYNCED: string;
				public static DATA_SET: string;
				public static SHOULD_SYNC: string;
				public static UNGROUPED_COUNT: string;
				public static UNGROUPED_VISIBLE: string;
				public static UNGROUPED_WITH_PHONES: string;
			}
			export class StatusColumns {
				public static AVAILABLE: number;
				public static AWAY: number;
				public static CAPABILITY_HAS_CAMERA: number;
				public static CAPABILITY_HAS_VIDEO: number;
				public static CAPABILITY_HAS_VOICE: number;
				public static CHAT_CAPABILITY: string;
				public static DO_NOT_DISTURB: number;
				public static IDLE: number;
				public static INVISIBLE: number;
				public static OFFLINE: number;
				public static PRESENCE: string;
				public static PRESENCE_CUSTOM_STATUS: string;
				public static PRESENCE_STATUS: string;
				public static STATUS: string;
				public static STATUS_ICON: string;
				public static STATUS_LABEL: string;
				public static STATUS_RES_PACKAGE: string;
				public static STATUS_TIMESTAMP: string;
			}
			export class StatusUpdates {
				public static getPresenceIconResourceId(param0: number): number;
				public static getPresencePrecedence(param0: number): number;
				public static CONTENT_ITEM_TYPE: string;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static PROFILE_CONTENT_URI: android.net.Uri;
			}
			export class SyncColumns {
				public static ACCOUNT_NAME: string;
				public static ACCOUNT_TYPE: string;
				public static DIRTY: string;
				public static SOURCE_ID: string;
				public static VERSION: string;
			}
			export class SyncState {
				public static get(param0: android.content.ContentProviderClient, param1: android.accounts.Account): native.Array<number>;
				public static getWithUri(param0: android.content.ContentProviderClient, param1: android.accounts.Account): android.util.Pair;
				public static set(param0: android.content.ContentProviderClient, param1: android.accounts.Account, param2: native.Array<number>): void;
				public static newSetOperation(param0: android.accounts.Account, param1: native.Array<number>): android.content.ContentProviderOperation;
				public static CONTENT_DIRECTORY: string;
				public static CONTENT_URI: android.net.Uri;
			}
		}
	}
}
