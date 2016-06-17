/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.usb.UsbDevice.d.ts" />
/// <reference path="./android.hardware.usb.UsbDeviceConnection.d.ts" />
/// <reference path="./android.mtp.MtpDeviceInfo.d.ts" />
/// <reference path="./android.mtp.MtpObjectInfo.d.ts" />
/// <reference path="./android.mtp.MtpStorageInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module mtp {
		export class MtpDevice {
			public constructor();
			public constructor(param0: android.hardware.usb.UsbDevice);
			public open(param0: android.hardware.usb.UsbDeviceConnection): boolean;
			public close(): void;
			public finalize(): void;
			public getDeviceName(): string;
			public getDeviceId(): number;
			public toString(): string;
			public getDeviceInfo(): android.mtp.MtpDeviceInfo;
			public getStorageIds(): native.Array<number>;
			public getObjectHandles(param0: number, param1: number, param2: number): native.Array<number>;
			public getObject(param0: number, param1: number): native.Array<number>;
			public getThumbnail(param0: number): native.Array<number>;
			public getStorageInfo(param0: number): android.mtp.MtpStorageInfo;
			public getObjectInfo(param0: number): android.mtp.MtpObjectInfo;
			public deleteObject(param0: number): boolean;
			public getParent(param0: number): number;
			public getStorageId(param0: number): number;
			public importFile(param0: number, param1: string): boolean;
		}
	}
}
