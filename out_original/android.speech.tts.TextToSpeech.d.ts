/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.speech.tts.UtteranceProgressListener.d.ts" />
/// <reference path="./android.speech.tts.Voice.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module speech {
		export module tts {
			export class TextToSpeech {
				public constructor();
				public constructor(param0: android.content.Context, param1: android.speech.tts.TextToSpeech.OnInitListener);
				public constructor(param0: android.content.Context, param1: android.speech.tts.TextToSpeech.OnInitListener, param2: string);
				public shutdown(): void;
				public addSpeech(param0: string, param1: string, param2: number): number;
				public addSpeech(param0: string, param1: string, param2: number): number;
				public addSpeech(param0: string, param1: string): number;
				public addSpeech(param0: string, param1: java.io.File): number;
				public addEarcon(param0: string, param1: string, param2: number): number;
				public addEarcon(param0: string, param1: string): number;
				public addEarcon(param0: string, param1: java.io.File): number;
				public speak(param0: string, param1: number, param2: android.os.Bundle, param3: string): number;
				public speak(param0: string, param1: number, param2: java.util.HashMap): number;
				public playEarcon(param0: string, param1: number, param2: android.os.Bundle, param3: string): number;
				public playEarcon(param0: string, param1: number, param2: java.util.HashMap): number;
				public playSilentUtterance(param0: number, param1: number, param2: string): number;
				public playSilence(param0: number, param1: number, param2: java.util.HashMap): number;
				public getFeatures(param0: java.util.Locale): java.util.Set;
				public isSpeaking(): boolean;
				public stop(): number;
				public setSpeechRate(param0: number): number;
				public setPitch(param0: number): number;
				public setAudioAttributes(param0: android.media.AudioAttributes): number;
				public getDefaultLanguage(): java.util.Locale;
				public setLanguage(param0: java.util.Locale): number;
				public getLanguage(): java.util.Locale;
				public getAvailableLanguages(): java.util.Set;
				public getVoices(): java.util.Set;
				public setVoice(param0: android.speech.tts.Voice): number;
				public getVoice(): android.speech.tts.Voice;
				public getDefaultVoice(): android.speech.tts.Voice;
				public isLanguageAvailable(param0: java.util.Locale): number;
				public synthesizeToFile(param0: string, param1: android.os.Bundle, param2: java.io.File, param3: string): number;
				public synthesizeToFile(param0: string, param1: java.util.HashMap, param2: string): number;
				public setOnUtteranceCompletedListener(param0: android.speech.tts.TextToSpeech.OnUtteranceCompletedListener): number;
				public setOnUtteranceProgressListener(param0: android.speech.tts.UtteranceProgressListener): number;
				public setEngineByPackageName(param0: string): number;
				public getDefaultEngine(): string;
				public areDefaultsEnforced(): boolean;
				public getEngines(): java.util.List;
				public static getMaxSpeechInputLength(): number;
				public static ACTION_TTS_QUEUE_PROCESSING_COMPLETED: string;
				public static ERROR: number;
				public static ERROR_INVALID_REQUEST: number;
				public static ERROR_NETWORK: number;
				public static ERROR_NETWORK_TIMEOUT: number;
				public static ERROR_NOT_INSTALLED_YET: number;
				public static ERROR_OUTPUT: number;
				public static ERROR_SERVICE: number;
				public static ERROR_SYNTHESIS: number;
				public static LANG_AVAILABLE: number;
				public static LANG_COUNTRY_AVAILABLE: number;
				public static LANG_COUNTRY_VAR_AVAILABLE: number;
				public static LANG_MISSING_DATA: number;
				public static LANG_NOT_SUPPORTED: number;
				public static QUEUE_ADD: number;
				public static QUEUE_FLUSH: number;
				public static STOPPED: number;
				public static SUCCESS: number;
			}
			export module TextToSpeech {
				export class Engine {
					public constructor();
					public constructor(param0: android.speech.tts.TextToSpeech);
					public static ACTION_CHECK_TTS_DATA: string;
					public static ACTION_GET_SAMPLE_TEXT: string;
					public static ACTION_INSTALL_TTS_DATA: string;
					public static ACTION_TTS_DATA_INSTALLED: string;
					public static CHECK_VOICE_DATA_BAD_DATA: number;
					public static CHECK_VOICE_DATA_FAIL: number;
					public static CHECK_VOICE_DATA_MISSING_DATA: number;
					public static CHECK_VOICE_DATA_MISSING_VOLUME: number;
					public static CHECK_VOICE_DATA_PASS: number;
					public static DEFAULT_STREAM: number;
					public static EXTRA_AVAILABLE_VOICES: string;
					public static EXTRA_CHECK_VOICE_DATA_FOR: string;
					public static EXTRA_SAMPLE_TEXT: string;
					public static EXTRA_TTS_DATA_INSTALLED: string;
					public static EXTRA_UNAVAILABLE_VOICES: string;
					public static EXTRA_VOICE_DATA_FILES: string;
					public static EXTRA_VOICE_DATA_FILES_INFO: string;
					public static EXTRA_VOICE_DATA_ROOT_DIRECTORY: string;
					public static INTENT_ACTION_TTS_SERVICE: string;
					public static KEY_FEATURE_EMBEDDED_SYNTHESIS: string;
					public static KEY_FEATURE_NETWORK_RETRIES_COUNT: string;
					public static KEY_FEATURE_NETWORK_SYNTHESIS: string;
					public static KEY_FEATURE_NETWORK_TIMEOUT_MS: string;
					public static KEY_FEATURE_NOT_INSTALLED: string;
					public static KEY_PARAM_PAN: string;
					public static KEY_PARAM_SESSION_ID: string;
					public static KEY_PARAM_STREAM: string;
					public static KEY_PARAM_UTTERANCE_ID: string;
					public static KEY_PARAM_VOLUME: string;
					public static SERVICE_META_DATA: string;
				}
				export class EngineInfo {
					public constructor();
					public toString(): string;
					public icon: number;
					public label: string;
					public name: string;
				}
				export class OnInitListener {
					public onInit(param0: number): void;
				}
				export class OnUtteranceCompletedListener {
					public onUtteranceCompleted(param0: string): void;
				}
			}
		}
	}
}
