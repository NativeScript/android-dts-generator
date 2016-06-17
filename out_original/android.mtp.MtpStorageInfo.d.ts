/// <reference path="./_helpers.d.ts" />

declare module android {
	export module mtp {
		export class MtpStorageInfo {
			public getStorageId(): number;
			public getMaxCapacity(): number;
			public getFreeSpace(): number;
			public getDescription(): string;
			public getVolumeIdentifier(): string;
		}
	}
}
