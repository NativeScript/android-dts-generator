/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module media {
		export module midi {
			export class MidiDeviceInfo {
				public getType(): number;
				public getId(): number;
				public getInputPortCount(): number;
				public getOutputPortCount(): number;
				public getPorts(): native.Array<android.media.midi.MidiDeviceInfo.PortInfo>;
				public getProperties(): android.os.Bundle;
				public isPrivate(): boolean;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public static PROPERTY_BLUETOOTH_DEVICE: string;
				public static PROPERTY_MANUFACTURER: string;
				public static PROPERTY_NAME: string;
				public static PROPERTY_PRODUCT: string;
				public static PROPERTY_SERIAL_NUMBER: string;
				public static PROPERTY_USB_DEVICE: string;
				public static PROPERTY_VERSION: string;
				public static TYPE_BLUETOOTH: number;
				public static TYPE_USB: number;
				public static TYPE_VIRTUAL: number;
			}
			export module MidiDeviceInfo {
				export class PortInfo {
					public getType(): number;
					public getPortNumber(): number;
					public getName(): string;
					public static TYPE_INPUT: number;
					public static TYPE_OUTPUT: number;
				}
			}
		}
	}
}
