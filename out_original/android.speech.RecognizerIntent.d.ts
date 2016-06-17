/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />

declare module android {
	export module speech {
		export class RecognizerIntent {
			public static getVoiceDetailsIntent(param0: android.content.Context): android.content.Intent;
			public static ACTION_GET_LANGUAGE_DETAILS: string;
			public static ACTION_RECOGNIZE_SPEECH: string;
			public static ACTION_VOICE_SEARCH_HANDS_FREE: string;
			public static ACTION_WEB_SEARCH: string;
			public static DETAILS_META_DATA: string;
			public static EXTRA_CALLING_PACKAGE: string;
			public static EXTRA_CONFIDENCE_SCORES: string;
			public static EXTRA_LANGUAGE: string;
			public static EXTRA_LANGUAGE_MODEL: string;
			public static EXTRA_LANGUAGE_PREFERENCE: string;
			public static EXTRA_MAX_RESULTS: string;
			public static EXTRA_ONLY_RETURN_LANGUAGE_PREFERENCE: string;
			public static EXTRA_ORIGIN: string;
			public static EXTRA_PARTIAL_RESULTS: string;
			public static EXTRA_PREFER_OFFLINE: string;
			public static EXTRA_PROMPT: string;
			public static EXTRA_RESULTS: string;
			public static EXTRA_RESULTS_PENDINGINTENT: string;
			public static EXTRA_RESULTS_PENDINGINTENT_BUNDLE: string;
			public static EXTRA_SECURE: string;
			public static EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS: string;
			public static EXTRA_SPEECH_INPUT_MINIMUM_LENGTH_MILLIS: string;
			public static EXTRA_SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS: string;
			public static EXTRA_SUPPORTED_LANGUAGES: string;
			public static EXTRA_WEB_SEARCH_ONLY: string;
			public static LANGUAGE_MODEL_FREE_FORM: string;
			public static LANGUAGE_MODEL_WEB_SEARCH: string;
			public static RESULT_AUDIO_ERROR: number;
			public static RESULT_CLIENT_ERROR: number;
			public static RESULT_NETWORK_ERROR: number;
			public static RESULT_NO_MATCH: number;
			public static RESULT_SERVER_ERROR: number;
		}
	}
}
