/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.usb.UsbInterface.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module hardware {
		export module usb {
			export class UsbConfiguration {
				public getId(): number;
				public getName(): string;
				public isSelfPowered(): boolean;
				public isRemoteWakeup(): boolean;
				public getMaxPower(): number;
				public getInterfaceCount(): number;
				public getInterface(param0: number): android.hardware.usb.UsbInterface;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
