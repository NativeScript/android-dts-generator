/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.TriggerEvent.d.ts" />

declare module android {
	export module hardware {
		export class TriggerEventListener {
			public constructor();
			public onTrigger(param0: android.hardware.TriggerEvent): void;
		}
	}
}
