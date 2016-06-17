/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.Sensor.d.ts" />

declare module android {
	export module hardware {
		export class SensorEventListener2 {
			public onFlushCompleted(param0: android.hardware.Sensor): void;
		}
	}
}
