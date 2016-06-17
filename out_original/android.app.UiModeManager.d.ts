/// <reference path="./_helpers.d.ts" />

declare module android {
	export module app {
		export class UiModeManager {
			public enableCarMode(param0: number): void;
			public disableCarMode(param0: number): void;
			public getCurrentModeType(): number;
			public setNightMode(param0: number): void;
			public getNightMode(): number;
			public static ACTION_ENTER_CAR_MODE: string;
			public static ACTION_ENTER_DESK_MODE: string;
			public static ACTION_EXIT_CAR_MODE: string;
			public static ACTION_EXIT_DESK_MODE: string;
			public static DISABLE_CAR_MODE_GO_HOME: number;
			public static ENABLE_CAR_MODE_ALLOW_SLEEP: number;
			public static ENABLE_CAR_MODE_GO_CAR_HOME: number;
			public static MODE_NIGHT_AUTO: number;
			public static MODE_NIGHT_NO: number;
			public static MODE_NIGHT_YES: number;
		}
	}
}
