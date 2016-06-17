/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.WorkSource.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class PowerManager {
			public newWakeLock(param0: number, param1: string): android.os.PowerManager.WakeLock;
			public isWakeLockLevelSupported(param0: number): boolean;
			public isScreenOn(): boolean;
			public isInteractive(): boolean;
			public reboot(param0: string): void;
			public isPowerSaveMode(): boolean;
			public isDeviceIdleMode(): boolean;
			public isIgnoringBatteryOptimizations(param0: string): boolean;
			public static ACQUIRE_CAUSES_WAKEUP: number;
			public static ACTION_DEVICE_IDLE_MODE_CHANGED: string;
			public static ACTION_POWER_SAVE_MODE_CHANGED: string;
			public static FULL_WAKE_LOCK: number;
			public static ON_AFTER_RELEASE: number;
			public static PARTIAL_WAKE_LOCK: number;
			public static PROXIMITY_SCREEN_OFF_WAKE_LOCK: number;
			public static RELEASE_FLAG_WAIT_FOR_NO_PROXIMITY: number;
			public static SCREEN_BRIGHT_WAKE_LOCK: number;
			public static SCREEN_DIM_WAKE_LOCK: number;
		}
		export module PowerManager {
			export class WakeLock {
				public finalize(): void;
				public setReferenceCounted(param0: boolean): void;
				public acquire(): void;
				public acquire(param0: number): void;
				public release(): void;
				public release(param0: number): void;
				public isHeld(): boolean;
				public setWorkSource(param0: android.os.WorkSource): void;
				public toString(): string;
			}
		}
	}
}
