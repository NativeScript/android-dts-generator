/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module location {
		export class GpsStatus {
			public getTimeToFirstFix(): number;
			public getSatellites(): java.lang.Iterable;
			public getMaxSatellites(): number;
			public static GPS_EVENT_FIRST_FIX: number;
			public static GPS_EVENT_SATELLITE_STATUS: number;
			public static GPS_EVENT_STARTED: number;
			public static GPS_EVENT_STOPPED: number;
		}
		export module GpsStatus {
			export class Listener {
				public onGpsStatusChanged(param0: number): void;
			}
			export class NmeaListener {
				public onNmeaReceived(param0: number, param1: string): void;
			}
		}
	}
}
