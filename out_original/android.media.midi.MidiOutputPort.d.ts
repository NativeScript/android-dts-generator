/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.midi.MidiReceiver.d.ts" />

declare module android {
	export module media {
		export module midi {
			export class MidiOutputPort {
				public getPortNumber(): number;
				public onConnect(param0: android.media.midi.MidiReceiver): void;
				public onDisconnect(param0: android.media.midi.MidiReceiver): void;
				public close(): void;
				public finalize(): void;
			}
		}
	}
}
