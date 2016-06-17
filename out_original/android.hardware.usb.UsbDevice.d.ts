/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.usb.UsbConfiguration.d.ts" />
/// <reference path="./android.hardware.usb.UsbInterface.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module hardware {
		export module usb {
			export class UsbDevice {
				public getDeviceName(): string;
				public getManufacturerName(): string;
				public getProductName(): string;
				public getVersion(): string;
				public getSerialNumber(): string;
				public getDeviceId(): number;
				public getVendorId(): number;
				public getProductId(): number;
				public getDeviceClass(): number;
				public getDeviceSubclass(): number;
				public getDeviceProtocol(): number;
				public getConfigurationCount(): number;
				public getConfiguration(param0: number): android.hardware.usb.UsbConfiguration;
				public getInterfaceCount(): number;
				public getInterface(param0: number): android.hardware.usb.UsbInterface;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static getDeviceId(param0: string): number;
				public static getDeviceName(param0: number): string;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
