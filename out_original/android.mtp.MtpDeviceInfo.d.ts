/// <reference path="./_helpers.d.ts" />

declare module android {
	export module mtp {
		export class MtpDeviceInfo {
			public getManufacturer(): string;
			public getModel(): string;
			public getVersion(): string;
			public getSerialNumber(): string;
		}
	}
}
