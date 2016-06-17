/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module telephony {
		export class SmsManager {
			public sendTextMessage(param0: string, param1: string, param2: string, param3: android.app.PendingIntent, param4: android.app.PendingIntent): void;
			public injectSmsPdu(param0: native.Array<number>, param1: string, param2: android.app.PendingIntent): void;
			public divideMessage(param0: string): java.util.ArrayList;
			public sendMultipartTextMessage(param0: string, param1: string, param2: java.util.ArrayList, param3: java.util.ArrayList, param4: java.util.ArrayList): void;
			public sendDataMessage(param0: string, param1: string, param2: number, param3: native.Array<number>, param4: android.app.PendingIntent, param5: android.app.PendingIntent): void;
			public static getDefault(): android.telephony.SmsManager;
			public static getSmsManagerForSubscriptionId(param0: number): android.telephony.SmsManager;
			public getSubscriptionId(): number;
			public static getDefaultSmsSubscriptionId(): number;
			public sendMultimediaMessage(param0: android.content.Context, param1: android.net.Uri, param2: string, param3: android.os.Bundle, param4: android.app.PendingIntent): void;
			public downloadMultimediaMessage(param0: android.content.Context, param1: string, param2: android.net.Uri, param3: android.os.Bundle, param4: android.app.PendingIntent): void;
			public getCarrierConfigValues(): android.os.Bundle;
			public static EXTRA_MMS_DATA: string;
			public static EXTRA_MMS_HTTP_STATUS: string;
			public static MMS_CONFIG_ALIAS_ENABLED: string;
			public static MMS_CONFIG_ALIAS_MAX_CHARS: string;
			public static MMS_CONFIG_ALIAS_MIN_CHARS: string;
			public static MMS_CONFIG_ALLOW_ATTACH_AUDIO: string;
			public static MMS_CONFIG_APPEND_TRANSACTION_ID: string;
			public static MMS_CONFIG_EMAIL_GATEWAY_NUMBER: string;
			public static MMS_CONFIG_GROUP_MMS_ENABLED: string;
			public static MMS_CONFIG_HTTP_PARAMS: string;
			public static MMS_CONFIG_HTTP_SOCKET_TIMEOUT: string;
			public static MMS_CONFIG_MAX_IMAGE_HEIGHT: string;
			public static MMS_CONFIG_MAX_IMAGE_WIDTH: string;
			public static MMS_CONFIG_MAX_MESSAGE_SIZE: string;
			public static MMS_CONFIG_MESSAGE_TEXT_MAX_SIZE: string;
			public static MMS_CONFIG_MMS_DELIVERY_REPORT_ENABLED: string;
			public static MMS_CONFIG_MMS_ENABLED: string;
			public static MMS_CONFIG_MMS_READ_REPORT_ENABLED: string;
			public static MMS_CONFIG_MULTIPART_SMS_ENABLED: string;
			public static MMS_CONFIG_NAI_SUFFIX: string;
			public static MMS_CONFIG_NOTIFY_WAP_MMSC_ENABLED: string;
			public static MMS_CONFIG_RECIPIENT_LIMIT: string;
			public static MMS_CONFIG_SEND_MULTIPART_SMS_AS_SEPARATE_MESSAGES: string;
			public static MMS_CONFIG_SHOW_CELL_BROADCAST_APP_LINKS: string;
			public static MMS_CONFIG_SMS_DELIVERY_REPORT_ENABLED: string;
			public static MMS_CONFIG_SMS_TO_MMS_TEXT_LENGTH_THRESHOLD: string;
			public static MMS_CONFIG_SMS_TO_MMS_TEXT_THRESHOLD: string;
			public static MMS_CONFIG_SUBJECT_MAX_LENGTH: string;
			public static MMS_CONFIG_SUPPORT_HTTP_CHARSET_HEADER: string;
			public static MMS_CONFIG_SUPPORT_MMS_CONTENT_DISPOSITION: string;
			public static MMS_CONFIG_UA_PROF_TAG_NAME: string;
			public static MMS_CONFIG_UA_PROF_URL: string;
			public static MMS_CONFIG_USER_AGENT: string;
			public static MMS_ERROR_CONFIGURATION_ERROR: number;
			public static MMS_ERROR_HTTP_FAILURE: number;
			public static MMS_ERROR_INVALID_APN: number;
			public static MMS_ERROR_IO_ERROR: number;
			public static MMS_ERROR_NO_DATA_NETWORK: number;
			public static MMS_ERROR_RETRY: number;
			public static MMS_ERROR_UNABLE_CONNECT_MMS: number;
			public static MMS_ERROR_UNSPECIFIED: number;
			public static RESULT_ERROR_GENERIC_FAILURE: number;
			public static RESULT_ERROR_NO_SERVICE: number;
			public static RESULT_ERROR_NULL_PDU: number;
			public static RESULT_ERROR_RADIO_OFF: number;
			public static STATUS_ON_ICC_FREE: number;
			public static STATUS_ON_ICC_READ: number;
			public static STATUS_ON_ICC_SENT: number;
			public static STATUS_ON_ICC_UNREAD: number;
			public static STATUS_ON_ICC_UNSENT: number;
		}
	}
}
