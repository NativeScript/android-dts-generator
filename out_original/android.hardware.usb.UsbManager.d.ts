/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.hardware.usb.UsbAccessory.d.ts" />
/// <reference path="./android.hardware.usb.UsbDevice.d.ts" />
/// <reference path="./android.hardware.usb.UsbDeviceConnection.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />

declare module android {
	export module hardware {
		export module usb {
			export class UsbManager {
				public getDeviceList(): java.util.HashMap;
				public openDevice(param0: android.hardware.usb.UsbDevice): android.hardware.usb.UsbDeviceConnection;
				public getAccessoryList(): native.Array<android.hardware.usb.UsbAccessory>;
				public openAccessory(param0: android.hardware.usb.UsbAccessory): android.os.ParcelFileDescriptor;
				public hasPermission(param0: android.hardware.usb.UsbDevice): boolean;
				public hasPermission(param0: android.hardware.usb.UsbAccessory): boolean;
				public requestPermission(param0: android.hardware.usb.UsbDevice, param1: android.app.PendingIntent): void;
				public requestPermission(param0: android.hardware.usb.UsbAccessory, param1: android.app.PendingIntent): void;
				public static ACTION_USB_ACCESSORY_ATTACHED: string;
				public static ACTION_USB_ACCESSORY_DETACHED: string;
				public static ACTION_USB_DEVICE_ATTACHED: string;
				public static ACTION_USB_DEVICE_DETACHED: string;
				public static EXTRA_ACCESSORY: string;
				public static EXTRA_DEVICE: string;
				public static EXTRA_PERMISSION_GRANTED: string;
			}
		}
	}
}
