/// <reference path="./_helpers.d.ts" />

declare module android {
	export module hardware {
		export class SensorListener {
			public onSensorChanged(param0: number, param1: native.Array<number>): void;
			public onAccuracyChanged(param0: number, param1: number): void;
		}
	}
}
