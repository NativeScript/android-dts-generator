/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.media.midi.MidiDeviceInfo.d.ts" />
/// <reference path="./android.media.midi.MidiDeviceStatus.d.ts" />
/// <reference path="./android.media.midi.MidiReceiver.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />

declare module android {
	export module media {
		export module midi {
			export class MidiDeviceService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onCreate(): void;
				public onGetInputPortReceivers(): native.Array<android.media.midi.MidiReceiver>;
				public getOutputPortReceivers(): native.Array<android.media.midi.MidiReceiver>;
				public getDeviceInfo(): android.media.midi.MidiDeviceInfo;
				public onDeviceStatusChanged(param0: android.media.midi.MidiDeviceStatus): void;
				public onClose(): void;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public static SERVICE_INTERFACE: string;
			}
		}
	}
}
