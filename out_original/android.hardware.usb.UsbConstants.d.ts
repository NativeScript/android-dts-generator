/// <reference path="./_helpers.d.ts" />

declare module android {
	export module hardware {
		export module usb {
			export class UsbConstants {
				public constructor();
				public static USB_CLASS_APP_SPEC: number;
				public static USB_CLASS_AUDIO: number;
				public static USB_CLASS_CDC_DATA: number;
				public static USB_CLASS_COMM: number;
				public static USB_CLASS_CONTENT_SEC: number;
				public static USB_CLASS_CSCID: number;
				public static USB_CLASS_HID: number;
				public static USB_CLASS_HUB: number;
				public static USB_CLASS_MASS_STORAGE: number;
				public static USB_CLASS_MISC: number;
				public static USB_CLASS_PER_INTERFACE: number;
				public static USB_CLASS_PHYSICA: number;
				public static USB_CLASS_PRINTER: number;
				public static USB_CLASS_STILL_IMAGE: number;
				public static USB_CLASS_VENDOR_SPEC: number;
				public static USB_CLASS_VIDEO: number;
				public static USB_CLASS_WIRELESS_CONTROLLER: number;
				public static USB_DIR_IN: number;
				public static USB_DIR_OUT: number;
				public static USB_ENDPOINT_DIR_MASK: number;
				public static USB_ENDPOINT_NUMBER_MASK: number;
				public static USB_ENDPOINT_XFERTYPE_MASK: number;
				public static USB_ENDPOINT_XFER_BULK: number;
				public static USB_ENDPOINT_XFER_CONTROL: number;
				public static USB_ENDPOINT_XFER_INT: number;
				public static USB_ENDPOINT_XFER_ISOC: number;
				public static USB_INTERFACE_SUBCLASS_BOOT: number;
				public static USB_SUBCLASS_VENDOR_SPEC: number;
				public static USB_TYPE_CLASS: number;
				public static USB_TYPE_MASK: number;
				public static USB_TYPE_RESERVED: number;
				public static USB_TYPE_STANDARD: number;
				public static USB_TYPE_VENDOR: number;
			}
		}
	}
}
