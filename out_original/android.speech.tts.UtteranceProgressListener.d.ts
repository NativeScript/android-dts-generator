/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module speech {
		export module tts {
			export class UtteranceProgressListener {
				public constructor();
				public onStart(param0: string): void;
				public onDone(param0: string): void;
				public onError(param0: string): void;
				public onError(param0: string, param1: number): void;
				public onStop(param0: string, param1: boolean): void;
			}
		}
	}
}
