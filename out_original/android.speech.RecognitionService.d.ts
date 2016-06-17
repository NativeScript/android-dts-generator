/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />

declare module android {
	export module speech {
		export class RecognitionService {
			public constructor(param0: android.content.Context);
			public constructor();
			public onStartListening(param0: android.content.Intent, param1: android.speech.RecognitionService.Callback): void;
			public onCancel(param0: android.speech.RecognitionService.Callback): void;
			public onStopListening(param0: android.speech.RecognitionService.Callback): void;
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public onDestroy(): void;
			public static SERVICE_INTERFACE: string;
			public static SERVICE_META_DATA: string;
		}
		export module RecognitionService {
			export class Callback {
				public beginningOfSpeech(): void;
				public bufferReceived(param0: native.Array<number>): void;
				public endOfSpeech(): void;
				public error(param0: number): void;
				public partialResults(param0: android.os.Bundle): void;
				public readyForSpeech(param0: android.os.Bundle): void;
				public results(param0: android.os.Bundle): void;
				public rmsChanged(param0: number): void;
				public getCallingUid(): number;
			}
		}
	}
}
