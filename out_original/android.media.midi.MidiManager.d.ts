/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.bluetooth.BluetoothDevice.d.ts" />
/// <reference path="./android.media.midi.MidiDevice.d.ts" />
/// <reference path="./android.media.midi.MidiDeviceInfo.d.ts" />
/// <reference path="./android.media.midi.MidiDeviceStatus.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />

declare module android {
	export module media {
		export module midi {
			export class MidiManager {
				public registerDeviceCallback(param0: android.media.midi.MidiManager.DeviceCallback, param1: android.os.Handler): void;
				public unregisterDeviceCallback(param0: android.media.midi.MidiManager.DeviceCallback): void;
				public getDevices(): native.Array<android.media.midi.MidiDeviceInfo>;
				public openDevice(param0: android.media.midi.MidiDeviceInfo, param1: android.media.midi.MidiManager.OnDeviceOpenedListener, param2: android.os.Handler): void;
				public openBluetoothDevice(param0: android.bluetooth.BluetoothDevice, param1: android.media.midi.MidiManager.OnDeviceOpenedListener, param2: android.os.Handler): void;
			}
			export module MidiManager {
				export class DeviceCallback {
					public constructor();
					public onDeviceAdded(param0: android.media.midi.MidiDeviceInfo): void;
					public onDeviceRemoved(param0: android.media.midi.MidiDeviceInfo): void;
					public onDeviceStatusChanged(param0: android.media.midi.MidiDeviceStatus): void;
				}
				export class OnDeviceOpenedListener {
					public onDeviceOpened(param0: android.media.midi.MidiDevice): void;
				}
			}
		}
	}
}
