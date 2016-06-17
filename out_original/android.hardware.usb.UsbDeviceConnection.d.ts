/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.usb.UsbConfiguration.d.ts" />
/// <reference path="./android.hardware.usb.UsbEndpoint.d.ts" />
/// <reference path="./android.hardware.usb.UsbInterface.d.ts" />
/// <reference path="./android.hardware.usb.UsbRequest.d.ts" />

declare module android {
	export module hardware {
		export module usb {
			export class UsbDeviceConnection {
				public close(): void;
				public getFileDescriptor(): number;
				public getRawDescriptors(): native.Array<number>;
				public claimInterface(param0: android.hardware.usb.UsbInterface, param1: boolean): boolean;
				public releaseInterface(param0: android.hardware.usb.UsbInterface): boolean;
				public setInterface(param0: android.hardware.usb.UsbInterface): boolean;
				public setConfiguration(param0: android.hardware.usb.UsbConfiguration): boolean;
				public controlTransfer(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number, param6: number): number;
				public controlTransfer(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number, param6: number, param7: number): number;
				public bulkTransfer(param0: android.hardware.usb.UsbEndpoint, param1: native.Array<number>, param2: number, param3: number): number;
				public bulkTransfer(param0: android.hardware.usb.UsbEndpoint, param1: native.Array<number>, param2: number, param3: number, param4: number): number;
				public requestWait(): android.hardware.usb.UsbRequest;
				public getSerial(): string;
			}
		}
	}
}
