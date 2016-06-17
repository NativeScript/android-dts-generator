/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export module midi {
			export class MidiReceiver {
				public constructor();
				public constructor(param0: number);
				public onSend(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
				public flush(): void;
				public onFlush(): void;
				public getMaxMessageSize(): number;
				public send(param0: native.Array<number>, param1: number, param2: number): void;
				public send(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
			}
		}
	}
}
