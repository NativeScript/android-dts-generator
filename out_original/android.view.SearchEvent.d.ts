/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.InputDevice.d.ts" />

declare module android {
	export module view {
		export class SearchEvent {
			public constructor();
			public constructor(param0: android.view.InputDevice);
			public getInputDevice(): android.view.InputDevice;
		}
	}
}
