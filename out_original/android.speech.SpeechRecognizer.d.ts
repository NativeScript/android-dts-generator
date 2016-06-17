/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.speech.RecognitionListener.d.ts" />

declare module android {
	export module speech {
		export class SpeechRecognizer {
			public static isRecognitionAvailable(param0: android.content.Context): boolean;
			public static createSpeechRecognizer(param0: android.content.Context): android.speech.SpeechRecognizer;
			public static createSpeechRecognizer(param0: android.content.Context, param1: android.content.ComponentName): android.speech.SpeechRecognizer;
			public setRecognitionListener(param0: android.speech.RecognitionListener): void;
			public startListening(param0: android.content.Intent): void;
			public stopListening(): void;
			public cancel(): void;
			public destroy(): void;
			public static CONFIDENCE_SCORES: string;
			public static ERROR_AUDIO: number;
			public static ERROR_CLIENT: number;
			public static ERROR_INSUFFICIENT_PERMISSIONS: number;
			public static ERROR_NETWORK: number;
			public static ERROR_NETWORK_TIMEOUT: number;
			public static ERROR_NO_MATCH: number;
			public static ERROR_RECOGNIZER_BUSY: number;
			public static ERROR_SERVER: number;
			public static ERROR_SPEECH_TIMEOUT: number;
			public static RESULTS_RECOGNITION: string;
		}
	}
}
