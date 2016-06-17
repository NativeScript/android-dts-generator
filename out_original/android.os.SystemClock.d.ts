/// <reference path="./_helpers.d.ts" />

declare module android {
	export module os {
		export class SystemClock {
			public static sleep(param0: number): void;
			public static setCurrentTimeMillis(param0: number): boolean;
			public static uptimeMillis(): number;
			public static elapsedRealtime(): number;
			public static elapsedRealtimeNanos(): number;
			public static currentThreadTimeMillis(): number;
		}
	}
}
