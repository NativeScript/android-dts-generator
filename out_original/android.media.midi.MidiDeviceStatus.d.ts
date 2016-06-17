/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.midi.MidiDeviceInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module media {
		export module midi {
			export class MidiDeviceStatus {
				public getDeviceInfo(): android.media.midi.MidiDeviceInfo;
				public isInputPortOpen(param0: number): boolean;
				public getOutputPortOpenCount(param0: number): number;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
