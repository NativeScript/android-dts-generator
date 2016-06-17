/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module hardware {
		export module usb {
			export class UsbEndpoint {
				public getAddress(): number;
				public getEndpointNumber(): number;
				public getDirection(): number;
				public getAttributes(): number;
				public getType(): number;
				public getMaxPacketSize(): number;
				public getInterval(): number;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
