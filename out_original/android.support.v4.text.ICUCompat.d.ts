/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module text {
				export class ICUCompat {
					public static maximizeAndGetScript(param0: java.util.Locale): string;
				}
				export module ICUCompat {
					export class ICUCompatImpl {
						public maximizeAndGetScript(param0: java.util.Locale): string;
					}
					export class ICUCompatImplBase {
						public maximizeAndGetScript(param0: java.util.Locale): string;
					}
					export class ICUCompatImplIcs {
						public maximizeAndGetScript(param0: java.util.Locale): string;
					}
					export class ICUCompatImplLollipop {
						public maximizeAndGetScript(param0: java.util.Locale): string;
					}
				}
			}
		}
	}
}
