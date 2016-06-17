/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />

declare module android {
	export module speech {
		export class RecognitionListener {
			public onReadyForSpeech(param0: android.os.Bundle): void;
			public onBeginningOfSpeech(): void;
			public onRmsChanged(param0: number): void;
			public onBufferReceived(param0: native.Array<number>): void;
			public onEndOfSpeech(): void;
			public onError(param0: number): void;
			public onResults(param0: android.os.Bundle): void;
			public onPartialResults(param0: android.os.Bundle): void;
			public onEvent(param0: number, param1: android.os.Bundle): void;
		}
	}
}
