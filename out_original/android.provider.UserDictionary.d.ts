/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module provider {
		export class UserDictionary {
			public constructor();
			public static AUTHORITY: string;
			public static CONTENT_URI: android.net.Uri;
		}
		export module UserDictionary {
			export class Words {
				public constructor();
				public static addWord(param0: android.content.Context, param1: string, param2: number, param3: number): void;
				public static addWord(param0: android.content.Context, param1: string, param2: number, param3: string, param4: java.util.Locale): void;
				public static APP_ID: string;
				public static CONTENT_ITEM_TYPE: string;
				public static CONTENT_TYPE: string;
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
				public static FREQUENCY: string;
				public static LOCALE: string;
				public static LOCALE_TYPE_ALL: number;
				public static LOCALE_TYPE_CURRENT: number;
				public static SHORTCUT: string;
				public static WORD: string;
				public static _ID: string;
			}
		}
	}
}
