/// <reference path="./_helpers.d.ts" />

declare module android {
	export module speech {
		export class RecognizerResultsIntent {
			public static ACTION_VOICE_SEARCH_RESULTS: string;
			public static EXTRA_VOICE_SEARCH_RESULT_HTML: string;
			public static EXTRA_VOICE_SEARCH_RESULT_HTML_BASE_URLS: string;
			public static EXTRA_VOICE_SEARCH_RESULT_HTTP_HEADERS: string;
			public static EXTRA_VOICE_SEARCH_RESULT_STRINGS: string;
			public static EXTRA_VOICE_SEARCH_RESULT_URLS: string;
			public static URI_SCHEME_INLINE: string;
		}
	}
}
