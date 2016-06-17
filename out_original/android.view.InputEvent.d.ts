/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.InputDevice.d.ts" />

declare module android {
	export module view {
		export class InputEvent {
			public getDeviceId(): number;
			public getDevice(): android.view.InputDevice;
			public getSource(): number;
			public isFromSource(param0: number): boolean;
			public getEventTime(): number;
			public describeContents(): number;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
