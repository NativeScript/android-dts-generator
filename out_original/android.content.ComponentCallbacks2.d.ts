/// <reference path="./_helpers.d.ts" />

declare module android {
	export module content {
		export class ComponentCallbacks2 {
			public onTrimMemory(param0: number): void;
			public static TRIM_MEMORY_BACKGROUND: number;
			public static TRIM_MEMORY_COMPLETE: number;
			public static TRIM_MEMORY_MODERATE: number;
			public static TRIM_MEMORY_RUNNING_CRITICAL: number;
			public static TRIM_MEMORY_RUNNING_LOW: number;
			public static TRIM_MEMORY_RUNNING_MODERATE: number;
			public static TRIM_MEMORY_UI_HIDDEN: number;
		}
	}
}
