/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.text.TextDirectionHeuristicCompat.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module text {
				export class TextDirectionHeuristicsCompat {
					public static LTR: android.support.v4.text.TextDirectionHeuristicCompat;
					public static RTL: android.support.v4.text.TextDirectionHeuristicCompat;
					public static FIRSTSTRONG_LTR: android.support.v4.text.TextDirectionHeuristicCompat;
					public static FIRSTSTRONG_RTL: android.support.v4.text.TextDirectionHeuristicCompat;
					public static ANYRTL_LTR: android.support.v4.text.TextDirectionHeuristicCompat;
					public static LOCALE: android.support.v4.text.TextDirectionHeuristicCompat;
				}
				export module TextDirectionHeuristicsCompat {
					export class AnyStrong {
						public checkRtl(param0: string, param1: number, param2: number): number;
						public static INSTANCE_RTL: android.support.v4.text.TextDirectionHeuristicsCompat.AnyStrong;
						public static INSTANCE_LTR: android.support.v4.text.TextDirectionHeuristicsCompat.AnyStrong;
					}
					export class FirstStrong {
						public checkRtl(param0: string, param1: number, param2: number): number;
						public static INSTANCE: android.support.v4.text.TextDirectionHeuristicsCompat.FirstStrong;
					}
					export class TextDirectionAlgorithm {
						public checkRtl(param0: string, param1: number, param2: number): number;
					}
					export class TextDirectionHeuristicImpl {
						public constructor();
						public constructor(param0: android.support.v4.text.TextDirectionHeuristicsCompat.TextDirectionAlgorithm);
						public defaultIsRtl(): boolean;
						public isRtl(param0: native.Array<string>, param1: number, param2: number): boolean;
						public isRtl(param0: string, param1: number, param2: number): boolean;
					}
					export class TextDirectionHeuristicInternal {
						public defaultIsRtl(): boolean;
					}
					export class TextDirectionHeuristicLocale {
						public constructor(param0: android.support.v4.text.TextDirectionHeuristicsCompat.TextDirectionAlgorithm);
						public constructor();
						public defaultIsRtl(): boolean;
						public static INSTANCE: android.support.v4.text.TextDirectionHeuristicsCompat.TextDirectionHeuristicLocale;
					}
				}
			}
		}
	}
}
