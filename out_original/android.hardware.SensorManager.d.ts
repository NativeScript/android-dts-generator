/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.Sensor.d.ts" />
/// <reference path="./android.hardware.SensorEventListener.d.ts" />
/// <reference path="./android.hardware.SensorListener.d.ts" />
/// <reference path="./android.hardware.TriggerEventListener.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module hardware {
		export class SensorManager {
			public getSensors(): number;
			public getSensorList(param0: number): java.util.List;
			public getDefaultSensor(param0: number): android.hardware.Sensor;
			public getDefaultSensor(param0: number, param1: boolean): android.hardware.Sensor;
			public registerListener(param0: android.hardware.SensorListener, param1: number): boolean;
			public registerListener(param0: android.hardware.SensorListener, param1: number, param2: number): boolean;
			public unregisterListener(param0: android.hardware.SensorListener): void;
			public unregisterListener(param0: android.hardware.SensorListener, param1: number): void;
			public unregisterListener(param0: android.hardware.SensorEventListener, param1: android.hardware.Sensor): void;
			public unregisterListener(param0: android.hardware.SensorEventListener): void;
			public registerListener(param0: android.hardware.SensorEventListener, param1: android.hardware.Sensor, param2: number): boolean;
			public registerListener(param0: android.hardware.SensorEventListener, param1: android.hardware.Sensor, param2: number, param3: number): boolean;
			public registerListener(param0: android.hardware.SensorEventListener, param1: android.hardware.Sensor, param2: number, param3: android.os.Handler): boolean;
			public registerListener(param0: android.hardware.SensorEventListener, param1: android.hardware.Sensor, param2: number, param3: number, param4: android.os.Handler): boolean;
			public flush(param0: android.hardware.SensorEventListener): boolean;
			public static getRotationMatrix(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>, param3: native.Array<number>): boolean;
			public static getInclination(param0: native.Array<number>): number;
			public static remapCoordinateSystem(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>): boolean;
			public static getOrientation(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
			public static getAltitude(param0: number, param1: number): number;
			public static getAngleChange(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>): void;
			public static getRotationMatrixFromVector(param0: native.Array<number>, param1: native.Array<number>): void;
			public static getQuaternionFromVector(param0: native.Array<number>, param1: native.Array<number>): void;
			public requestTriggerSensor(param0: android.hardware.TriggerEventListener, param1: android.hardware.Sensor): boolean;
			public cancelTriggerSensor(param0: android.hardware.TriggerEventListener, param1: android.hardware.Sensor): boolean;
			public static AXIS_MINUS_X: number;
			public static AXIS_MINUS_Y: number;
			public static AXIS_MINUS_Z: number;
			public static AXIS_X: number;
			public static AXIS_Y: number;
			public static AXIS_Z: number;
			public static DATA_X: number;
			public static DATA_Y: number;
			public static DATA_Z: number;
			public static GRAVITY_DEATH_STAR_I: number;
			public static GRAVITY_EARTH: number;
			public static GRAVITY_JUPITER: number;
			public static GRAVITY_MARS: number;
			public static GRAVITY_MERCURY: number;
			public static GRAVITY_MOON: number;
			public static GRAVITY_NEPTUNE: number;
			public static GRAVITY_PLUTO: number;
			public static GRAVITY_SATURN: number;
			public static GRAVITY_SUN: number;
			public static GRAVITY_THE_ISLAND: number;
			public static GRAVITY_URANUS: number;
			public static GRAVITY_VENUS: number;
			public static LIGHT_CLOUDY: number;
			public static LIGHT_FULLMOON: number;
			public static LIGHT_NO_MOON: number;
			public static LIGHT_OVERCAST: number;
			public static LIGHT_SHADE: number;
			public static LIGHT_SUNLIGHT: number;
			public static LIGHT_SUNLIGHT_MAX: number;
			public static LIGHT_SUNRISE: number;
			public static MAGNETIC_FIELD_EARTH_MAX: number;
			public static MAGNETIC_FIELD_EARTH_MIN: number;
			public static PRESSURE_STANDARD_ATMOSPHERE: number;
			public static RAW_DATA_INDEX: number;
			public static RAW_DATA_X: number;
			public static RAW_DATA_Y: number;
			public static RAW_DATA_Z: number;
			public static SENSOR_ACCELEROMETER: number;
			public static SENSOR_ALL: number;
			public static SENSOR_DELAY_FASTEST: number;
			public static SENSOR_DELAY_GAME: number;
			public static SENSOR_DELAY_NORMAL: number;
			public static SENSOR_DELAY_UI: number;
			public static SENSOR_LIGHT: number;
			public static SENSOR_MAGNETIC_FIELD: number;
			public static SENSOR_MAX: number;
			public static SENSOR_MIN: number;
			public static SENSOR_ORIENTATION: number;
			public static SENSOR_ORIENTATION_RAW: number;
			public static SENSOR_PROXIMITY: number;
			public static SENSOR_STATUS_ACCURACY_HIGH: number;
			public static SENSOR_STATUS_ACCURACY_LOW: number;
			public static SENSOR_STATUS_ACCURACY_MEDIUM: number;
			public static SENSOR_STATUS_NO_CONTACT: number;
			public static SENSOR_STATUS_UNRELIABLE: number;
			public static SENSOR_TEMPERATURE: number;
			public static SENSOR_TRICORDER: number;
			public static STANDARD_GRAVITY: number;
		}
	}
}
