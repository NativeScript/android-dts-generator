/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.telephony.SmsMessage.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module provider {
		export class Telephony {
		}
		export module Telephony {
			export class BaseMmsColumns {
				public static CONTENT_CLASS: string;
				public static CONTENT_LOCATION: string;
				public static CONTENT_TYPE: string;
				public static CREATOR: string;
				public static DATE: string;
				public static DATE_SENT: string;
				public static DELIVERY_REPORT: string;
				public static DELIVERY_TIME: string;
				public static EXPIRY: string;
				public static LOCKED: string;
				public static MESSAGE_BOX: string;
				public static MESSAGE_BOX_ALL: number;
				public static MESSAGE_BOX_DRAFTS: number;
				public static MESSAGE_BOX_FAILED: number;
				public static MESSAGE_BOX_INBOX: number;
				public static MESSAGE_BOX_OUTBOX: number;
				public static MESSAGE_BOX_SENT: number;
				public static MESSAGE_CLASS: string;
				public static MESSAGE_ID: string;
				public static MESSAGE_SIZE: string;
				public static MESSAGE_TYPE: string;
				public static MMS_VERSION: string;
				public static PRIORITY: string;
				public static READ: string;
				public static READ_REPORT: string;
				public static READ_STATUS: string;
				public static REPORT_ALLOWED: string;
				public static RESPONSE_STATUS: string;
				public static RESPONSE_TEXT: string;
				public static RETRIEVE_STATUS: string;
				public static RETRIEVE_TEXT: string;
				public static RETRIEVE_TEXT_CHARSET: string;
				public static SEEN: string;
				public static STATUS: string;
				public static SUBJECT: string;
				public static SUBJECT_CHARSET: string;
				public static SUBSCRIPTION_ID: string;
				public static TEXT_ONLY: string;
				public static THREAD_ID: string;
				public static TRANSACTION_ID: string;
			}
			export class CanonicalAddressesColumns {
				public static ADDRESS: string;
			}
			export class Carriers {
				public static APN: string;
				public static AUTH_TYPE: string;
				public static BEARER: string;
				public static CARRIER_ENABLED: string;
				public static CONTENT_URI: android.net.Uri;
				public static CURRENT: string;
				public static DEFAULT_SORT_ORDER: string;
				public static MCC: string;
				public static MMSC: string;
				public static MMSPORT: string;
				public static MMSPROXY: string;
				public static MNC: string;
				public static MVNO_MATCH_DATA: string;
				public static MVNO_TYPE: string;
				public static NAME: string;
				public static NUMERIC: string;
				public static PASSWORD: string;
				public static PORT: string;
				public static PROTOCOL: string;
				public static PROXY: string;
				public static ROAMING_PROTOCOL: string;
				public static SERVER: string;
				public static SUBSCRIPTION_ID: string;
				public static TYPE: string;
				public static USER: string;
			}
			export class Mms {
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
				public static REPORT_REQUEST_URI: android.net.Uri;
				public static REPORT_STATUS_URI: android.net.Uri;
			}
			export module Mms {
				export class Addr {
					public static ADDRESS: string;
					public static CHARSET: string;
					public static CONTACT_ID: string;
					public static MSG_ID: string;
					public static TYPE: string;
				}
				export class Draft {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
				export class Inbox {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
				export class Intents {
					public static CONTENT_CHANGED_ACTION: string;
					public static DELETED_CONTENTS: string;
				}
				export class Outbox {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
				export class Part {
					public static CHARSET: string;
					public static CONTENT_DISPOSITION: string;
					public static CONTENT_ID: string;
					public static CONTENT_LOCATION: string;
					public static CONTENT_TYPE: string;
					public static CT_START: string;
					public static CT_TYPE: string;
					public static FILENAME: string;
					public static MSG_ID: string;
					public static NAME: string;
					public static SEQ: string;
					public static TEXT: string;
					public static _DATA: string;
				}
				export class Rate {
					public static CONTENT_URI: android.net.Uri;
					public static SENT_TIME: string;
				}
				export class Sent {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
			}
			export class MmsSms {
				public static CONTENT_CONVERSATIONS_URI: android.net.Uri;
				public static CONTENT_DRAFT_URI: android.net.Uri;
				public static CONTENT_FILTER_BYPHONE_URI: android.net.Uri;
				public static CONTENT_LOCKED_URI: android.net.Uri;
				public static CONTENT_UNDELIVERED_URI: android.net.Uri;
				public static CONTENT_URI: android.net.Uri;
				public static ERR_TYPE_GENERIC: number;
				public static ERR_TYPE_GENERIC_PERMANENT: number;
				public static ERR_TYPE_MMS_PROTO_PERMANENT: number;
				public static ERR_TYPE_MMS_PROTO_TRANSIENT: number;
				public static ERR_TYPE_SMS_PROTO_PERMANENT: number;
				public static ERR_TYPE_SMS_PROTO_TRANSIENT: number;
				public static ERR_TYPE_TRANSPORT_FAILURE: number;
				public static MMS_PROTO: number;
				public static NO_ERROR: number;
				public static SEARCH_URI: android.net.Uri;
				public static SMS_PROTO: number;
				public static TYPE_DISCRIMINATOR_COLUMN: string;
			}
			export module MmsSms {
				export class PendingMessages {
					public static CONTENT_URI: android.net.Uri;
					public static DUE_TIME: string;
					public static ERROR_CODE: string;
					public static ERROR_TYPE: string;
					public static LAST_TRY: string;
					public static MSG_ID: string;
					public static MSG_TYPE: string;
					public static PROTO_TYPE: string;
					public static RETRY_INDEX: string;
					public static SUBSCRIPTION_ID: string;
				}
			}
			export class Sms {
				public static getDefaultSmsPackage(param0: android.content.Context): string;
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
			}
			export module Sms {
				export class Conversations {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
					public static MESSAGE_COUNT: string;
					public static SNIPPET: string;
				}
				export class Draft {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
				export class Inbox {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
				export class Intents {
					public static getMessagesFromIntent(param0: android.content.Intent): native.Array<android.telephony.SmsMessage>;
					public static ACTION_CHANGE_DEFAULT: string;
					public static DATA_SMS_RECEIVED_ACTION: string;
					public static EXTRA_PACKAGE_NAME: string;
					public static RESULT_SMS_DUPLICATED: number;
					public static RESULT_SMS_GENERIC_ERROR: number;
					public static RESULT_SMS_HANDLED: number;
					public static RESULT_SMS_OUT_OF_MEMORY: number;
					public static RESULT_SMS_UNSUPPORTED: number;
					public static SIM_FULL_ACTION: string;
					public static SMS_CB_RECEIVED_ACTION: string;
					public static SMS_DELIVER_ACTION: string;
					public static SMS_EMERGENCY_CB_RECEIVED_ACTION: string;
					public static SMS_RECEIVED_ACTION: string;
					public static SMS_REJECTED_ACTION: string;
					public static SMS_SERVICE_CATEGORY_PROGRAM_DATA_RECEIVED_ACTION: string;
					public static WAP_PUSH_DELIVER_ACTION: string;
					public static WAP_PUSH_RECEIVED_ACTION: string;
				}
				export class Outbox {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
				export class Sent {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
			}
			export class TextBasedSmsColumns {
				public static ADDRESS: string;
				public static BODY: string;
				public static CREATOR: string;
				public static DATE: string;
				public static DATE_SENT: string;
				public static ERROR_CODE: string;
				public static LOCKED: string;
				public static MESSAGE_TYPE_ALL: number;
				public static MESSAGE_TYPE_DRAFT: number;
				public static MESSAGE_TYPE_FAILED: number;
				public static MESSAGE_TYPE_INBOX: number;
				public static MESSAGE_TYPE_OUTBOX: number;
				public static MESSAGE_TYPE_QUEUED: number;
				public static MESSAGE_TYPE_SENT: number;
				public static PERSON: string;
				public static PROTOCOL: string;
				public static READ: string;
				public static REPLY_PATH_PRESENT: string;
				public static SEEN: string;
				public static SERVICE_CENTER: string;
				public static STATUS: string;
				public static STATUS_COMPLETE: number;
				public static STATUS_FAILED: number;
				public static STATUS_NONE: number;
				public static STATUS_PENDING: number;
				public static SUBJECT: string;
				public static SUBSCRIPTION_ID: string;
				public static THREAD_ID: string;
				public static TYPE: string;
			}
			export class Threads {
				public static getOrCreateThreadId(param0: android.content.Context, param1: string): number;
				public static getOrCreateThreadId(param0: android.content.Context, param1: java.util.Set): number;
				public static BROADCAST_THREAD: number;
				public static COMMON_THREAD: number;
				public static CONTENT_URI: android.net.Uri;
				public static OBSOLETE_THREADS_URI: android.net.Uri;
			}
			export class ThreadsColumns {
				public static ARCHIVED: string;
				public static DATE: string;
				public static ERROR: string;
				public static HAS_ATTACHMENT: string;
				public static MESSAGE_COUNT: string;
				public static READ: string;
				public static RECIPIENT_IDS: string;
				public static SNIPPET: string;
				public static SNIPPET_CHARSET: string;
				public static TYPE: string;
			}
		}
	}
}
