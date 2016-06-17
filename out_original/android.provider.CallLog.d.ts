/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />

declare module android {
	export module provider {
		export class CallLog {
			public constructor();
			public static AUTHORITY: string;
			public static CONTENT_URI: android.net.Uri;
		}
		export module CallLog {
			export class Calls {
				public constructor();
				public static getLastOutgoingCall(param0: android.content.Context): string;
				public static CACHED_FORMATTED_NUMBER: string;
				public static CACHED_LOOKUP_URI: string;
				public static CACHED_MATCHED_NUMBER: string;
				public static CACHED_NAME: string;
				public static CACHED_NORMALIZED_NUMBER: string;
				public static CACHED_NUMBER_LABEL: string;
				public static CACHED_NUMBER_TYPE: string;
				public static CACHED_PHOTO_ID: string;
				public static CACHED_PHOTO_URI: string;
				public static CONTENT_FILTER_URI: android.net.Uri;
				public static CONTENT_ITEM_TYPE: string;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static CONTENT_URI_WITH_VOICEMAIL: android.net.Uri;
				public static COUNTRY_ISO: string;
				public static DATA_USAGE: string;
				public static DATE: string;
				public static DEFAULT_SORT_ORDER: string;
				public static DURATION: string;
				public static EXTRA_CALL_TYPE_FILTER: string;
				public static FEATURES: string;
				public static FEATURES_VIDEO: number;
				public static GEOCODED_LOCATION: string;
				public static INCOMING_TYPE: number;
				public static IS_READ: string;
				public static LIMIT_PARAM_KEY: string;
				public static MISSED_TYPE: number;
				public static NEW: string;
				public static NUMBER: string;
				public static NUMBER_PRESENTATION: string;
				public static OFFSET_PARAM_KEY: string;
				public static OUTGOING_TYPE: number;
				public static PHONE_ACCOUNT_COMPONENT_NAME: string;
				public static PHONE_ACCOUNT_ID: string;
				public static PRESENTATION_ALLOWED: number;
				public static PRESENTATION_PAYPHONE: number;
				public static PRESENTATION_RESTRICTED: number;
				public static PRESENTATION_UNKNOWN: number;
				public static TRANSCRIPTION: string;
				public static TYPE: string;
				public static VOICEMAIL_TYPE: number;
				public static VOICEMAIL_URI: string;
			}
		}
	}
}
