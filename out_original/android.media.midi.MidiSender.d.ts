/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.midi.MidiReceiver.d.ts" />

declare module android {
	export module media {
		export module midi {
			export class MidiSender {
				public constructor();
				public connect(param0: android.media.midi.MidiReceiver): void;
				public disconnect(param0: android.media.midi.MidiReceiver): void;
				public onConnect(param0: android.media.midi.MidiReceiver): void;
				public onDisconnect(param0: android.media.midi.MidiReceiver): void;
			}
		}
	}
}
