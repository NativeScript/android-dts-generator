/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />

declare module android {
	export module text {
		export module format {
			export class Formatter {
				public constructor();
				public static formatFileSize(param0: android.content.Context, param1: number): string;
				public static formatShortFileSize(param0: android.content.Context, param1: number): string;
				public static formatIpAddress(param0: number): string;
			}
		}
	}
}
