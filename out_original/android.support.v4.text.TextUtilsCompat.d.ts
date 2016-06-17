/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module text {
				export class TextUtilsCompat {
					public static htmlEncode(param0: string): string;
					public static getLayoutDirectionFromLocale(param0: java.util.Locale): number;
					public static ROOT: java.util.Locale;
				}
				export module TextUtilsCompat {
					export class TextUtilsCompatImpl {
						public htmlEncode(param0: string): string;
						public getLayoutDirectionFromLocale(param0: java.util.Locale): number;
					}
					export class TextUtilsCompatJellybeanMr1Impl {
						public htmlEncode(param0: string): string;
						public getLayoutDirectionFromLocale(param0: java.util.Locale): number;
					}
				}
			}
		}
	}
}
