/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class AppOpsManager {
			public static permissionToOp(param0: string): string;
			public startWatchingMode(param0: string, param1: string, param2: android.app.AppOpsManager.OnOpChangedListener): void;
			public stopWatchingMode(param0: android.app.AppOpsManager.OnOpChangedListener): void;
			public checkOp(param0: string, param1: number, param2: string): number;
			public checkOpNoThrow(param0: string, param1: number, param2: string): number;
			public noteOp(param0: string, param1: number, param2: string): number;
			public noteOpNoThrow(param0: string, param1: number, param2: string): number;
			public noteProxyOp(param0: string, param1: string): number;
			public noteProxyOpNoThrow(param0: string, param1: string): number;
			public startOp(param0: string, param1: number, param2: string): number;
			public startOpNoThrow(param0: string, param1: number, param2: string): number;
			public finishOp(param0: string, param1: number, param2: string): void;
			public checkPackage(param0: number, param1: string): void;
			public static MODE_ALLOWED: number;
			public static MODE_DEFAULT: number;
			public static MODE_ERRORED: number;
			public static MODE_IGNORED: number;
			public static OPSTR_ADD_VOICEMAIL: string;
			public static OPSTR_BODY_SENSORS: string;
			public static OPSTR_CALL_PHONE: string;
			public static OPSTR_CAMERA: string;
			public static OPSTR_COARSE_LOCATION: string;
			public static OPSTR_FINE_LOCATION: string;
			public static OPSTR_GET_USAGE_STATS: string;
			public static OPSTR_MOCK_LOCATION: string;
			public static OPSTR_MONITOR_HIGH_POWER_LOCATION: string;
			public static OPSTR_MONITOR_LOCATION: string;
			public static OPSTR_READ_CALENDAR: string;
			public static OPSTR_READ_CALL_LOG: string;
			public static OPSTR_READ_CELL_BROADCASTS: string;
			public static OPSTR_READ_CONTACTS: string;
			public static OPSTR_READ_EXTERNAL_STORAGE: string;
			public static OPSTR_READ_PHONE_STATE: string;
			public static OPSTR_READ_SMS: string;
			public static OPSTR_RECEIVE_MMS: string;
			public static OPSTR_RECEIVE_SMS: string;
			public static OPSTR_RECEIVE_WAP_PUSH: string;
			public static OPSTR_RECORD_AUDIO: string;
			public static OPSTR_SEND_SMS: string;
			public static OPSTR_SYSTEM_ALERT_WINDOW: string;
			public static OPSTR_USE_FINGERPRINT: string;
			public static OPSTR_USE_SIP: string;
			public static OPSTR_WRITE_CALENDAR: string;
			public static OPSTR_WRITE_CALL_LOG: string;
			public static OPSTR_WRITE_CONTACTS: string;
			public static OPSTR_WRITE_EXTERNAL_STORAGE: string;
			public static OPSTR_WRITE_SETTINGS: string;
		}
		export module AppOpsManager {
			export class OnOpChangedListener {
				public onOpChanged(param0: string, param1: string): void;
			}
		}
	}
}
