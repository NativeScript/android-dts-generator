/// <reference path="./_helpers.d.ts" />

declare module android {
	export module speech {
		export module tts {
			export class SynthesisCallback {
				public getMaxBufferSize(): number;
				public start(param0: number, param1: number, param2: number): number;
				public audioAvailable(param0: native.Array<number>, param1: number, param2: number): number;
				public done(): number;
				public error(): void;
				public error(param0: number): void;
				public hasStarted(): boolean;
				public hasFinished(): boolean;
			}
		}
	}
}
