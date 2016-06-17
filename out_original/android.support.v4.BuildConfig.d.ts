/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export class BuildConfig {
				public constructor();
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
			}
		}
	}
}
