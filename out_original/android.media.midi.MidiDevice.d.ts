/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.midi.MidiDeviceInfo.d.ts" />
/// <reference path="./android.media.midi.MidiInputPort.d.ts" />
/// <reference path="./android.media.midi.MidiOutputPort.d.ts" />

declare module android {
	export module media {
		export module midi {
			export class MidiDevice {
				public getInfo(): android.media.midi.MidiDeviceInfo;
				public openInputPort(param0: number): android.media.midi.MidiInputPort;
				public openOutputPort(param0: number): android.media.midi.MidiOutputPort;
				public connectPorts(param0: android.media.midi.MidiInputPort, param1: number): android.media.midi.MidiDevice.MidiConnection;
				public close(): void;
				public finalize(): void;
				public toString(): string;
			}
			export module MidiDevice {
				export class MidiConnection {
					public close(): void;
					public finalize(): void;
				}
			}
		}
	}
}
