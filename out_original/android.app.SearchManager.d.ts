/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.SearchableInfo.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module app {
		export class SearchManager {
			public startSearch(param0: string, param1: boolean, param2: android.content.ComponentName, param3: android.os.Bundle, param4: boolean): void;
			public getGlobalSearchActivity(): android.content.ComponentName;
			public triggerSearch(param0: string, param1: android.content.ComponentName, param2: android.os.Bundle): void;
			public stopSearch(): void;
			public setOnDismissListener(param0: android.app.SearchManager.OnDismissListener): void;
			public setOnCancelListener(param0: android.app.SearchManager.OnCancelListener): void;
			public onCancel(param0: android.content.DialogInterface): void;
			public onDismiss(param0: android.content.DialogInterface): void;
			public getSearchableInfo(param0: android.content.ComponentName): android.app.SearchableInfo;
			public getSearchablesInGlobalSearch(): java.util.List;
			public static ACTION_KEY: string;
			public static ACTION_MSG: string;
			public static APP_DATA: string;
			public static CURSOR_EXTRA_KEY_IN_PROGRESS: string;
			public static EXTRA_DATA_KEY: string;
			public static EXTRA_NEW_SEARCH: string;
			public static EXTRA_SELECT_QUERY: string;
			public static EXTRA_WEB_SEARCH_PENDINGINTENT: string;
			public static FLAG_QUERY_REFINEMENT: number;
			public static INTENT_ACTION_GLOBAL_SEARCH: string;
			public static INTENT_ACTION_SEARCHABLES_CHANGED: string;
			public static INTENT_ACTION_SEARCH_SETTINGS: string;
			public static INTENT_ACTION_SEARCH_SETTINGS_CHANGED: string;
			public static INTENT_ACTION_WEB_SEARCH_SETTINGS: string;
			public static INTENT_GLOBAL_SEARCH_ACTIVITY_CHANGED: string;
			public static MENU_KEY: string;
			public static MENU_KEYCODE: number;
			public static QUERY: string;
			public static SHORTCUT_MIME_TYPE: string;
			public static SUGGEST_COLUMN_AUDIO_CHANNEL_CONFIG: string;
			public static SUGGEST_COLUMN_CONTENT_TYPE: string;
			public static SUGGEST_COLUMN_DURATION: string;
			public static SUGGEST_COLUMN_FLAGS: string;
			public static SUGGEST_COLUMN_FORMAT: string;
			public static SUGGEST_COLUMN_ICON_1: string;
			public static SUGGEST_COLUMN_ICON_2: string;
			public static SUGGEST_COLUMN_INTENT_ACTION: string;
			public static SUGGEST_COLUMN_INTENT_DATA: string;
			public static SUGGEST_COLUMN_INTENT_DATA_ID: string;
			public static SUGGEST_COLUMN_INTENT_EXTRA_DATA: string;
			public static SUGGEST_COLUMN_IS_LIVE: string;
			public static SUGGEST_COLUMN_LAST_ACCESS_HINT: string;
			public static SUGGEST_COLUMN_PRODUCTION_YEAR: string;
			public static SUGGEST_COLUMN_PURCHASE_PRICE: string;
			public static SUGGEST_COLUMN_QUERY: string;
			public static SUGGEST_COLUMN_RATING_SCORE: string;
			public static SUGGEST_COLUMN_RATING_STYLE: string;
			public static SUGGEST_COLUMN_RENTAL_PRICE: string;
			public static SUGGEST_COLUMN_RESULT_CARD_IMAGE: string;
			public static SUGGEST_COLUMN_SHORTCUT_ID: string;
			public static SUGGEST_COLUMN_SPINNER_WHILE_REFRESHING: string;
			public static SUGGEST_COLUMN_TEXT_1: string;
			public static SUGGEST_COLUMN_TEXT_2: string;
			public static SUGGEST_COLUMN_TEXT_2_URL: string;
			public static SUGGEST_COLUMN_VIDEO_HEIGHT: string;
			public static SUGGEST_COLUMN_VIDEO_WIDTH: string;
			public static SUGGEST_MIME_TYPE: string;
			public static SUGGEST_NEVER_MAKE_SHORTCUT: string;
			public static SUGGEST_PARAMETER_LIMIT: string;
			public static SUGGEST_URI_PATH_QUERY: string;
			public static SUGGEST_URI_PATH_SHORTCUT: string;
			public static USER_QUERY: string;
		}
		export module SearchManager {
			export class OnCancelListener {
				public onCancel(): void;
			}
			export class OnDismissListener {
				public onDismiss(): void;
			}
		}
	}
}
