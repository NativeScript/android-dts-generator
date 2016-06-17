/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export module midi {
			export class MidiInputPort {
				public getPortNumber(): number;
				public onSend(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
				public onFlush(): void;
				public close(): void;
				public finalize(): void;
			}
		}
	}
}
