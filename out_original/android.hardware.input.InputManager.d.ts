/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.InputDevice.d.ts" />

declare module android {
	export module hardware {
		export module input {
			export class InputManager {
				public getInputDevice(param0: number): android.view.InputDevice;
				public getInputDeviceIds(): native.Array<number>;
				public registerInputDeviceListener(param0: android.hardware.input.InputManager.InputDeviceListener, param1: android.os.Handler): void;
				public unregisterInputDeviceListener(param0: android.hardware.input.InputManager.InputDeviceListener): void;
				public static ACTION_QUERY_KEYBOARD_LAYOUTS: string;
				public static META_DATA_KEYBOARD_LAYOUTS: string;
			}
			export module InputManager {
				export class InputDeviceListener {
					public onInputDeviceAdded(param0: number): void;
					public onInputDeviceRemoved(param0: number): void;
					public onInputDeviceChanged(param0: number): void;
				}
			}
		}
	}
}
