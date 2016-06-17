/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.usb.UsbDeviceConnection.d.ts" />
/// <reference path="./android.hardware.usb.UsbEndpoint.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />

declare module android {
	export module hardware {
		export module usb {
			export class UsbRequest {
				public constructor();
				public initialize(param0: android.hardware.usb.UsbDeviceConnection, param1: android.hardware.usb.UsbEndpoint): boolean;
				public close(): void;
				public finalize(): void;
				public getEndpoint(): android.hardware.usb.UsbEndpoint;
				public getClientData(): java.lang.Object;
				public setClientData(param0: java.lang.Object): void;
				public queue(param0: java.nio.ByteBuffer, param1: number): boolean;
				public cancel(): boolean;
			}
		}
	}
}
