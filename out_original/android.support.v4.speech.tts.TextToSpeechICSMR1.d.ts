/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module speech {
				export module tts {
					export class TextToSpeechICSMR1 {
						public static KEY_FEATURE_EMBEDDED_SYNTHESIS: string;
						public static KEY_FEATURE_NETWORK_SYNTHESIS: string;
					}
					export module TextToSpeechICSMR1 {
						export class UtteranceProgressListenerICSMR1 {
							public onDone(param0: string): void;
							public onError(param0: string): void;
							public onStart(param0: string): void;
						}
					}
				}
			}
		}
	}
}
