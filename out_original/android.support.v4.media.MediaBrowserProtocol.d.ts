/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class MediaBrowserProtocol {
					public static DATA_CALLING_UID: string;
					public static DATA_MEDIA_ITEM_ID: string;
					public static DATA_MEDIA_ITEM_LIST: string;
					public static DATA_MEDIA_SESSION_TOKEN: string;
					public static DATA_OPTIONS: string;
					public static DATA_PACKAGE_NAME: string;
					public static DATA_RESULT_RECEIVER: string;
					public static DATA_ROOT_HINTS: string;
					public static EXTRA_SERVICE_VERSION: string;
					public static EXTRA_MESSENGER_BINDER: string;
					public static SERVICE_VERSION_1: number;
					public static SERVICE_VERSION_CURRENT: number;
					public static SERVICE_MSG_ON_CONNECT: number;
					public static SERVICE_MSG_ON_CONNECT_FAILED: number;
					public static SERVICE_MSG_ON_LOAD_CHILDREN: number;
					public static CLIENT_VERSION_1: number;
					public static CLIENT_VERSION_CURRENT: number;
					public static CLIENT_MSG_CONNECT: number;
					public static CLIENT_MSG_DISCONNECT: number;
					public static CLIENT_MSG_ADD_SUBSCRIPTION: number;
					public static CLIENT_MSG_REMOVE_SUBSCRIPTION: number;
					public static CLIENT_MSG_GET_MEDIA_ITEM: number;
					public static CLIENT_MSG_REGISTER_CALLBACK_MESSENGER: number;
					public static CLIENT_MSG_UNREGISTER_CALLBACK_MESSENGER: number;
				}
			}
		}
	}
}
