/// <reference path="./_helpers.d.ts" />

declare module android {
	export module hardware {
		export class Sensor {
			public getReportingMode(): number;
			public getName(): string;
			public getVendor(): string;
			public getType(): number;
			public getVersion(): number;
			public getMaximumRange(): number;
			public getResolution(): number;
			public getPower(): number;
			public getMinDelay(): number;
			public getFifoReservedEventCount(): number;
			public getFifoMaxEventCount(): number;
			public getStringType(): string;
			public getMaxDelay(): number;
			public isWakeUpSensor(): boolean;
			public toString(): string;
			public static REPORTING_MODE_CONTINUOUS: number;
			public static REPORTING_MODE_ONE_SHOT: number;
			public static REPORTING_MODE_ON_CHANGE: number;
			public static REPORTING_MODE_SPECIAL_TRIGGER: number;
			public static STRING_TYPE_ACCELEROMETER: string;
			public static STRING_TYPE_AMBIENT_TEMPERATURE: string;
			public static STRING_TYPE_GAME_ROTATION_VECTOR: string;
			public static STRING_TYPE_GEOMAGNETIC_ROTATION_VECTOR: string;
			public static STRING_TYPE_GRAVITY: string;
			public static STRING_TYPE_GYROSCOPE: string;
			public static STRING_TYPE_GYROSCOPE_UNCALIBRATED: string;
			public static STRING_TYPE_HEART_RATE: string;
			public static STRING_TYPE_LIGHT: string;
			public static STRING_TYPE_LINEAR_ACCELERATION: string;
			public static STRING_TYPE_MAGNETIC_FIELD: string;
			public static STRING_TYPE_MAGNETIC_FIELD_UNCALIBRATED: string;
			public static STRING_TYPE_ORIENTATION: string;
			public static STRING_TYPE_PRESSURE: string;
			public static STRING_TYPE_PROXIMITY: string;
			public static STRING_TYPE_RELATIVE_HUMIDITY: string;
			public static STRING_TYPE_ROTATION_VECTOR: string;
			public static STRING_TYPE_SIGNIFICANT_MOTION: string;
			public static STRING_TYPE_STEP_COUNTER: string;
			public static STRING_TYPE_STEP_DETECTOR: string;
			public static STRING_TYPE_TEMPERATURE: string;
			public static TYPE_ACCELEROMETER: number;
			public static TYPE_ALL: number;
			public static TYPE_AMBIENT_TEMPERATURE: number;
			public static TYPE_GAME_ROTATION_VECTOR: number;
			public static TYPE_GEOMAGNETIC_ROTATION_VECTOR: number;
			public static TYPE_GRAVITY: number;
			public static TYPE_GYROSCOPE: number;
			public static TYPE_GYROSCOPE_UNCALIBRATED: number;
			public static TYPE_HEART_RATE: number;
			public static TYPE_LIGHT: number;
			public static TYPE_LINEAR_ACCELERATION: number;
			public static TYPE_MAGNETIC_FIELD: number;
			public static TYPE_MAGNETIC_FIELD_UNCALIBRATED: number;
			public static TYPE_ORIENTATION: number;
			public static TYPE_PRESSURE: number;
			public static TYPE_PROXIMITY: number;
			public static TYPE_RELATIVE_HUMIDITY: number;
			public static TYPE_ROTATION_VECTOR: number;
			public static TYPE_SIGNIFICANT_MOTION: number;
			public static TYPE_STEP_COUNTER: number;
			public static TYPE_STEP_DETECTOR: number;
			public static TYPE_TEMPERATURE: number;
		}
	}
}
