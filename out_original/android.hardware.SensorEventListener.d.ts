/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.Sensor.d.ts" />
/// <reference path="./android.hardware.SensorEvent.d.ts" />

declare module android {
	export module hardware {
		export class SensorEventListener {
			public onSensorChanged(param0: android.hardware.SensorEvent): void;
			public onAccuracyChanged(param0: android.hardware.Sensor, param1: number): void;
		}
	}
}
