/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module provider {
		export class VoicemailContract {
			public static ACTION_FETCH_VOICEMAIL: string;
			public static ACTION_NEW_VOICEMAIL: string;
			public static AUTHORITY: string;
			public static EXTRA_SELF_CHANGE: string;
			public static PARAM_KEY_SOURCE_PACKAGE: string;
		}
		export module VoicemailContract {
			export class Status {
				public static buildSourceUri(param0: string): android.net.Uri;
				public static CONFIGURATION_STATE: string;
				public static CONFIGURATION_STATE_CAN_BE_CONFIGURED: number;
				public static CONFIGURATION_STATE_NOT_CONFIGURED: number;
				public static CONFIGURATION_STATE_OK: number;
				public static CONTENT_URI: android.net.Uri;
				public static DATA_CHANNEL_STATE: string;
				public static DATA_CHANNEL_STATE_NO_CONNECTION: number;
				public static DATA_CHANNEL_STATE_OK: number;
				public static DIR_TYPE: string;
				public static ITEM_TYPE: string;
				public static NOTIFICATION_CHANNEL_STATE: string;
				public static NOTIFICATION_CHANNEL_STATE_MESSAGE_WAITING: number;
				public static NOTIFICATION_CHANNEL_STATE_NO_CONNECTION: number;
				public static NOTIFICATION_CHANNEL_STATE_OK: number;
				public static PHONE_ACCOUNT_COMPONENT_NAME: string;
				public static PHONE_ACCOUNT_ID: string;
				public static SETTINGS_URI: string;
				public static SOURCE_PACKAGE: string;
				public static VOICEMAIL_ACCESS_URI: string;
			}
			export class Voicemails {
				public static buildSourceUri(param0: string): android.net.Uri;
				public static CONTENT_URI: android.net.Uri;
				public static DATE: string;
				public static DELETED: string;
				public static DIRTY: string;
				public static DIR_TYPE: string;
				public static DURATION: string;
				public static HAS_CONTENT: string;
				public static IS_READ: string;
				public static ITEM_TYPE: string;
				public static MIME_TYPE: string;
				public static NUMBER: string;
				public static PHONE_ACCOUNT_COMPONENT_NAME: string;
				public static PHONE_ACCOUNT_ID: string;
				public static SOURCE_DATA: string;
				public static SOURCE_PACKAGE: string;
				public static TRANSCRIPTION: string;
			}
		}
	}
}
