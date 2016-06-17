/// <reference path="./_helpers.d.ts" />

declare module android {
	export module os {
		export class BatteryManager {
			public isCharging(): boolean;
			public getIntProperty(param0: number): number;
			public getLongProperty(param0: number): number;
			public static ACTION_CHARGING: string;
			public static ACTION_DISCHARGING: string;
			public static BATTERY_HEALTH_COLD: number;
			public static BATTERY_HEALTH_DEAD: number;
			public static BATTERY_HEALTH_GOOD: number;
			public static BATTERY_HEALTH_OVERHEAT: number;
			public static BATTERY_HEALTH_OVER_VOLTAGE: number;
			public static BATTERY_HEALTH_UNKNOWN: number;
			public static BATTERY_HEALTH_UNSPECIFIED_FAILURE: number;
			public static BATTERY_PLUGGED_AC: number;
			public static BATTERY_PLUGGED_USB: number;
			public static BATTERY_PLUGGED_WIRELESS: number;
			public static BATTERY_PROPERTY_CAPACITY: number;
			public static BATTERY_PROPERTY_CHARGE_COUNTER: number;
			public static BATTERY_PROPERTY_CURRENT_AVERAGE: number;
			public static BATTERY_PROPERTY_CURRENT_NOW: number;
			public static BATTERY_PROPERTY_ENERGY_COUNTER: number;
			public static BATTERY_STATUS_CHARGING: number;
			public static BATTERY_STATUS_DISCHARGING: number;
			public static BATTERY_STATUS_FULL: number;
			public static BATTERY_STATUS_NOT_CHARGING: number;
			public static BATTERY_STATUS_UNKNOWN: number;
			public static EXTRA_HEALTH: string;
			public static EXTRA_ICON_SMALL: string;
			public static EXTRA_LEVEL: string;
			public static EXTRA_PLUGGED: string;
			public static EXTRA_PRESENT: string;
			public static EXTRA_SCALE: string;
			public static EXTRA_STATUS: string;
			public static EXTRA_TECHNOLOGY: string;
			public static EXTRA_TEMPERATURE: string;
			public static EXTRA_VOLTAGE: string;
		}
	}
}
