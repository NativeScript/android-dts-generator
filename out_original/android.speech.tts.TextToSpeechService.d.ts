/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.speech.tts.SynthesisCallback.d.ts" />
/// <reference path="./android.speech.tts.SynthesisRequest.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module speech {
		export module tts {
			export class TextToSpeechService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onCreate(): void;
				public onDestroy(): void;
				public onIsLanguageAvailable(param0: string, param1: string, param2: string): number;
				public onGetLanguage(): native.Array<string>;
				public onLoadLanguage(param0: string, param1: string, param2: string): number;
				public onStop(): void;
				public onSynthesizeText(param0: android.speech.tts.SynthesisRequest, param1: android.speech.tts.SynthesisCallback): void;
				public onGetFeaturesForLanguage(param0: string, param1: string, param2: string): java.util.Set;
				public onGetVoices(): java.util.List;
				public onGetDefaultVoiceNameFor(param0: string, param1: string, param2: string): string;
				public onLoadVoice(param0: string): number;
				public onIsValidVoiceName(param0: string): number;
				public onBind(param0: android.content.Intent): android.os.IBinder;
			}
		}
	}
}
