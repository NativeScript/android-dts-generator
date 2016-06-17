/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.media.AudioFormat.d.ts" />

declare module android {
	export module service {
		export module voice {
			export class AlwaysOnHotwordDetector {
				public getSupportedRecognitionModes(): number;
				public startRecognition(param0: number): boolean;
				public stopRecognition(): boolean;
				public createEnrollIntent(): android.content.Intent;
				public createUnEnrollIntent(): android.content.Intent;
				public createReEnrollIntent(): android.content.Intent;
				public static RECOGNITION_FLAG_ALLOW_MULTIPLE_TRIGGERS: number;
				public static RECOGNITION_FLAG_CAPTURE_TRIGGER_AUDIO: number;
				public static RECOGNITION_MODE_USER_IDENTIFICATION: number;
				public static RECOGNITION_MODE_VOICE_TRIGGER: number;
				public static STATE_HARDWARE_UNAVAILABLE: number;
				public static STATE_KEYPHRASE_ENROLLED: number;
				public static STATE_KEYPHRASE_UNENROLLED: number;
				public static STATE_KEYPHRASE_UNSUPPORTED: number;
			}
			export module AlwaysOnHotwordDetector {
				export class Callback {
					public constructor();
					public onAvailabilityChanged(param0: number): void;
					public onDetected(param0: android.service.voice.AlwaysOnHotwordDetector.EventPayload): void;
					public onError(): void;
					public onRecognitionPaused(): void;
					public onRecognitionResumed(): void;
				}
				export class EventPayload {
					public getCaptureAudioFormat(): android.media.AudioFormat;
					public getTriggerAudio(): native.Array<number>;
				}
			}
		}
	}
}
