/// <reference path="./_helpers.d.ts" />

declare module android {
	export module util {
		export class Config {
			public static DEBUG: boolean;
			public static LOGD: boolean;
			public static LOGV: boolean;
			public static PROFILE: boolean;
			public static RELEASE: boolean;
		}
	}
}
