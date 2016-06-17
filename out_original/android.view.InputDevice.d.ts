/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Vibrator.d.ts" />
/// <reference path="./android.view.KeyCharacterMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module view {
		export class InputDevice {
			public static getDevice(param0: number): android.view.InputDevice;
			public static getDeviceIds(): native.Array<number>;
			public getId(): number;
			public getControllerNumber(): number;
			public getVendorId(): number;
			public getProductId(): number;
			public getDescriptor(): string;
			public isVirtual(): boolean;
			public getName(): string;
			public getSources(): number;
			public supportsSource(param0: number): boolean;
			public getKeyboardType(): number;
			public getKeyCharacterMap(): android.view.KeyCharacterMap;
			public hasKeys(param0: native.Array<number>): native.Array<boolean>;
			public getMotionRange(param0: number): android.view.InputDevice.MotionRange;
			public getMotionRange(param0: number, param1: number): android.view.InputDevice.MotionRange;
			public getMotionRanges(): java.util.List;
			public getVibrator(): android.os.Vibrator;
			public hasMicrophone(): boolean;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public describeContents(): number;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
			public static KEYBOARD_TYPE_ALPHABETIC: number;
			public static KEYBOARD_TYPE_NONE: number;
			public static KEYBOARD_TYPE_NON_ALPHABETIC: number;
			public static MOTION_RANGE_ORIENTATION: number;
			public static MOTION_RANGE_PRESSURE: number;
			public static MOTION_RANGE_SIZE: number;
			public static MOTION_RANGE_TOOL_MAJOR: number;
			public static MOTION_RANGE_TOOL_MINOR: number;
			public static MOTION_RANGE_TOUCH_MAJOR: number;
			public static MOTION_RANGE_TOUCH_MINOR: number;
			public static MOTION_RANGE_X: number;
			public static MOTION_RANGE_Y: number;
			public static SOURCE_ANY: number;
			public static SOURCE_BLUETOOTH_STYLUS: number;
			public static SOURCE_CLASS_BUTTON: number;
			public static SOURCE_CLASS_JOYSTICK: number;
			public static SOURCE_CLASS_MASK: number;
			public static SOURCE_CLASS_NONE: number;
			public static SOURCE_CLASS_POINTER: number;
			public static SOURCE_CLASS_POSITION: number;
			public static SOURCE_CLASS_TRACKBALL: number;
			public static SOURCE_DPAD: number;
			public static SOURCE_GAMEPAD: number;
			public static SOURCE_HDMI: number;
			public static SOURCE_JOYSTICK: number;
			public static SOURCE_KEYBOARD: number;
			public static SOURCE_MOUSE: number;
			public static SOURCE_STYLUS: number;
			public static SOURCE_TOUCHPAD: number;
			public static SOURCE_TOUCHSCREEN: number;
			public static SOURCE_TOUCH_NAVIGATION: number;
			public static SOURCE_TRACKBALL: number;
			public static SOURCE_UNKNOWN: number;
		}
		export module InputDevice {
			export class MotionRange {
				public getAxis(): number;
				public getSource(): number;
				public isFromSource(param0: number): boolean;
				public getMin(): number;
				public getMax(): number;
				public getRange(): number;
				public getFlat(): number;
				public getFuzz(): number;
				public getResolution(): number;
			}
		}
	}
}
