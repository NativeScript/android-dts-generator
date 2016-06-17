/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module os {
				export class EnvironmentCompat {
					public static getStorageState(param0: java.io.File): string;
					public static MEDIA_UNKNOWN: string;
				}
			}
		}
	}
}
