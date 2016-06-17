/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.usb.UsbEndpoint.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module hardware {
		export module usb {
			export class UsbInterface {
				public getId(): number;
				public getAlternateSetting(): number;
				public getName(): string;
				public getInterfaceClass(): number;
				public getInterfaceSubclass(): number;
				public getInterfaceProtocol(): number;
				public getEndpointCount(): number;
				public getEndpoint(param0: number): android.hardware.usb.UsbEndpoint;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
