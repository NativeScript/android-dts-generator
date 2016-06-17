/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module content {
		export class RestrictionsManager {
			public getApplicationRestrictions(): android.os.Bundle;
			public hasRestrictionsProvider(): boolean;
			public requestPermission(param0: string, param1: string, param2: android.os.PersistableBundle): void;
			public createLocalApprovalIntent(): android.content.Intent;
			public notifyPermissionResponse(param0: string, param1: android.os.PersistableBundle): void;
			public getManifestRestrictions(param0: string): java.util.List;
			public static convertRestrictionsToBundle(param0: java.util.List): android.os.Bundle;
			public static ACTION_PERMISSION_RESPONSE_RECEIVED: string;
			public static ACTION_REQUEST_LOCAL_APPROVAL: string;
			public static ACTION_REQUEST_PERMISSION: string;
			public static EXTRA_PACKAGE_NAME: string;
			public static EXTRA_REQUEST_BUNDLE: string;
			public static EXTRA_REQUEST_ID: string;
			public static EXTRA_REQUEST_TYPE: string;
			public static EXTRA_RESPONSE_BUNDLE: string;
			public static META_DATA_APP_RESTRICTIONS: string;
			public static REQUEST_KEY_APPROVE_LABEL: string;
			public static REQUEST_KEY_DATA: string;
			public static REQUEST_KEY_DENY_LABEL: string;
			public static REQUEST_KEY_ICON: string;
			public static REQUEST_KEY_ID: string;
			public static REQUEST_KEY_MESSAGE: string;
			public static REQUEST_KEY_NEW_REQUEST: string;
			public static REQUEST_KEY_TITLE: string;
			public static REQUEST_TYPE_APPROVAL: string;
			public static RESPONSE_KEY_ERROR_CODE: string;
			public static RESPONSE_KEY_MESSAGE: string;
			public static RESPONSE_KEY_RESPONSE_TIMESTAMP: string;
			public static RESPONSE_KEY_RESULT: string;
			public static RESULT_APPROVED: number;
			public static RESULT_DENIED: number;
			public static RESULT_ERROR: number;
			public static RESULT_ERROR_BAD_REQUEST: number;
			public static RESULT_ERROR_INTERNAL: number;
			public static RESULT_ERROR_NETWORK: number;
			public static RESULT_NO_RESPONSE: number;
			public static RESULT_UNKNOWN_REQUEST: number;
		}
	}
}
