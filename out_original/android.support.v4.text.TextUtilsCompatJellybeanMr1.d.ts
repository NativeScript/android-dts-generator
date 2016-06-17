/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module text {
				export class TextUtilsCompatJellybeanMr1 {
					public static htmlEncode(param0: string): string;
					public static getLayoutDirectionFromLocale(param0: java.util.Locale): number;
				}
			}
		}
	}
}
