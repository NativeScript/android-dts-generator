/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.AudioDeviceInfo.d.ts" />

declare module android {
	export module media {
		export class AudioDeviceCallback {
			public constructor();
			public onAudioDevicesAdded(param0: native.Array<android.media.AudioDeviceInfo>): void;
			public onAudioDevicesRemoved(param0: native.Array<android.media.AudioDeviceInfo>): void;
		}
	}
}
